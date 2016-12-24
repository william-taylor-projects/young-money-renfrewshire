
import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { mapTheme } from '../theme.js';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import DoneIcon from 'material-ui/svg-icons/action/done';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import { post } from '../services/http.js';
import { markers } from '../store/actions.js';
import { dispatch } from '../store/store.js';

const style = {
  maxHeight: '150px'
}

class CommentDialog extends React.Component {
  constructor() {
    super();
    this.state = { value: '' }
  }

  render() {
    const actions = [
        <FlatButton label="Save" primary={true} onTouchTap={() => this.props.onAddComment(this.state.value)} />,
        <FlatButton label="Discard" primary={true} onTouchTap={() => this.props.onClose()} />
    ];

    return (
      <Dialog title={'Add Comment'} modal={false} open={this.props.open} actions={actions} onRequestClose={() => this.props.onClose()}>
          <TextField  ref='textfield'
            onChange={e => this.setState({value: e.target.value})} 
            fullWidth={true} 
            floatingLabelText="Enter comment..." 
            multiLine={true} 
            rows={5} />
      </Dialog>
    );      
  }
}


class BankMapDialog extends React.Component {
  constructor() {
    super();
    this.state = { 
      addComment: false, 
      open: false, 
      marker: {}, 
      openSnack: false 
    };
  }

  open(marker) {
    this.setState({ open: true, marker });
  }

  close() {
    this.setState({ open: false, marker: {} });
  }

  onMessageClose() {
    this.setState({ open: true, addComment: false });
  }

  message() {
    this.setState({ open: false, addComment: true });
  }

  addComment(marker, comment) {
    const body = {
      location: marker.name,
      comment: comment
    };

    post('/markers/comment', body, json => {
      dispatch(markers(json.markers));
      this.setState({ open: false, addComment: false, openSnack: true });
    });
  }

  closeSnack() {
    this.setState({ openSnack: false });
  }

  openSnack() {
    this.setState({ openSnack: true });
  }

  render() {
    const { marker } = this.state;
    const comments = marker.comments || [];
    const actions = [
      <FlatButton
        label="Add Comment"
        primary={true}
        onTouchTap={() => this.message()} />,
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={() => this.close()} />
    ];

    return(
      <div>
        <CommentDialog ref='commentDialog' 
          onAddComment={comment => this.addComment(marker, comment)} 
          open={this.state.addComment}
          onClose={() => this.onMessageClose()} 
        />

        <Snackbar
          open={this.state.openSnack}
          message="Successfully Added Comment!"
          autoHideDuration={5000}
          onRequestClose={() => this.closeSnack()}
        />

        <Dialog title={marker.name}
          modal={false} open={this.state.open} actions={actions}
           onRequestClose={() => this.close()}
           autoScrollBodyContent={true}>
           <div className='col-md-12'>
              <p className='down'>{marker.body}</p>
              <address><strong>{marker.address}</strong></address>
              {
                marker.link ? <a style={{marginTop: -5}} href={marker.link} target='_blank'>Website Link</a> : null
              }
              
              <List style={style}>
              {
                comments.map((comment, index) => 
                  <ListItem key={index} size={20} leftAvatar={<DoneIcon style={{marginTop: 6}} />}>
                    {comment.comment.S}
                  </ListItem>)
              }
              </List>
           </div>
        </Dialog>
      </div> 
    )
  }
}

class BankMap extends React.Component {
  constructor() {
    super();
    this.state = { type: 0, input: '', dialog: false, marker: {} };
    this.sources = [];
    this.markers = [];
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center:{ lat: 55.843686, lng: -4.424485 },
      styles: mapTheme,
      disableDefaultUI: true,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true,
      zoom: 14,
    });
    
    this.attachMarkers(this.props, this.map, 'ANY', '');
  }

  componentWillReceiveProps(nextProps) {
    this.attachMarkers(nextProps, this.map, 'ANY', '');
  }

  componentWillUpdate(nextProps, nextState) {
    this.sources = nextProps.markers.map(marker => marker.name);
    this.sources = this.sources.filter((item, index, inputArray) => inputArray.indexOf(item) == index);
  }

  shouldAddMarker(marker, filter, name) {
    const passFilter =  marker.type === filter || filter === 'ANY';
    const passName = marker.name.toLowerCase().includes(name.toLowerCase());
    return passName && passFilter;
  }

  attachMarkers(props, map, filter, name) {
    props.markers.forEach(marker => {
      if(this.shouldAddMarker(marker, filter, name)) {
        const mapMarker = new google.maps.Marker({
          icon: './images/purple-marker.png',
          position: marker.position,
          title: marker.name,
          map : map
        });

        this.markers.push(mapMarker);

        mapMarker.addListener('click', () => {  
          this.refs.dialog.open(marker);
        });
      }
    });
  }

  clearMarkers() {
    this.markers.forEach(marker => marker.setMap(null))
    this.markers = [];
  }

  onFilterType(event, number, payload) {
    this.clearMarkers();
    this.setState({ type: number }, () => {
      this.filterMarkers(number, this.state.input);
    });
  }

  filterMarkers(index, name) {
    switch(index) {
      case 0:
        this.attachMarkers(this.props, this.map, 'ANY', name);
        break;
      case 1:
        this.attachMarkers(this.props, this.map, 'NB', name);
        break;
      case 2:
        this.attachMarkers(this.props, this.map, 'CU', name);
        break;
      case 3:
        this.attachMarkers(this.props, this.map, 'FA', name);
        break;
    }
  }

  onFilterName(name) {
    this.clearMarkers();
    this.setState({ input: name }, () => {
        this.filterMarkers(this.state.type, name);
    });
  }

  render() {
    const value = this.state.type;

    return (
      <div>
        <div className='bank-heading text-center'>
          <div className="container-fixed">
            <div className="jumbotron">
              <h1>Financial Services Map</h1>
              <p className='calculator-summary'>
                  Find local financial services in your area.
              </p>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className="row">
            <div className='col-md-8'>
            <AutoComplete
            hintText="Enter a name or search using the map below"
            dataSource={this.sources}
            filter={AutoComplete.caseInsensitiveFilter}
            onUpdateInput={input => this.onFilterName(input)}
            onNewRequest={input => this.onFilterName(input)}
            floatingLabelText="Search by name"
            fullWidth={true}
            />
            </div>
            <div className='col-md-4'>
            <SelectField fullWidth={true} floatingLabelText="Type" value={value} onChange={(e, i, p) => this.onFilterType(e, i, p)}>
              <MenuItem value={0} primaryText="Any" />
              <MenuItem value={1} primaryText="Normal Bank" />
              <MenuItem value={2} primaryText="Credit Union" />
              <MenuItem value={3} primaryText="Financial Advisors" />
            </SelectField>
            </div>
            <div className='col-md-12'>
              <BankMapDialog ref='dialog' />
              <div id='map' ref='map'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = state => { 
    return { markers: state.map.markers } 
};

export default connect(stateToProps)(BankMap)