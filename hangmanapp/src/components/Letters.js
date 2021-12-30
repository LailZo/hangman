import React, { Component } from 'react';
import Letter from './Letter';


class Letters extends Component {

 ifSelected(letter){
     return this.props.letters[letter]
 }
  
 
  render() {
      let letters= this.props.letters
  
    return(

      <span>  {Object.keys(letters).map((key) =>{ return this.props.letters[key]=== false? <Letter key={key} ifSelected={this.ifSelected(key)} letter={key} selectLetter={this.props.selectLetter}  />: <Letter key={key} ifSelected={this.ifSelected(key)} letter={key} />})}
      
      </span>

          
    )
  
  }
}

export default Letters;
