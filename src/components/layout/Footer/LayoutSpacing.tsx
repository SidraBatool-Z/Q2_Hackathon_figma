"use client";

import { usePathname } from "next/navigation";
import React from "react";

const LayoutSpacing = (): JSX.Element | null => {
  const pathname = usePathname();

  // Return null if the pathname does not include "product"
  if (!pathname.includes("product")) return null;

  // Return a valid JSX element if the condition is met
  return <div className="mb-20 md:mb-0" />;
};

export default LayoutSpacing;