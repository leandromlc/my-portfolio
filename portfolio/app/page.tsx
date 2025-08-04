"use client";

import { useEffect } from "react";
import Terminal from "./components/layout/Terminal";

export default function Home() {
  useEffect(() => {
    document.body.addEventListener("click", () => {
      document.getElementById("command-input")?.focus();
    });
  });

  return <Terminal />;
}
