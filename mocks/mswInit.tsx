"use client";

import { useEffect } from "react";
import { worker } from "./mocks";

export default function MSWInitializer() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development"
    ) {
      worker.start();
    }
  }, []);
  return null;
}
