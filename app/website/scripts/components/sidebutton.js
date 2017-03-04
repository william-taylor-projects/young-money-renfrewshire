
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import React from 'react';

const open = url => window.open(url, '_system');

export default class SideButton extends React.Component {
    render() {
        return (
            <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton> }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                <MenuItem onTouchTap={() => open('http://www.investinrenfrewshire.com/')} primaryText="Invest in Renfrewshire" />
                <MenuItem onTouchTap={() => open('http://www.renfrewshire.gov.uk/')} primaryText="Renfewshire Council" />
                <MenuItem onTouchTap={() => open('http://www.barnardos.org.uk/')} primaryText="Barnardos" />
                <MenuItem onTouchTap={() => open('http://www.ymcascotland.org/locations/paisley/')} primaryText="YMCA" />
            </IconMenu>
        );
    }
}
