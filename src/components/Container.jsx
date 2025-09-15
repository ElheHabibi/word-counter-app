import { useState } from "react";
import Stats from "./Stats";
import Textbox from "./Textbox";
import { INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";

const Container = () => {
  const [text, setText] = useState("");

  const stats = {
    numberOfChar: text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== '').length,
    sentences: text.split(/[.!?]/).filter((sentence) => sentence.trim() !== '').length,
    instagramLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Stats stats={stats} />
      <Textbox text={text} setText={setText} />
    </main>
  );
};

export default Container;
