'use client';
import { useRef } from 'react';

const CopyLinkButton = () => {
  const textToCopy = process.env.NEXT_PUBLIC_BOT_LINK || 'Internal Error';
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleCopyClick = async () => {
    try {
      if (textAreaRef.current) {
        await navigator.clipboard.writeText(textToCopy);
        alert('Link copied to clipboard');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        right: 20,
        bottom: 20,
        borderRadius: '50%',
        width: 100,
        height: 100,
        background: '#333',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={handleCopyClick}>Copy Link</button>
      <textarea
        ref={textAreaRef}
        value={textToCopy}
        style={{ position: 'absolute', left: '-9999px' }}
        readOnly
      />
    </div>
  );
};

export default CopyLinkButton;
