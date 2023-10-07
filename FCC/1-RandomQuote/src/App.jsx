import { useEffect, useState } from "react";

import Quotes from "./Components/Quotes";

function App() {
  const [Word, setWord] = useState(null);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes/random?limit=108")
      .then((res) => res.json())
      .then((data) => {
        setWord(data);
      });
  }, []);
  return (
    <div className="containter">
      <div
        id="quote-box"
        className="left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 absolute bg-white rounded-md w-2/5 "
      >
        {Word && <Quotes word={Word} />}
      </div>
      <p className="absolute left-2/4 top-3/4 -translate-x-2/4  text-white">
        <a href="https://instagram.com/zakinuraverus">zakinuraverus</a>
      </p>
    </div>
  );
}

export default App;
