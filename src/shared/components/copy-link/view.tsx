"use client";
import { useRef } from "react";

export const CopyLink = () => {
  const textToCopy = process.env.NEXT_PUBLIC_BOT_LINK || "Internal Error";
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleCopyClick = async () => {
    try {
      if (textAreaRef.current) {
        await navigator.clipboard.writeText(textToCopy);
        alert("Link copied to clipboard");
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div>
      <button onClick={handleCopyClick}>Copy Link</button>
      <textarea ref={textAreaRef} value={textToCopy} readOnly />
    </div>
  );
};
