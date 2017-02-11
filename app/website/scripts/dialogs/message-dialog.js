
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import React from 'react';

export default props => {
  const actions = [
    <FlatButton label="Okay" primary={true} keyboardFocused={true} onTouchTap={() => props.onClose()} />
  ];

  return (
    <Dialog
      title={props.title}
      actions={actions}
      modal={false}
      open={props.open}
      onRequestClose={() => props.onClose()}>
      {props.body}
    </Dialog>
  );
}