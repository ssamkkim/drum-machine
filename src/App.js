import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  };
  handleClick(e) {
    const audio = e.target.children[0];
    audio.play();
    this.setState({
      display: e.target.id.replaceAll("-", ' '),
    })
  }
  handleKeyDown(e) {
    switch(e.charCode) {
      case 113:
        this.handleClick()
      case 119: 
      case 101: 
      case 97: 
      case 115: 
      case 100: 
      case 122: 
      case 120: 
      case 99: 
      default:
        break;
      }
  }
  render(){
    return (
      <div id="drum-machine">
        <div id="pad-container">
          <button className="drum-pad" id="Heater-1" onClick={this.handleClick} onKeyPress={this.handleKeyDown}><audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q"></audio>Q</button>
          <button className="drum-pad" id="Heater-2" onClick={this.handleClick} onKeyPress={this.handleKeyDown}><audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W"></audio>W</button>
          <button className="drum-pad" id="Heater-3" onClick={this.handleClick} onKeyPress={this.handleKeyDown}><audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E"></audio>E</button>
          <button className="drum-pad" id="Heater-4" onClick={this.handleClick} onKeyPress={this.handleKeyDown}><audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A"></audio>A</button>
          <button className="drum-pad" id="Clap" onClick={this.handleClick} onKeyPress={this.handleKeyDown}><audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S"></audio>S</button>
          <button className="drum-pad" id="Open-HH" onClick={this.handleClick} onKeyPress={this.handleKeyDown}><audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D"></audio>D</button>
          <button className="drum-pad" id="Kick-n'-Hat" onClick={this.handleClick} onKeyPress={this.handleKeyDown}><audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z"></audio>Z</button>
          <button className="drum-pad" id="Kick" onClick={this.handleClick} onKeyPress={this.handleKeyDown}><audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X"></audio>X</button>
          <button className="drum-pad" id="Closed-HH" onClick={this.handleClick} onKeyPress={this.handleKeyDown}><audio className="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C"></audio>C</button>
        </div>
        <div id="display">{this.state.display}</div>
      </div>
    );
  }
}

export default App;
