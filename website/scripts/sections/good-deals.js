
import React from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

const GoodDeals = props => {
  return (
      <div className='container'>
          <div className="page-header">
              <h1>Shopping Deals</h1>
          </div>
          <div className='row'>
              <div className='col-md-12 down'>
              {
                  props.deals.map((deal, index) => {
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
    );
}

const stateToProps = state => { 
    return { deals: state.gooddeals.deals } 
};

export default connect(stateToProps)(GoodDeals);
