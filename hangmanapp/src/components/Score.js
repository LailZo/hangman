import React, { Component } from 'react';


class Score extends Component {

  
 
  render() {
    
 let score = this.props.score
 let name =""
 
 if(score>80){
   name="high-score"
  
 }else if(score>50 && score<80){
   name="medium-score"
 }else{
   name=" low-score class"
 }

   return(<div className={name}>
       {this.props.score}
   </div>)
  
  }
}

export default Score;
