import React from 'react'
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

    cancelForm() {
        this.setState(
            {
                name: '',
                description: ''
            }
        )
    }

    render() {
        return (
            <div className="box tile is-child">
                <div className="field" id="create-topic-form" >
                    <label>Name</label>
                    <input
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        placeholder="Topic Name!"
                        className="input is-rounded is-primary"
                    />
                    <label>Description</label>
                    <textarea
                        value={this.state.description}
                        onChange={e => this.setState({ description: e.target.value })}
                        placeholder="Add a description!"
                        className="textarea is-rounded is-primary"
                    />
                    <button color="secondary"
                        className="button is-light is-small"
                        onClick={() => {
                            this.props.addItem(this.state.name, this.state.description);
                            this.cancelForm();
                        }}>Create Topic!</button>
                </div >
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (name, description) => dispatch(addTopic(name, description))
    };
};

export default connect(null, mapDispatchToProps)(TopicCreator);

