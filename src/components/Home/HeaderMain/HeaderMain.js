import React from 'react';
import demo from '../../../image/bg_3.jpg'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="text-white">Get better grades <br /> Instant online tutoring</h1>
                <p className="text-warning">Our specialists can help you with finding the right tutor for you.</p>
                <button className="btn btn-primary">GET COURSE</button>
            </div>
            <div className="col-md-6">
                <img src={demo} alt="" className="img-fluid" />
            </div>
        </main >
    );
};

export default HeaderMain;
