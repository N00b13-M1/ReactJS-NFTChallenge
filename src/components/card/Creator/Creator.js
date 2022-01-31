import React, {Component} from 'react';
import creator from '../../../img/image-avatar.png'



class Creator extends Component {
    render() {
        return (
            <div className="creator d-flex justify-content-between align-items-center my-3">
                <span class="creator"><img src={creator} className="border border-2 border-white rounded-circle w-25 me-2" alt="creator" /> Creation of <span className="name">Jules Wyvern</span></span>
            </div>
        );
    }
}

export default Creator;