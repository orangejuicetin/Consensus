import React from 'react'
import { connect } from 'react-redux'
import { getTopics } from '../actions/actions'
import Topic from './Topic'

class TopicContainer extends React.Component {
    componentDidMount() {
        this.props.getAllTopics();
    }

    render() {
        console.log(this.props.topics)
        return (
            <div className="tile">
                {this.props.topics.map((topic) =>
                    (<Topic name={topic.name}
                        description={topic.description}
                        id={topic._id}
                        voteCount={topic.vote} />)
                )}
            </div>
        )
    }
}

const mapState = (state) => {
    return { topics: state.allTopics }
}

const mapDispatch = dispatch => {
    return { getAllTopics: () => dispatch(getTopics()) }
}

export default connect(mapState, mapDispatch)(TopicContainer); 