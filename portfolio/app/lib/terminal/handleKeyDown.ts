import { RefObject, KeyboardEvent } from "react";
import { executeCommand } from "./executeCommand";

export interface KeyDownParams {
  inputElement: RefObject<HTMLInputElement | null>;
  outputElement: RefObject<HTMLDivElement | null>;
  inputTextDisplay: RefObject<HTMLSpanElement | null>;
  history: string[];
  setHistory: (history: string[]) => void;
  historyIndex: number;
  setHistoryIndex: (index: number) => void;
  scrollToBottom: () => void;
}

export function handleKeyDown({
  inputElement,
  outputElement,
  inputTextDisplay,
  history,
  setHistory,
  historyIndex,
  setHistoryIndex,
  scrollToBottom,
}: KeyDownParams) {
  return ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (!inputElement.current || !outputElement.current || !inputTextDisplay.current)
      return;

    switch (key) {
      case "Enter": {
        const command = inputElement.current.value.trim().toLowerCase();

        if (command) {
          setHistory([...history, command]);
          setHistoryIndex(history.length);

          const promptLine = document.createElement("div");

          promptLine.innerHTML = `
          <span class="text-prompt">leandro@portfolio:~$</span>
          <span class="text-output-white">${command}</span>
        `;
          outputElement.current.appendChild(promptLine);

          executeCommand({
            command,
            outputElement: outputElement.current,
            scrollToBottom,
          });
        }

        inputElement.current.value = "";
        inputTextDisplay.current.textContent = "";

        scrollToBottom();

        break;
      }

      case "ArrowUp":
        console.log(history, historyIndex);

        if (history.length > 0 && historyIndex > 0) {
          setHistoryIndex(historyIndex--);

          inputElement.current.value = history[historyIndex];
          inputTextDisplay.current.textContent = inputElement.current.value;
        }
        break;

      case "ArrowDown":
        if (historyIndex < history.length - 1) {
          setHistoryIndex(historyIndex++);

          inputElement.current.value = history[historyIndex];
          inputTextDisplay.current.textContent = inputElement.current.value;
        } 
        else {
          setHistoryIndex((historyIndex = history.length));

          inputElement.current.value = "";
          inputTextDisplay.current.textContent = "";
        }
        break;
    }
  };
}
