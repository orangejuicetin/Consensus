import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    render() {
        return (
            <div className="main-board-component">
                <Card />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({

    })
}

export default connect(null, mapDispatchToProps)(App); 