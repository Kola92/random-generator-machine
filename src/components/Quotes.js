import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

const Quotes = () => {
	// Declare new state variables called quote & author
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	useEffect(() => {
		getQuote()
	}, []);

	const getQuote = () => {
		let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
		fetch(url)
			.then(res => res.json())
			.then(data => {
				let dataQuotes = data.quotes;
				let randomNum = Math.floor(Math.random() * dataQuotes.length);
				let randomQuote = data.quotes[randomNum];

				setQuote(randomQuote.quote);
				setAuthor(randomQuote.author);
			})
	}
	
	const handleClick = () => {
		getQuote();
	}

  return (
    <div id="quote-box">
      <div id="text">
        <p>
          {quote}
        </p>
      </div>
      <div id="author">
				<p>{author}</p>
      </div>

      <div id="buttons">
        <div className="social-media">
          <a href="twitter.com/intent/tweet" id="tweet-quote">
            <span>
              <i>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </span>
          </a>
          <a href="#" id="tumblr-quote">
            <span>
              <i>
                <FontAwesomeIcon icon={faTumblr} />
              </i>
            </span>
          </a>
        </div>
        <button id="new-quote" onClick={handleClick}>New Quote</button>
      </div>
    </div>
  );
};

export default Quotes;
