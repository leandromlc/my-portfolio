"use client";

import { useRef, useEffect, useState } from "react";

import { handleInput } from "@/app/lib/terminal/handleInput";
import { handleKeyDown } from "@/app/lib/terminal/handleKeyDown";
import WelCome from "./Welcome";

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalBody = useRef<HTMLDivElement | null>(null);
  const outputElement = useRef<HTMLDivElement | null>(null);
  const inputElement = useRef<HTMLInputElement | null>(null);
  const inputTextDisplay = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!inputElement.current) return;

    inputElement.current.disabled = false;
    inputElement.current.focus();
  }, [inputElement]);

  const scrollToBottom = () => {
    if (!terminalBody.current) return;

    terminalBody.current.scrollTop = terminalBody.current.scrollHeight;
  };

  return (
    <div
      className="w-full h-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl"
      id="terminal"
    >
      <WelCome outputElement={outputElement}  scrollToBottom={scrollToBottom}/>

      <div className="bg-gray-800 p-3 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 text-center text-sm text-gray-400">leandro@portfolio</div>
      </div>

      <div ref={terminalBody} className="p-4 h-[80vh] overflow-y-auto">
        <div ref={outputElement}></div>

        <div id="input-line" className="flex items-center">
          <span className="text-prompt">leandro@portfolio:~$</span>
          <span className="ml-2 whitespace-pre" ref={inputTextDisplay}></span>
          <span className="cursor"></span>
          <input
            id="command-input"
            type="text"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            ref={inputElement}
            onChange={handleInput(inputTextDisplay)}
            onKeyDown={handleKeyDown({
              inputElement,
              outputElement,
              inputTextDisplay,
              history,
              setHistory,
              historyIndex,
              setHistoryIndex,
              scrollToBottom,
            })}
          />
        </div>
      </div>
    </div>
  );
}
