
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

const parseTemplate = (name, body) => {
  let content = `
    <div id="content">
       <div id="siteNotice">
       </div>
       <h1 id="firstHeading" class="firstHeading">#TITLE#</h1>
       <div id="bodyContent">
        <p>#BODY#</p>
       </div>
    </div>
  `;

  content = content.replace('#TITLE#', name);
  content = content.replace('#BODY#', body);
  return content;
}

const rawMarkers = [
  {
    name: 'Renfrewshire Credit Union',
    body: 'Renfrewshire Wide Credit Union was established in 2006 as a merger of 3 smaller credit unions in Erskine, Renfrew and Linwood which has served the local community for over 30 years.',
    type: 'CU',
    position: { lat: 55.854066, lng: -4.426954 },
    comments: [],
    address: '41 High St, Paisley.',
    link: 'http://www.rwcu.co.uk/'
  },
  {
    name: 'Bank of Scotland',
    body: 'Bank of Scotland was founded in 1695, by an Act of the Scottish Parliament - making it Scotland\'s first and oldest bank. It has enjoyed a long and prestigious history, acquiring many constituent companies along the way.',
    type: 'NB',
    position: { lat: 55.845309, lng: -4.423991 },
    comments: [],
    address: '41 High St, Paisley.',
    link: 'http://www.rwcu.co.uk/'
  },
  {
    name: 'TSB Bank',
    body: 'We provide local banking for Britain to help local people, businesses and communities to thrive together.',
    type: 'NB',
    position: { lat: 55.845309, lng: -4.42597 },
    comments: [],
    address: '41 High St, Paisley.',
    link: 'http://www.rwcu.co.uk/'
  },
  {
    name: 'Santander',
    body: 'We are Santander Bank, one of the country\'s top retail banks by deposits and a wholly owned subsidiary of one of the most respected banks in the world: Banco Santander. Our parent company, Santander Group, serves more than 100 million customers in the United Kingdom, Latin America, and Europe. Here in the Northeast, we are a team of 9,800 individuals all committed to a single mission: to help you make progress toward your goals. We aim to make your banking hassle-free by providing simple ways for you to spend, save and manage your money.',
    type: 'NB',
    position: { lat: 55.84521, lng: -4.424748 },
    comments: [],
    address: '41 High St, Paisley.',
    link: 'http://www.rwcu.co.uk/'
  },
  {
    name: 'Financial Advisor',
    body: 'Financial Advisor Bureau is the free service that connects you with an Independent Financial Advisor (IFA) in your area for a free consultation. All IFA\'s on our panel are registered and regulated by the Financial Conduct Authority, the regulatory body for the financial services industry in the UK.',
    type: 'FA',
    position: { lat: 55.841092, lng: -4.42411 },
    comments: [],
    address: '41 High St, Paisley.',
    link: 'http://www.rwcu.co.uk/'
  },
  {
    name: 'Financial Planning Options',
    body: 'As professional Independent Financial Advisers, Financial Planning Options Limited are authorised to deal with many forms of financial services, and specialise in giving advice to clients on a wide range of subjects to assist with personal and corporate financial planning. We listen to your needs, and offer clear, no-jargon advice on the most appropriate financial products for your personal circumstances.',
    type: 'FA',
    position: { lat: 55.841092, lng: -4.416362 },
    comments: [],
    address: '41 High St, Paisley.',
    link: 'http://www.rwcu.co.uk/'
  },
  {
    name: 'Royal Bank of Scotland',
    body: 'At RBS, our purpose is to serve customers well. We serve around 24 million customers across the globe, and our aim is to consistently meet their needs wherever they find us.',
    type: 'NB',
    position: { lat: 55.847842, lng: -4.42409 },
    comments: [],
    address: '41 High St, Paisley.',
    link: 'http://www.rwcu.co.uk/'
  }
];


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
    marker.comments.push({ date: Date.now(), comment });
    this.setState({ open: true, addComment: false, openSnack: true });
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

    comments.sort((a, b) => a.date < b.date);
    const recentComments = comments.slice(0, 5);
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
            <p className='down'>{marker.body}</p>
            <address><strong>{marker.address}</strong></address>
            <a style={{marginTop: -5}} href={marker.link} target='_blank'>Website Link</a>
            <List>
            {
              recentComments.map(comment => <ListItem size={20} leftAvatar={<DoneIcon style={{marginTop: 6}} />}>{comment.comment}</ListItem>)
            }
            </List>
        </Dialog>
      </div> 
    )
  }
}

export default class BankMap extends React.Component {
  constructor() {
    super();
    this.state = { type: 0, input: '' };
    this.sources = rawMarkers.map(marker => {
      return marker.name;
    });
  }

  componentDidMount() {
    this.markers = [];
    this.map = new google.maps.Map(this.refs.map, {
      center:{ lat: 55.843686, lng: -4.424485 },
      zoom: 14,
      styles: mapTheme,
      disableDefaultUI: true,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      draggable: true
    });

    this.attachMarkers(this.map, 'ANY', '');
  }

  shouldAddMarker(marker, filter, name) {
    const passFilter =  marker.type === filter || filter === 'ANY';
    const passName = marker.name.toLowerCase().includes(name.toLowerCase());
    return passName && passFilter;
  }

  attachMarkers(map, filter, name) {
    rawMarkers.forEach(marker => {
      if(this.shouldAddMarker(marker, filter, name)) {
        const mapMarker = new google.maps.Marker({
          icon: 'images/purple-marker.png',
          position: marker.position,
          title: marker.name,
          map : map
        });

        this.markers.push(mapMarker);

        mapMarker.addListener('click', () => this.refs.dialog.open(marker));
      }
    })
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
        this.attachMarkers(this.map, 'ANY', name);
        break;
      case 1:
        this.attachMarkers(this.map, 'NB', name);
        break;
      case 2:
        this.attachMarkers(this.map, 'CU', name);
        break;
      case 3:
        this.attachMarkers(this.map, 'FA', name);
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
