import React, { Suspense } from "react";
import { Loading } from "../components";
import { useNearScreen } from "../hooks/useNearScreen";

const SuspenseWrapper = ({
  children,
  loadingMessage,
  containerHeight,
  threshold = 1, //Default threshold: 100% (For code blocks)
  rootMargin,
}) => {
  const { isNearScreen, fromRef } = useNearScreen(threshold, rootMargin);
  return (
    <div ref={fromRef}>
      {isNearScreen ? (
        <Suspense
          fallback={
            <Loading
              message={loadingMessage}
              containerHeight={containerHeight}
            />
          }
        >
          {children}
        </Suspense>
      ) : (
        <Loading message={loadingMessage} containerHeight={containerHeight} />
      )}
    </div>
  );
};

export default SuspenseWrapper;
