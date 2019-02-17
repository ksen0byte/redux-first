import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from "../actions";
import './css/AddTodo.scss'
import classNames from 'classnames/bind'

function mapStateToProps(state, ownProps) {
    return {...state, ...ownProps};
}

const mapDispatchToProps = {
    addTodo
};

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            empty: true,
            error: false
        }
    }

    updateInput = (value) => {
        this.setState({
            value,
            empty: value === '' || value == null,
            error: false
        });
    };

    render() {
        return (
            <div className="addTodoContainer noSelect">
                <div className="inputContainer">
                    <input
                        ref={input => this.input = input}
                        className={classNames('noSelect', {error: this.state.error})}
                        onChange={e => this.updateInput(e.target.value)}
                        value={this.state.value}
                    />
                </div>
                <div className="buttonContainer">
                    <button onClick={this.handleAddTodo}>Add Todo</button>
                </div>
            </div>
        );
    }

    handleAddTodo = () => {
        let value = this.state.value;
        this.input.focus();
        if (this.state.empty) {
            this.setState({error: true});
            return;
        }

        this.props.addTodo(value);
        this.updateInput('');
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo);