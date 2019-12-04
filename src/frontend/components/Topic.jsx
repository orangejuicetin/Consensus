import React from 'react'
import { connect } from 'react-redux'
import { deleteTopic } from '../actions/actions'

class Topic extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="card">
                <div className="card-content">
                    <a className="delete is-small" onClick={() => { this.props.deleteTopic(this.props.id) }}></a>
                    <p className="title">
                        {this.props.name}
                    </p>
                    <p className="subtitle">
                        {this.props.description}
                    </p>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTopic: (id) => dispatch(deleteTopic(id))
    };
};

export default connect(null, mapDispatchToProps)(Topic); 
