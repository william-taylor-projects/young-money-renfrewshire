
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/editor/vertical-align-top';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import React from 'react';

import { scrollToTop } from '../services/scrollbar.js';
import { clearCal } from '../store/actions.js';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

const style = {
  position: 'fixed',
  bottom: 20,
  right: 20
};

class FloatingButton extends React.Component {
    componentDidMount() {
        browserHistory.listen(location => this.forceUpdate());
    }

    onClick() {
        if(location.pathname == '/calculator') {
            this.props.dispatch(clearCal());
        } else {
            scrollToTop(2000);
        }
    }

    render() {
        return (
            <FloatingActionButton onClick={() => this.onClick()} style={style}>
                { location.pathname == '/calculator' ? <ClearIcon /> : <ContentAdd /> }
            </FloatingActionButton>
        )
    }
}

export default connect()(FloatingButton);