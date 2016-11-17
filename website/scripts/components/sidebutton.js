
import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

const open = url => window.open(url, '_blank');

export default class SideButton extends React.Component {
    render() {
        return (
            <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton> }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                <MenuItem onTouchTap={() => open('http://www.renfrewshire.gov.uk/')} primaryText="Renfewshire Council" />
                <MenuItem onTouchTap={() => open('https://www.barnardos.org.uk/')} primaryText="Barnardos" />
            </IconMenu>
        );
    }
}
