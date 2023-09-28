import { useTypedSelector } from "@/src/shared/hooks/use-typed-selector";

export const useAuth = () => useTypedSelector((state) => state.user);
