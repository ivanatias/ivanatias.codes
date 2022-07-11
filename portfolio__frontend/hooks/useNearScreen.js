import {
  useState,
  useEffect,
  useRef,
  useCallback,
  startTransition,
} from "react";

export const useNearScreen = (threshold = 1, rootMargin = "0px") => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef();

  const observerCallback = useCallback((entries, observer) => {
    const element = entries[0];
    if (element.isIntersecting) {
      startTransition(() => {
        setIsNearScreen(true);
      });
      observer.disconnect();
    }
  }, []);

  useEffect(() => {
    let observer;

    //Providing external intersection observer support only for browsers that don't support it natively.
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(observerCallback, {
        threshold,
        rootMargin,
      });
      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  }, []);

  return { isNearScreen, fromRef };
};
