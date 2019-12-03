import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
// import Card from './Card';
import Recommendation from './Recommendation'
import { Row, Container, Col } from 'reactstrap'
import TopicCreator from './TopicCreator'
import TopicContainer from './TopicContainer'

// import Topic from './Topic'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.store;
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm="4">
                        <TopicCreator />
                    </Col>
                    <Col sm="4">
                        <TopicContainer />
                    </Col>
                </Row>
            </Container>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return ({

//     })
// }

// export default connect(null, mapDispatchToProps)(App); 