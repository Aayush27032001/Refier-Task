import React from 'react';
import "./SideForm.scss"

const SideForm = () => {
    return (
        <div className="sideform-container">
            <div className="sideform">
                <div className="sideform-top">
                    <h3>Confused?<br />We can help you</h3>
                </div>
                <div className="sideform-bottom">
                    <div className="form-name-input">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="form-email-input">
                        <label>Email</label>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="form-mobile-input">
                        <label>Mobile Number</label>
                        <input type="number" placeholder="Mobile" />
                    </div>
                </div>

                <button className="form-submit-btn">Submit</button>
            </div>
        </div>
    );
}

export default SideForm;
