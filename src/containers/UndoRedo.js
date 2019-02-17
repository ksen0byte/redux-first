import React, {Component} from 'react';
import {ActionCreators as UndoActionCreators} from 'redux-undo'
import {connect} from 'react-redux';
import './css/UndoRedo.scss'

const mapStateToProps = (state) => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
});

const mapDispatchToProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
});

class UndoRedo extends Component {
    render() {
        const {canUndo, canRedo, onUndo, onRedo} = this.props;
        return (
            <div className="undoRedoContainer paddingDefault">
                <button onClick={onUndo} disabled={!canUndo}>
                    Undo
                </button>
                <button onClick={onRedo} disabled={!canRedo}>
                    Redo
                </button>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo);