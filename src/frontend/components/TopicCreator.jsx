import React from 'react'
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { addTopic } from '../actions/actions'

class TopicCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
        this.cancelForm = this.cancelForm.bind(this);
    }

    cancelForm(event) {
        this.setState(
            {
                name: '',
                description: ''
            }
        )
    }

    render() {
        return (
            <form className="field" id="create-topic-form">
                <Label for="topicName">Name</Label>
                <input
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    placeholder="Topic Name!"
                    className="input is-rounded"
                />
                <Label for="description">Description</Label>
                <input
                    value={this.state.description}
                    onChange={e => this.setState({ description: e.target.value })}
                    placeholder="Add a description!"
                    className="input is-rounded"
                />
                <button color="secondary"
                    className="button is-light is-small"
                    onClick={() => {
                        this.props.addItem(this.state.name, this.state.description);
                        this.cancelForm;
                    }}>Create Topic!</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (name, description) => dispatch(addTopic(name, description))
    };
};

export default connect(null, mapDispatchToProps)(TopicCreator);

