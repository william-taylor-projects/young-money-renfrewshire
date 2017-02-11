
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import React from 'react';

const open = url => window.open(url, '_blank');

export default class SideButton extends React.Component {
    render() {
        return (
            <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton> }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                <a className='nounderline' target='_blank' href='http://www.renfrewshire.gov.uk/'>
                    <MenuItem primaryText="Renfewshire Council" />
                </a>
                <a className='nounderline' target='_blank' href='https://www.barnardos.org.uk/'>
                    <MenuItem primaryText="Barnardos" />
                </a>
                <a className='nounderline' target='_blank' href='https://www.ymcascotland.org/locations/paisley/'>
                    <MenuItem primaryText="YMCA" />
                </a>
            </IconMenu>
        );
    }
}
