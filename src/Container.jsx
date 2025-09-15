import { useState } from "react";
import Stats from "./Stats";
import Textbox from "./Textbox";

const Container = () => {
  const [text, setText] = useState("");
  const numberOfChar = text.length;
  const instagramLeft = 200 - text.length;
  const threadsLeft = 500 - text.length;
  const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const stats = {
    numberOfChar : numberOfChar,
    numberOfWords : numberOfWords,
    instagramLeft : instagramLeft,
    threadsLeft : threadsLeft
  }

  return (
    <main className="container">
      <Stats stats={stats}/>
      <Textbox text={text} setText={setText} />
    </main>
  );
};

export default Container;
