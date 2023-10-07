import PropTypes from "prop-types";

const Button = ({ NewQoute, PostingQuote, PostingAuthor }) => {
  const twitter = "https://twitter.com/intent/tweet?hashtags=quotes&text=";

  // console.log(`${PostingQuote} - ${PostingAuthor}`);
  return (
    <div className="flex justify-between py-10 px-6" id="allButton">
      <section>
        <a
          className=" mx-2 p-2 rounded-md border border-red-300 hover:bg-green-300"
          id="tweet-quote"
          href={twitter + `"${PostingQuote}" - ${PostingAuthor}`}
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <button
          className="mx-2 p-2 rounded-md  border border-red-300 hover:bg-green-300"
          id="facebook-quote"
        >
          Facebook
        </button>
      </section>
      <section>
        <button
          id="new-quote"
          className="border border-red-300 hover:bg-green-300 p-2 rounded-md"
          onClick={NewQoute}
        >
          New Quote
        </button>
      </section>
    </div>
  );
};

Button.propTypes = {
  NewQoute: PropTypes.func,
  PostingQuote: PropTypes.string,
  PostingAuthor: PropTypes.string,
};

export default Button;
