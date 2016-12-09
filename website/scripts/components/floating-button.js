
import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/editor/vertical-align-top';
import ClearIcon from 'material-ui/svg-icons/content/clear';

import { connect } from 'react-redux'
import { scrollToTop } from '../services/scrollbar.js';
import { clearCal } from '../store/actions.js';

const style = {
  position: 'fixed',
  bottom: 20,
  right: 20
};

class FloatingButton extends React.Component {
    onClick() {
        if(location.pathname == '/calculator') {
            this.props.dispatch(clearCal());
        } else {
            scrollToTop(750);
        }
    }

    render() {
        const isCal = location.pathname == '/calculator';

        return (
            <FloatingActionButton onClick={() => this.onClick()} style={style}>
                { isCal ? <ClearIcon /> : <ContentAdd /> }
            </FloatingActionButton>
        )
    }
}

export default connect()(FloatingButton);