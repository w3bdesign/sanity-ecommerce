import { useState, useEffect } from "React";

export const useHydration = () => {
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setHasHydrated(true);
    }
  }, []);

  return hasHydrated;
};
