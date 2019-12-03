import React from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default class Recommendation extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isFlipped = false,
        // };
        // this.cardClicked = this.cardClicked.bind(this);
    }

    // cardClicked(e) {
    //     e.preventDefault();
    //     this.setState({ isFlipped = !isFlipped });
    // }

    render() {
        return (
            <Card body>
                <CardBody>
                    <CardTitle>Example Recommendation</CardTitle>
                    <CardText>This is an example of a card</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
                </CardBody>
            </Card>
        )
    }
}
