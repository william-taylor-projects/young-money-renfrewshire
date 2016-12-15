import { connect } from 'react-redux';
import React from 'react';

const TopTips = props => {
    return (
        <div className='container'>
            <div className="page-header">
                <h1>Top Tips</h1>
            </div>
            <div className='row'>
            {
                props.tips.map((tip, index) => {
                    return (
                        <div key={index}>
                            <div className="col-xs-12 col-md-4">
                                <div className="thumbnail no-border text-center">
                                    <img className='img-responsive img-circle' src={"./"+tip.img} alt="..." />
                                    <div className="caption">
                                        <h3>{tip.title}</h3>
                                        <p>{tip.text}</p>
                                    </div>
                                </div>
                            </div>
                            { (++index) % 3 == 0 ? <div className="clearfix visible-md-block"></div> : ''}
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

const stateToProps = state => { 
    return { tips: state.toptips.tips } 
};

export default connect(stateToProps)(TopTips)