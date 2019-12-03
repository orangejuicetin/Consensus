import React from 'react'
import { connect } from 'react-redux'
import { getTopics } from '../actions/actions';
import Topic from './Topic'

class TopicContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.getTopics;
    }

    render() {
        return (
            <div>
                <p>sample code</p>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => {
    return {
        getItems: () => dispatch(getTopics())
    };
}

export default connect(null, mapDispatch)(TopicContainer); 