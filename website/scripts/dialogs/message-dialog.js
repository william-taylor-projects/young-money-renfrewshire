import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class SimpleDialog extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label="Okay"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.props.onClose()}
      />
    ];

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={() => this.props.onClose()}>
          <p>
            {this.props.message}
          </p>
        </Dialog>
      </div>
    );
  }
}