"use client";
import { useState, useEffect, PropsWithChildren } from "react";

import { ReactQueryClient } from "@/src/providers/react-query-client";

export const Providers = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsReady(true);
    }
  }, []);

  return isReady ? <ReactQueryClient>{children}</ReactQueryClient> : null;
};
