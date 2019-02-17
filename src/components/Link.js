import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind'
import './css/Link.scss'

class Link extends PureComponent {
    render() {
        const {active, children, onClick} = this.props;
        return (
            <span
                className={classNames({selected: !active}, 'paddingDefault', 'link')}
                onClick={onClick}
            >
                {children}
            </span>
        );
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;