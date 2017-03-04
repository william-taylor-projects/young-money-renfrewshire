
import React from 'react';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import numeral from 'numeral';

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
                        <div key={index}>
                            <div className='col-xs-12 col-sm-6 col-md-4'>
                                <Paper zDepth={1}>
                                <div className="thumbnail small-pd">
                                    <img className='img-responsive deal-img' src={deal.image.S} alt="" />
                                    <div className="caption">
                                        <h4 className="pull-right">£{numeral(deal.price.N).format('0,0.00')}</h4>
                                        <h4><a href={deal.link.S} target='_blank'>{deal.title.S}</a>
                                        </h4>
                                        <p className='description justify'>{deal.description.S}</p>
                                    </div>
                                </div>
                                </Paper>
                            </div>
                            { (++index) % 3 == 0 ? <div className="clearfix visible-md-block"></div> : ''} 
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
