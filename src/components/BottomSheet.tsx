import React from "react";
import ReactDOM from "react-dom";
// import styled from 'styled-components';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

import { usePrevious } from "@/utils/common";
import { scrollLock } from "@/utils/scroll";

const SPRING_CONFIG = { stiffness: 300, damping: 30, mass: 0.2 };
const CLOSE_Y = window.innerHeight + 50; // Add padding for closing animation
const OPEN_Y = 32;

const BottomSheet = ({
  rootSelector,
  children,
}: {
  rootSelector: string;
  children: React.ReactNode;
}) => {
  const { isOpen, el } = useBottomSheetState();
  const dispatch = useBottomSheetDispatch();
  const prevOpen = usePrevious(isOpen);
  const constraintsRef = React.useRef<any>(null);
  const sheetY = useSpring(CLOSE_Y, SPRING_CONFIG);
  const dragY = useMotionValue(0);

  const handleDrag = React.useCallback(
    (_: any, { point }: any) => {
      sheetY.set(point.y);
    },
    [sheetY]
  );

  const handleDragEnd = React.useCallback(
    (_: any, { velocity }: any) => {
      if (velocity.y > 500) {
        // User flicked the sheet down
        dispatch({ type: "close" });
      } else {
        // Snap back to original position
        sheetY.stop();
        sheetY.set(OPEN_Y);
      }
      // Reset drag target to original position
      dragY.set(0);
    },
    [dispatch, sheetY, dragY]
  );

  React.useEffect(() => {
    if (prevOpen && !isOpen) dispatch({ type: "close" });
  }, [dispatch, isOpen, prevOpen]);

  React.useEffect(() => {
    if (isOpen) {
      applyGlobalStyles(rootSelector);
    } else {
      cleanupGlobalStyles(rootSelector);
    }
  }, [isOpen]); // eslint-disable-line

  return (
    <div
      className={`z-[9999999] fixed top-0 bottom-0 left-0 right-0 overflow-hidden ${
        isOpen ? "cursor-pointer" : "cursor-none"
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch({ type: "close" })}
            className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(51, 51, 51, 0.5)]"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sheet"
            ref={constraintsRef}
            initial={{ y: CLOSE_Y }}
            animate={{ y: OPEN_Y, transition: { type: "tween" } }}
            exit={{ y: CLOSE_Y }}
            style={{ y: sheetY }}
            className="backdrop"
          >
            <div className="sheet-drag-target" />
            <motion.div
              style={{ y: dragY }}
              drag="y"
              dragElastic={0}
              dragConstraints={constraintsRef}
              dragMomentum={false}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              className="sheet-drag-handle"
            />
            <div className="sheet-content">{el}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface State {
  isOpen: boolean;
  el: null | React.ReactNode;
}

type Action = { type: "open"; payload: React.ReactNode } | { type: "close" };
type Dispatch = (action: Action) => void;

const StateContext = React.createContext<State | undefined>(undefined);
const DispatchContext = React.createContext<Dispatch | undefined>(undefined);

function useBottomSheetDispatch() {
  const dispatch = React.useContext(DispatchContext);
  if (dispatch === undefined) {
    throw new Error("useBottomSheet must be used within a BottomSheetProvider");
  }
  return dispatch;
}

function useBottomSheetState() {
  const state = React.useContext(StateContext);
  if (state === undefined) {
    throw new Error("useBottomSheet must be used within a BottomSheetProvider");
  }
  return state;
}

function bottomSheetReducer(state: State, action: Action) {
  switch (action.type) {
    case "open": {
      return { ...state, isOpen: true, el: action.payload };
    }
    case "close": {
      return { ...state, isOpen: false, el: null };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

export function BottomSheetProvider({
  children,
  rootSelector,
}: {
  rootSelector: string;
  children: React.ReactNode;
}) {
  const [state, dispatch] = React.useReducer(bottomSheetReducer, {
    isOpen: false,
    el: null,
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
        <BottomSheetPortal rootSelector={rootSelector} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useBottomSheet() {
  const dispatch = useBottomSheetDispatch();

  return React.useMemo(
    () => ({
      open: (payload: React.ReactNode) => dispatch({ type: "open", payload }),
      close: () => dispatch({ type: "close" }),
    }),
    [dispatch]
  );
}

const BottomSheetPortal = (props: any) => {
  const portalRef = React.useRef<any>(null);

  React.useEffect(() => {
    let el = document.getElementById("#bottom-sheet-portal");

    if (!el) {
      el = document.createElement("div");
      el.id = "bottom-sheet-portal";
      document.body.appendChild(el);
    }

    portalRef.current = el;
  }, []);

  if (!portalRef.current) return null;

  const bottomSheet = <BottomSheet {...props} />;
  return ReactDOM.createPortal(bottomSheet, portalRef.current);
};

function applyGlobalStyles(rootSelector: string) {
  const body = document.getElementsByTagName("body")[0];
  const root = document.querySelector(rootSelector) as HTMLDivElement;

  scrollLock.enable();

  body.style.backgroundColor = "#000";
  root.style.overflow = "hidden";
  root.style.willChange = "transform";
  root.style.transition = "transform 200ms linear";
  root.style.transform = "translateY(env(safe-area-inset-top)) scale(0.95)";
  root.style.borderRadius = "8px";
}

function cleanupGlobalStyles(rootSelector: string) {
  const body = document.getElementsByTagName("body")[0];
  const root = document.querySelector(rootSelector) as HTMLDivElement;

  function onTransitionEnd() {
    root.style.overflow = "";
    root.style.willChange = "";
    root.style.transition = "";
    body.style.backgroundColor = "";
    root.removeEventListener("transitionend", onTransitionEnd);
  }

  // Start animating back
  root.style.borderRadius = "";
  root.style.transform = "";

  // Remove temp properties after animation is finished
  root.addEventListener("transitionend", onTransitionEnd);
  scrollLock.disable();
}

export default BottomSheet;
