import React from 'react'
import TopicCreator from './TopicCreator'
import TopicContainer from './TopicContainer'

// import Topic from './Topic'

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container is-fluid">
                <div className="level ">
                    <div className="level-left">
                        <TopicCreator />
                    </div>
                </div>
                <div className="level ">
                    <div className="level-right">
                        <TopicContainer />
                    </div>
                </div>
            </div>
        );
    }
}