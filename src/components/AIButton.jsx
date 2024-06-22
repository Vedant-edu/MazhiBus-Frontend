// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import AIbox from "./AIbox";
 // Assuming AIBox is imported from a file

export default function AIButton() {
  const [showAIBox, setShowAIBox] = useState(false);

  const handleClick = () => {
    setShowAIBox(true);
  };

  return (
    <>
      <button
        className={`bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-4 hover:from-violet-500 hover:to-pink-500 fixed bottom-24 right-8 rounded-full flex ${showAIBox? "hidden": ""}`}
        onClick={handleClick}
      >
        <div>
          <svg
            height="24"
            width="24"
            fill="#000"
            viewBox="0 0 24 24"
            className="sparkle"
          >
            <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
          </svg>
        </div>
        <div className="text-black ml-4">Book with AI</div>
      </button>

      {showAIBox && <AIbox />} {/* Conditionally render AIBox */}
    </>
  );
}
