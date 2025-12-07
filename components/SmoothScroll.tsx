"use client"

import Lenis from "lenis";
import { useEffect } from "react";

function SmoothScroll({children}:any) {

    useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      
    });

    function raf(time:any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  return (
    <>{children}</>
  )
}

export default SmoothScroll
