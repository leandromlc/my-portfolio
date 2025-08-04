import { ChangeEvent, RefObject } from "react";

export const handleInput = (ref: RefObject<HTMLSpanElement | null>) => {
  return ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!ref.current) return;
    
    ref.current.textContent = target.value;
  };
};
