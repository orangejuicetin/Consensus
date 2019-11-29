import React from 'react'
import { connect } from 'react-redux'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped = false;
        }
        this.cardClicked = this.cardClicked.bind(this);
    }

    cardClicked(e) {
        e.preventDefault();
        this.setState({ isFlipped = !isFlipped });
    }

    render() {
        if ({ isFlipped }) {
            return (
                <div className="card" onClick={this.cardClicked()}>
                    <p>Front side</p>
                </div>
            )
        } else {
            return (
                <div className="card" onClick={this.cardClicked()}>
                    <p>Back side</p>
                </div>
            )
        }
    }
}
