import React from 'react'
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    this'll be our main component hoho
                </p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({

    })
}

export default connect(null, mapDispatchToProps)(App); 