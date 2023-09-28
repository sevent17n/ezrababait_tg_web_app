import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TypeRootState } from "@/src/app/store/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;
