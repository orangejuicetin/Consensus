import React from 'react'
import { connect } from 'react-redux'

export default class Recommendation extends React.Component {
    constructor(props) {
        super(props);
    }

    // cardClicked(e) {
    //     e.preventDefault();
    //     this.setState({ isFlipped = !isFlipped });
    // }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <p className="title">Example Recommendation</p>
                    <p className="subtitle">This is an example of a card</p>
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         upvote: (id) => dispatch(upvote(id)), 
//         downvote: ()
//     };
// };

// export default connect(null, mapDispatchToProps)(Recommendation); 
