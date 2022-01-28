import React, {Component} from 'react';
import logo from '../../img/image-equilibrium.jpg';
import ethereum from '../../img/icon-ethereum.svg';
import clock from '../../img/icon-clock.svg';
import creator from '../../img/image-avatar.png'


class Card extends Component {
  render(){
    return (

        <div className="NFTCard card p-3 m-2" style={{width: '18rem'}}>
          <img src={logo} className="card-img-top NFT-picture rounded-5 mx-auto rounded-3" alt="NFTSquare" />
          <div className="card-body p-0 py-4">
            <h5 className="card-title">Equilibrium #3429</h5>
            <p className="card-text">Our Equilibrium collection promotes balance and calm</p>
            <div className="d-flex justify-content-between align-items-center"><span className="ethereum"><img src={ethereum} alt="ethereum"/> 0.041 ETH </span><span className="clock"><img src={clock} alt="clock"/> 3 days left </span></div>
          </div>
          <div className="creator d-flex justify-content-between align-items-center my-3"><span class="creator"><img src={creator} className="border border-2 border-white rounded-circle w-25 me-2" alt="creator"/> Creation of <span className="name">Jules Wyvern</span></span></div>
        </div>

    );
  }
}

export default Card;