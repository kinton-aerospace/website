"use client";

import { useEffect, useState } from "react";

const useUserActivity = (timeoutMs: number = 8000) => {
  const [activeUser, setActiveUser] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const resetTimer = () => {
      setActiveUser(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setActiveUser(false);
      }, timeoutMs);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("mousedown", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("touchstart", resetTimer);
    window.addEventListener("scroll", resetTimer);

    resetTimer();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("mousedown", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("touchstart", resetTimer);
      window.removeEventListener("scroll", resetTimer);
    };
  }, [timeoutMs]);

  return activeUser;
};

export default useUserActivity;
