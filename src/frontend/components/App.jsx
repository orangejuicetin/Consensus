import React from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
// import Card from './Card';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // return (
        //     <div className="box">
        //         <Card />
        //     </div>
        // );
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return ({

//     })
// }

// export default connect(null, mapDispatchToProps)(App); 