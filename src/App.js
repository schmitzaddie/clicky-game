import React, { Component } from 'react';
import Navbar from "./component/Navbar";
import Jumbotron from "./component/Jumbotron";
import Card from "./component/Card/Card";
import Wrapper from "./component/Wrapper";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    highScore: 0,
    clicked: []
  };

  count = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      const updatedArray = [...this.state.clicked, (id)];
      this.handleScore();
      this.setState({ clicked: updatedArray });
    } else {
      this.handleReset();
    }
  }

  handleScore = () => {
    const userScore = this.state.score + 1;
    this.setState({
      score: userScore
    })
    if (userScore > this.state.highScore) {
      this.setState({ highScore: userScore });
    }
    this.randomImage();
  }

  handleReset = () => {
    this.setState({
      score: 0,
      highScore: this.state.highScore,
      clicked: []
    })
    this.randomImage();
  }

  randomImage = () => {
    let shuffleImage = function (arr) {
      for (let i = arr.length - 1; i >0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }
    shuffleImage = shuffleImage(cards);
    this.setState({ cards: shuffleImage });
  }
  render() {
    console.log(this.state.clicked)
    return (
      <Wrapper>
        <div>
          <Navbar score={this.state.score} highScore={this.state.highScore} />
          < Jumbotron />
          {this.state.cards.map(card => (
            <Card
              key={card.id}
              count={this.count}
              handleScore={this.handleScore}
              handleReset={this.handleReset}
              randomImage={this.randomImage}
              id={card.id}
              image={card.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default App;
