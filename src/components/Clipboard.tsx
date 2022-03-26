import { useState } from "react";
import { Badge } from "react-bootstrap";

export function ClipboardCopy({ copyText }: any) {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <address>
      <span>Email:</span> <a className="link-success" type="email" href={`mailto: ${copyText}`} onClick={handleCopyClick}>{copyText} </a>
      <span className="text-muted fz-07">(click to copy)</span>
      {isCopied && <Badge bg="success">Copied</Badge>}
    </address>
  );
}