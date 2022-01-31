import React, {Component} from 'react';
import logo from '../../../img/image-equilibrium.jpg';
import eye from '../../../img/icon-view.svg'


class Square extends Component {
    render() {
        return (
            <div className="square position-relative">
                <img src={logo} className="card-img-top NFT-picture mx-auto rounded-3" alt="NFTSquare" />
                <div class="overlay d-flex justify-content-center rounded-3 align-item-center position-absolute">
                    <img src={eye} className="eye position-absolute" alt="eye" />
                </div>
            </div>
        );
    }
}

export default Square;