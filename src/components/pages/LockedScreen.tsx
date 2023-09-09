"use client";
import { usePage } from "@/store";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LockedScreen() {
  const changePage = usePage((state) => state.changePage);
  const [password, setPassword] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [currentTime, setCurrentTime] = useState(""); // Saat bilgisini boş bir string olarak başlatıyoruz

  useEffect(() => {
    if (password === "31") {
      changePage("desktop");
    }
  }, [changePage, password]);

  useEffect(() => {
    // Saati güncellemek için bir interval kullanıyoruz
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Komponent sona erdiğinde interval'i temizle
    return () => clearInterval(interval);
  }, []);

  const pageVariants = {
    hidden: {
      opacity: 0,
      y: '100%',
    },
    visible: {
      opacity: 1,
      y: '0%',
    },
  };

  const handleScreenClick = () => {
    setShowInput(true);
  };

  return (
    <motion.div
      className="flex items-center w-full justify-center p-1 h-screen"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      onClick={handleScreenClick}
    >
      {showInput ? (
        <input
          type="password"
          className="p-1 border-gray-400 border-2  outline-none "
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      ) : (
        <div className="text-9xl text-gray-800 font-extrabold mb-4">
          {currentTime}
        </div>
      )}
    </motion.div>
  );
}
