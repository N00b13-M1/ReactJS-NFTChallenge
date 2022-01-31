import React, {Component} from 'react';
import ethereum from '../../../img/icon-ethereum.svg';
import clock from '../../../img/icon-clock.svg';

class Body extends Component {
    render(){
        return (
            <div className="card-body p-0 py-4">
                <h5 className="card-title">Equilibrium #3429</h5>
                <p className="card-text">Our Equilibrium collection promotes balance and calm</p>
                <div className="d-flex justify-content-between align-items-center"><span className="ethereum"><img src={ethereum} alt="ethereum" /> 0.041 ETH </span><span className="clock"><img src={clock} alt="clock" /> 3 days left </span></div>
            </div>
        );
    }
}

export default Body;