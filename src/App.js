import {Component} from 'react'
import ReactPopUp from './components/ReactPopUp'
import {CustomButton} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    matchOver: false,
    playerChoice: {},
    opponentChoice: {},
    result: '',
  }

  chooseIcon = d => {
    const random = Math.floor(Math.random() * 101) % 3
    const opponentId = choicesList[random].id
    if (choicesList[d].id === 'ROCK') {
      if (opponentId === 'ROCK') {
        this.setState({
          matchOver: true,
          playerChoice: choicesList[d],
          opponentChoice: choicesList[random],
          result: 'IT IS DRAW',
        })
      } else if (opponentId === 'PAPER') {
        this.setState(prevState => ({
          matchOver: true,
          playerChoice: choicesList[d],
          opponentChoice: choicesList[random],
          result: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      } else if (opponentId === 'SCISSORS') {
        this.setState(prevState => ({
          matchOver: true,
          playerChoice: choicesList[d],
          opponentChoice: choicesList[random],
          result: 'YOU WON',
          score: prevState.score + 1,
        }))
      }
    } else if (choicesList[d].id === 'PAPER') {
      if (opponentId === 'ROCK') {
        this.setState(prevState => ({
          matchOver: true,
          playerChoice: choicesList[d],
          opponentChoice: choicesList[random],
          result: 'YOU WON',
          score: prevState.score + 1,
        }))
      } else if (opponentId === 'PAPER') {
        this.setState({
          matchOver: true,
          playerChoice: choicesList[d],
          opponentChoice: choicesList[random],
          result: 'IT IS DRAW',
        })
      } else if (opponentId === 'SCISSORS') {
        this.setState(prevState => ({
          matchOver: true,
          playerChoice: choicesList[d],
          opponentChoice: choicesList[random],
          result: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      }
    } else if (choicesList[d].id === 'SCISSORS') {
      if (opponentId === 'ROCK') {
        this.setState(prevState => ({
          matchOver: true,
          playerChoice: choicesList[d],
          opponentChoice: choicesList[random],
          result: 'YOU LOSE',
          score: prevState.score - 1,
        }))
      } else if (opponentId === 'PAPER') {
        this.setState(prevState => ({
          matchOver: true,
          playerChoice: choicesList[d],
          opponentChoice: choicesList[random],
          result: 'YOU WON',
          score: prevState.score + 1,
        }))
      } else if (opponentId === 'SCISSORS') {
        this.setState({
          matchOver: true,
          playerChoice: choicesList[d],
          opponentChoice: choicesList[random],
          result: 'IT IS DRAW',
        })
      }
    }
  }

  playAgain = () => {
    this.setState({
      matchOver: false,
      playerChoice: {},
      opponentChoice: {},
      result: '',
    })
  }

  render() {
    const {score, matchOver, playerChoice, opponentChoice, result} = this.state
    const {imageUrl} = playerChoice
    const bottomCon = matchOver ? (
      <div className="overCard">
        <div className="iconCon">
          <div className="eachicon">
            <p>You</p>
            <img src={imageUrl} className="icon" alt="your choice" />
          </div>
          <div className="eachicon">
            <p>Opponent</p>
            <img
              src={opponentChoice.imageUrl}
              className="icon"
              alt="opponent choice"
            />
          </div>
        </div>
        <p>{result}</p>
        <CustomButton onClick={this.playAgain}>Play Again</CustomButton>
      </div>
    ) : (
      <div className="home">
        <div className="two">
          <button
            onClick={() => this.chooseIcon(0)}
            type="button"
            className="iconn"
            data-testid="rockButton"
          >
            <img
              src={choicesList[0].imageUrl}
              className="icon"
              alt={choicesList[0].id}
            />
          </button>
          <button
            onClick={() => this.chooseIcon(1)}
            type="button"
            className="iconn"
            data-testid="scissorsButton"
          >
            <img
              src={choicesList[1].imageUrl}
              className="icon"
              alt={choicesList[1].id}
            />
          </button>
        </div>
        <button
          onClick={() => this.chooseIcon(2)}
          type="button"
          className="iconn"
          data-testid="paperButton"
        >
          <img
            src={choicesList[2].imageUrl}
            className="icon"
            alt={choicesList[2].id}
          />
        </button>
      </div>
    )
    return (
      <div className="bg-con">
        <div className="scoreCard">
          <div className="scoreParaCon">
            <h1>ROCK PAPER SCISSORS</h1>
            <p className="scorepara">ROCK</p>
            <p className="scorepara">PAPER</p>
            <p className="scorepara">SCISSORS</p>
          </div>
          <div className="scoreCon">
            <p className="name">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        {bottomCon}
        <ReactPopUp />
      </div>
    )
  }
}

export default App
