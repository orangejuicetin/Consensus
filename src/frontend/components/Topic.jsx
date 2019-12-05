import React from 'react'
import { connect } from 'react-redux'
import { deleteTopic, upVote, downVote } from '../actions/actions'

class Topic extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <a className="delete is-small" onClick={() => { this.props.deleteTopic(this.props.id) }}></a>
                    <p className="title">
                        {this.props.name}
                    </p>
                    <p className="levels">
                        <p className="subtitle level-item">
                            {this.props.description}
                        </p>
                        <p className="subtitle level-item">
                            {this.props.voteCount}
                        </p>
                    </p>
                </div>
                <div className="card-footer">
                    <div className="buttons">
                        <button className="button is-small is-light has-text-centered" onClick={() => { this.props.upvote(this.props.id) }}>up</button>
                        <button className="button is-small is-light has-text-centered" onClick={() => { this.props.downvote(this.props.id) }}>down</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTopic: (id) => dispatch(deleteTopic(id)),
        upvote: (id) => dispatch(upVote(id)),
        downvote: (id) => dispatch(downVote(id))
    };
};

export default connect(null, mapDispatchToProps)(Topic); 
