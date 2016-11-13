
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'hidden'
  }
};

const deals = [
  {
    img: 'http://placehold.it/180x180',
    title: 'Breakfast',
    author: 'jill111',
  }
];

for(var i = 0; i < 23; i++) {
  deals.push({
    img: 'http://placehold.it/180x180',
    title: 'Breakfast',
    author: 'jill111',
  });
}

export default class GoodDeals extends React.Component {
    openDeal() {
      window.open('https://groceries.asda.com/product/healthier-bread/warburtons-wholemeal-protein-bread/910002668731');
    }
    render(){
        const icon = <IconButton><StarBorder color="white" /></IconButton>;
        return (
            <div className='container'>
                <div className="page-header">
                    <h1>Shopping Deals</h1>
                </div>
                <div className='row'>
                    <div className='col-md-12 down'>
                    {
                        deals.map((deal, index) => {
                          return (
                            <div className='col-lg-3 col-md-4 col-xs-12' key={index}>
                              <Paper zDepth={1}>
                                <div className="thumbnail small-pd">
                                  <img className='img-responsive' src="http://placehold.it/320x320" alt="" />
                                  <div className="caption">
                                      <h4 className="pull-right">$5.00</h4>
                                      <h4><a href="http://www.asda.com/" target='_blank'>Item</a>
                                      </h4>
                                      <p>This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                  </div>
                                </div>
                              </Paper>
                            </div>
                          )
                        })
                    }
                    </div>
                </div>
            </div>
        )
    }
}
