import { useState } from "react";

export function ClipboardCopy({ copyText }: any) {
  const [isCopied, setIsCopied] = useState(false);

  // async function copyTextToClipboard(text: string) {
  //   if ('clipboard' in navigator) {
  //     return await navigator.clipboard.writeText(text);
  //   } else {
  //     return document.execCommand('copy', true, text);
  //   }
  // }

  // const handleCopyClick = () => {
  //   copyTextToClipboard(copyText)
  //     .then(() => {
  //       setIsCopied(true);
  //       setTimeout(() => {
  //         setIsCopied(false);
  //       }, 1500);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  const test = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const email = e.currentTarget.dataset.email
    setIsCopied(true)
  }

  return (
    <div>
      <address>
        <span>Email:</span> <a href="mailto: abc@example.com" data-email='abc@example.com' onClick={(e) => test(e)}>abc@example.com</a>
        {isCopied && <span> Copied</span>}
      </address>
      <a href="https://github.com/wwnp/got-react">Github Repo</a>

      {/* <input type="text" value={copyText} readOnly /> */}
      {/* <button onClick={handleCopyClick}>
        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
      </button> */}
    </div>
  );
}