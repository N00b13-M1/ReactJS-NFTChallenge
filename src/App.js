
// # Front-end Style Guide
// ## Layou
// The designs were created to the following widths:

// - Mobile: 375px
// - Desktop: 1440px
// ## Colors
// ### Primary
// - Soft blue: hsl(215, 51%, 70%)
// - Cyan: hsl(178, 100%, 50%)
// ### Neutral

// - Very dark blue (main BG): hsl(217, 54%, 11%)
// - Very dark blue (card BG): hsl(216, 50%, 16%)
// - Very dark blue (line): hsl(215, 32%, 27%)
// - White: hsl(0, 0%, 100%)
// ## Typography
// ### Body Copy
// - Font size (paragraph): 18px
// ### Font

// -Family: [Outfit](https://fonts.google.com/specimen/Outfit)
// - Weights: 300, 400, 600


import React, {Component} from 'react';
import Card from './components/card/Card';

class App extends Component {
  render(){
    return (
      <div className="cont d-flex justify-content-center align-items-center p-5">
        <Card/>

      </div>
    );
  }
}

export default App;
