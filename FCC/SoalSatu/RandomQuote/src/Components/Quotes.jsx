import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./Button";

const Quotes = ({ word }) => {
  const [now, setNow] = useState(0);

  function NextQoute() {
    setNow(now < word.length - 1 ? now + 1 : 0);
  }

  return (
    <>
      {word.map(
        (x, i) =>
          now === i && (
            <div id="Quotes" className="pt-6 px-6" key={i}>
              <section id="text" className="text-center pr-6">
                <p>{x.content}</p>
              </section>
              <section id="author" className="text-right pr-6 pt-10">
                <p>
                  - <span>{x.author}</span>
                </p>
              </section>
              <Button
                NewQoute={NextQoute}
                PostingQuote={x.content}
                PostingAuthor={x.author}
              />
            </div>
          )
      )}
    </>
  );
};

Quotes.propTypes = {
  word: PropTypes.array,
};

export default Quotes;
