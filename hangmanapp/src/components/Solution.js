import React, { Component } from 'react';
import Letter from './Letter';
import Letters from './Letters';

class Solution extends Component {

 
    generateSecret(secret){
        let arr =[]
        for(let i=0;i<secret.length;i++){
            this.props.letters[secret[i]] ?
                arr.push(<Letter key={i}letter={secret[i]} isSelected={true} />) :
                arr.push(<Letter key={i} letter="_ " isSelected={false} />)
        }
        return arr;
    }
 
  render() {
  
    return(

        <div>
            <div>{this.props.solution.hint} </div>
            {this.generateSecret(this.props.solution.word)}
           {/* { (this.props.isSelected) 
            ? <span className="SelectedLetter">{this.props.letter}</span> 
            : <span className="NotSelectedLetter" onClick={this.selectLetter}>{this.props.letter}</span>}
        */}
        </div>
      
    )
}
}

export default Solution;
