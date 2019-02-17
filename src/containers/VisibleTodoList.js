import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoList from "../components/TodoList";
import {toggleTodo, VisibilityFilters} from "../actions";

const mapStateToProps = state => {
    return {todos: getVisibleTodos(state.todos.present, state.visibilityFilter)};
};

const mapDispatchToProps = dispatch => {
    return {toggleTodo: id => dispatch(toggleTodo(id))};
};

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        default:
            throw new Error('Unknown filter: ' + filter);
    }
};

class VisibleTodoList extends Component {
    render() {
        const {todos, toggleTodo} = this.props;
        return (
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(VisibleTodoList);