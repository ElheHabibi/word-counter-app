import { useState } from "react";
import Warning from "./Warning";

function Textbox() {
  const [text, setText] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleClick = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setShowWarning(true);
      newText = newText.replace("<script>", "");
      setText(newText);
    }else{
      setShowWarning('')
    }
      setText(newText);
  };

  return (
    <>
      <textarea
        value={text}
        onChange={handleClick}
        placeholder="Type or paste your text here!"
        spellCheck="false"
      />
      {showWarning ? <Warning /> : null}
    </>
  );
}

export default Textbox;
