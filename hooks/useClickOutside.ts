import { useEffect } from "react";

type ClickOutsideHandler = (event: MouseEvent) => void;

export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: ClickOutsideHandler,
  active: boolean = true
) {
  useEffect(() => {
    if (!active) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, active]);
}
