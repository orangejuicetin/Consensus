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
            <div className="columns">
                <div className="column is-narrow-desktop">
                    <div className="tile is-parent is-vertical">
                        <TopicCreator />
                    </div>
                </div>
                <div className="column">
                    <div className="tile is-parent">
                        <div className="tile">
                            <TopicContainer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}