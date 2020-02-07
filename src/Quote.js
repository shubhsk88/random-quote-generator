import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import "./Quote.css";
import styled from "styled-components";

const Quote = ({ color, text, author, real }) => {
  const css = {
    backgroundColor: "white",
    border: "4px solid white",
    padding: "60px",
    margin: "15% 30% 15% 30%",
    color: color,
    fontSize: "20px",
    borderRadius: "10px"
  };

  const Button = styled.button`
    background: ${color};
    font-size: 1em;
    margin-top: 2em;
    margin-left: 80%;
    padding: 0.2em 0.23em;
    border: 2px solid ${color};
    border-radius: 3px;
    color: white;
    text-align: right;
  `;

  let twitterSite = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${text}" ${author}`;

  return (
    <div className="card" style={css}>
      <span>
        <FontAwesomeIcon icon={faQuoteLeft} size="2x" />
        <div id="quote" style={{ margin: "-20px 60px", fontSize: "30px" }}>
          {text}
        </div>
        <div id="author" style={{ textAlign: "right", margin: "20px" }}>
          -{author}
        </div>
        <Button onClick={real}>New Quote</Button>
        <div className="haha">
          {/* // eslint-disable-next-line */}
          <a
            href={encodeURI(twitterSite)}
            target="_blank"
            style={{ color: color, padding: "10px", paddingTop: "100px" }}
          >
            <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
          </a>
        </div>
      </span>
    </div>
  );
};

export default Quote;
