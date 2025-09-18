import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";

export default function Index() {
  useEffect(() => {
    window.location.replace("/amigos");
  }, []);
  return null;
}
