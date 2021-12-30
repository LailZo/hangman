import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Solution from './components/Solution';
import Score from './components/Score';
import Letters from './components/Letters';
import Letter from './components/Letter'
import EndGame from './components/EndGame';


class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus :this.generateLetterStatuses(),
      solution:{
        word: "SECRET",
        hint: "the hint for the word"
      },
      score: 100
    }
  }

  selectLetter=(letter)=>{
    let letterStat = {...this.state.letterStatus}
    letterStat[letter] = true
    this.setState({letterStatus: letterStat})

    let newScore = this.state.score
    if(this.state.solution.word.includes(letter)){
      newScore= newScore+5
    }else{
      newScore= newScore-20
    }
    this.setState({score: newScore})
  }



  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  setLetterstatus(){
    this.setState({letterStatus : this.generateLetterStatuses})
  }

 
  foundAll(){
    let letters = this.state.letterStatus
    let secret = [...this.state.solution.word]
    for(let i=0; i< secret.length; i++){
      if(letters[secret[i]] ==false){
        return false
      }
    }
    return true 
  }

  checkStatus(){
    if(this.state.score <0){
      return 0
    }else if(this.foundAll()){
      return 1
    }
    return -1
  }
  
  
 
  render() {
    // let find = this.foundAll()
    // console.log(find)

    let status = this.checkStatus()
    return (
    <div className="App">

      { (status>=0 )? <EndGame status={status} solution={this.state.solution}/> :
      
      <div>
      <Score score={this.state.score} />
     <Solution  solution = {this.state.solution} letters={this.state.letterStatus}  />
     <Letters letters={this.state.letterStatus} selectLetter={this.selectLetter} updateScore={this.updateScore} />
      </div>
      }
    


    </div>
  );
}

}

export default App;
