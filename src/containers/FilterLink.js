import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from "../actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter !== state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});


class FilterLink extends Component {
    render() {
        const {onClick, active, children} = this.props;
        return (
            <Link
                onClick={onClick}
                active={active}
                children={children}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilterLink);