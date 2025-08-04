import { dedent } from "ts-dedent";
import { RefObject, useCallback, useEffect } from "react";

export interface WelComeParams {
  outputElement: RefObject<HTMLDivElement | null>;
  scrollToBottom: () => void;
}

export default function WelCome({ outputElement, scrollToBottom }: WelComeParams) {
  const welcomeMessage = dedent(`
    LeandroOS v1.0 Kernel (leandromlc.dev)

    Booting system... <span class="text-output-green">Done.</span>
    Initializing services... <span class="text-output-green">Done.</span>
    Mounting virtual filesystem... <span class="text-output-green">Done.</span>

    Welcome to my professional portfolio.
    Type 'help' to see the list of available commands.`);

  const typeEffect = useCallback(
    (element: HTMLDivElement, text: string, callback?: () => void) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = text.replace(/\n/g, "<br>");

      const walkAndType = async (sourceNode: ChildNode, targetElement: HTMLElement) => {
        for (const node of Array.from(sourceNode.childNodes)) {
          if (node.nodeType === Node.TEXT_NODE) {
            const textContent = node.textContent || "";

            for (const char of textContent) {
              targetElement.appendChild(document.createTextNode(char));
              scrollToBottom();

              await new Promise((r) => setTimeout(r, 10));
            }
          }

          if (node.nodeType === Node.ELEMENT_NODE) {
            const newElement = document.createElement(node.nodeName);

            for (const attr of Array.from((node as Element).attributes)) {
              newElement.setAttribute(attr.name, attr.value);
            }
            targetElement.appendChild(newElement);

            await walkAndType(node, newElement);
          }
        }
      };

      (async () => {
        await walkAndType(tempDiv, element);
        callback?.();
      })();
    },
    [scrollToBottom]
  );

  useEffect(() => {
    if (!outputElement.current) return;

    const div = document.createElement("div");
    div.style.whiteSpace = "pre-wrap";
    outputElement.current.appendChild(div);

    typeEffect(div, welcomeMessage);
  }, [outputElement, welcomeMessage]);

  return null;
}
