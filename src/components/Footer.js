import React, {PureComponent} from 'react';
import {VisibilityFilters} from "../actions";
import FilterLink from "../containers/FilterLink";
import './css/Footer.scss'

class Footer extends PureComponent {
    render() {
        return (
            <div className="footer paddingDefault noSelect">
                <span className="cursorDefault">Show: </span>
                <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                    All
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
                </FilterLink>
                <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </div>
        );
    }
}

export default Footer;