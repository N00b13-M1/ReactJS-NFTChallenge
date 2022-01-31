import React, {Component} from 'react';
import Square from './Square/Square'
import Body from './Card-body/Card-body'
import Creator from './Creator/Creator'

class Card extends Component {
  render(){
    return (
        <div className="NFTCard card p-lg-3 m-lg-2 m-2" style={{width: '18rem'}}>
          <Square/>
          <Body/>
          <Creator/>
        </div>
    );
  }
}

export default Card;