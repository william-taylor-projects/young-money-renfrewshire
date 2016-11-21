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
                props.toptips.tips.map((tip, index) => {
                    return (
                        <div key={index} className="col-xs-12 col-md-4">
                            <div className="thumbnail no-border text-center">
                                <img className='img-circle' src={tip.img} alt="..." />
                                <div className="caption">
                                    <h3>{tip.title}</h3>
                                    <p>{tip.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            </div>
        </div>
    )
}

export default connect(state => state)(TopTips)