import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Todo extends PureComponent {
    render() {
        const {onClick, completed, text} = this.props;
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
            >
                {text}
            </li>
        );
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;