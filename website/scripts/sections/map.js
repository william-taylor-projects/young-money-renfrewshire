
import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { mapTheme } from '../theme.js';

export default class BankMap extends React.Component {
    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
            center:{ lat: 55.8473, lng: -4.4401 },
            zoom: 8,
            styles: mapTheme,
            disableDefaultUI: true,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true
        });
    }

    render() {
        return (
            <div>
                <div className='bank-heading text-center'>
                    <div className="container-fixed">
                        <div className="jumbotron">
                            <h1>Bank Map</h1>
                        </div>    
                    </div>
                </div>
                <div className='container down'>
                    <div className="row">
                        <div className='col-md-12'>
                            <h1>Financial Services Near You</h1><hr/>
                        </div>
                        <div className='col-md-8'>
                            <AutoComplete
                                hintText="Enter a name or search using the map below"
                                dataSource={[]}
                                onUpdateInput={x => x}
                                floatingLabelText="Search by name"
                                fullWidth={true}
                            />
                        </div>
                        <div className='col-md-4'>
                            <SelectField fullWidth={true} floatingLabelText="Type" value={1} onChange={x=>x}>
                                <MenuItem value={1} primaryText="Any" />
                                <MenuItem value={2} primaryText="Normal Bank" />
                                <MenuItem value={3} primaryText="Credit Union" />
                                <MenuItem value={4} primaryText="Council Service" />
                                <MenuItem value={5} primaryText="Charity" />
                            </SelectField>
                        </div>
                        <div className='col-md-12'>
                           <div id='map' ref='map'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}