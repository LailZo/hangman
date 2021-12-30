import React, { Component } from 'react';


class EndGame extends Component {


 
  render() {
   let sol = this.props.solution.word
   let status = this.props.status

    return(
    <div>
        {status > 0? "Congratulations": <div>The Secret word is {sol}</div> }
     
    </div>
    )

}
}


export default EndGame;
