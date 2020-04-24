
import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Siddharth Chandran',
        biography: '25 year old Full Stack Developer living in Pune, India. Originally from Kerala. Love to make stuff.',
      },
      image: `${process.env.PUBLIC_URL}/comingsoon.jpg`,
      quote: {
        content: 'Good morning babe',
        source: 'Chakudu'
      }
      
    };
  }
  render() {
    return(
      <div className="App">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quote} />
      </div>
    );
  }
}

function Image(props){
    return (
      <div className="Image" style={{backgroundImage: 'url(' + props.src + ')'}}></div>
    ); 
}
function Profile(props){
  return (
      <div className="Profile">
        <h1 className="Name">{props.person.name}</h1>
        <p className="Bio">{props.person.biography}</p>
        <div className="Quote">
          <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
          <div className="byline">&mdash; {props.quote.source}</div>
        </div>
        
      </div>
    );
}

export default App;