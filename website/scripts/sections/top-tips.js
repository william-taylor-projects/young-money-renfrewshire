
import React from 'react';

const tips = [{},{},{},{},{},{},{},{},{},{},{},{}]

export default class TopTips extends React.Component {
    render(){
        return (
            <div className='container'>
                <div className="page-header">
                    <h1>Top Tips</h1>
                </div>
                <div className='row'>
                {
                    tips.map((tip, index) => {
                        return (
                            <div key={index} className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <img src="http://placehold.it/350x350" alt="..." />
                                    <div className="caption">
                                        <h3>Write Your Own Budget</h3>
                                        <p>Resolution possession discovered surrounded advantages has but few add. Yet walls times spoil put. Be it reserved contempt rendered smallest.</p>
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
}