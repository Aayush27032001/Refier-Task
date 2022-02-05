import React from 'react';
import './JobCard.scss'
import img from "../Assets/image.svg"

const JobCard = ({job}) => {
    return (
        <div className="container">
            <div className="job-card">
                <div className="job-title-holder">
                    <div className="job-title">
                        <h3>{job.name}</h3>
                        <p>{job.company}</p>
                    </div>
                    <img src={img} alt="image" />
                </div>
                <div className="job-card-details">
                    <div className="job-type-exp">
                        <p><i class="fas fa-map-marker-alt"></i>{job.location}</p>
                        <p><i class="fas fa-briefcase"></i>{job.experience} years Of Experience</p>
                    </div>
                    <p>{job.content}</p>
                    <div className="job-type-ui-container">
                        <div className="job-type-ui">
                            <p>{job.location}</p>
                            <p>{job.type}</p>
                        </div>
                        <button>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
