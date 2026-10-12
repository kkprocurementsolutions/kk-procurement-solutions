"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function MicrosoftClarity() {
  useEffect(() => {
    Clarity.init("ywpu7oj2po");
  }, []);

  return null;
}