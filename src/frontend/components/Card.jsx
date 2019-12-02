import React from 'react'
import { connect } from 'react-redux'

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isFlipped = false,
        // };
        // this.cardClicked = this.cardClicked.bind(this);
    }

    // cardClicked(e) {
    //     e.preventDefault();
    //     this.setState({ isFlipped = !isFlipped });
    // }

    render() {
        return (
            <div className="box">
                <p>Front side</p>
            </div >
        )
    }
}
