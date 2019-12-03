import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux'

class Topic extends React.Component {
    constructor(props) {
        super(props);

    }

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
