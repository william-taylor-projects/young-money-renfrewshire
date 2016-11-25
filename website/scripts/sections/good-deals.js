
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
                      <div className='col-xs-12 col-sm-6 col-md-4' key={index}>
                        <Paper zDepth={1}>
                          <div className="thumbnail small-pd">
                            <img className='img-responsive deal-img' src={deal.image.S} alt="" />
                            <div className="caption">
                                <h4 className="pull-right">£{deal.price.N}</h4>
                                <h4><a href={deal.link.S} target='_blank'>{deal.title.S}</a>
                                </h4>
                                <p className='description'>{deal.description.S}</p>
                            </div>
                          </div>
                        </Paper>
                        <div class="clearfix"></div> 
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
