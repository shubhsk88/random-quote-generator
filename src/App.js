import React, { Component } from "react";
import "./App.css";
// import { createGlobalStyle } from "styled-components";
import Quote from "./Quote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
      quoteText: "",
      quoteAuthor: ""
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://quote-garden.herokuapp.com/quotes/random")
      .then(response => response.json())
      .then(quoter =>
        this.setState({
          quoteText: quoter["quoteText"],
          quoteAuthor: quoter["quoteAuthor"],
          color: this.getRandomColor()
        })
      );
  };

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    //   const Regal = createGlobalStyle`
    // body {
    //   background-color:${this.state.color}
    // } `;
    document.body.style = `background-color:${this.state.color};`;

    return (
      <div>
        <Quote
          color={this.state.color}
          author={this.state.quoteAuthor}
          text={this.state.quoteText}
          real={this.fetchData}
        />
        <p>designed by shubhs</p>
      </div>
    );
  }
}

export default App;
