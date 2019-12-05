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
            <div>
                <section className="hero">
                    <section className="hero-body">
                        <h1 className="title has-text-centered">Consensus</h1>
                    </section>
                </section>
                <section>
                    <div className="columns">
                        <div className="column is-narrow-desktop">
                            <TopicCreator />
                        </div>
                        <div className="column">
                            <div className="tile is-parent">
                                <div className="tile">
                                    <TopicContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="level">
                    <div className="content has-text-centered">
                        <a className="button is-light" href="./logout">Log Out</a>
                    </div>
                </div>
            </div>
        );
    }
}