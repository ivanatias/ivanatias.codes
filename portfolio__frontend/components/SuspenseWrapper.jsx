import React, { Suspense } from "react";
import Loading from "./Loading";
import { useNearScreen } from "../hooks/useNearScreen";

const SuspenseWrapper = ({
  children,
  loadingMessage,
  containerHeight,
  threshold,
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
