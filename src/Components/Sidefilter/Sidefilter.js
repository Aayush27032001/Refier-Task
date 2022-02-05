import React, { useState, useEffect } from 'react';
import "./Sidefilter.scss"


const Sidefilter = () => {

    const [categories, setCategories] = useState(["Sales", "Marketing", "HR", "Finance", "Customer Support", "Project Management", "Tech", "Leadership", "Other"]);
    const [locations, setLocations] = useState(["Mumbai", "Delhi", "Bangluru", "Ahmedabad", "Hyderabad", "Pune"])
    const [showCatList, setShowCatList] = useState(true);
    const [showLocList, setShowLocList] = useState(true);
    const [payScaleValue, setPayScaleValue] = useState("4")

    const payScaleHandler = (e) => {
        setPayScaleValue(e.target.value);
    }

    return (
        <div className="job-filter-container">
            <div class="job-filter" onMouseLeave={() => { setShowCatList(true); setShowLocList(true) }}>
                <h3><i class="fal fa-sliders-h"></i> Filters</h3>
                <div className="category-drop-container" onClick={() => { setShowCatList(!showCatList) }} onMouseLeave={() => { setShowCatList(true) }}>
                    <label>Category</label>
                    <div className="category-dropdown">
                        <p>eg - Sales, Marketing</p>
                        <span><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></span>
                    </div>
                    <div className={showCatList ? "displayNone" : "category-dropdown-list"}>
                        {categories.map((category, i) => <p key={i}>{category}</p>)}
                    </div>

                </div>
                <div className="location-drop-container" onClick={() => { setShowLocList(!showLocList) }} onMouseLeave={() => { setShowLocList(true) }} >
                    <label>Location</label>
                    <div className="location-dropdown">
                        <p>eg - Delhi, Mumbai</p>
                        <span><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></span>
                    </div>
                    <div className={showLocList ? "displayNone" : "location-dropdown-list"}>
                        {locations.map((location, i) => <p key={i}>{location}</p>)}
                    </div>
                </div>
                <div className="wfh-toggler">
                    <p>Work from Home</p>
                    <label class="toggle-switch">
                        <input type="checkbox" class="checkbox" id="checkbox" />
                        <span class="switch-btn"></span>
                    </label>
                </div>
                <div className="internship-toggler">
                    <p>Only Internships</p>
                    <label class="toggle-switch">
                        <input type="checkbox" class="checkbox" id="checkbox" />
                        <span class="switch-btn"></span>
                    </label>
                </div>
                <div className="payscale-filter">
                    <div>
                        <p>Desired Minimum Monthly Pay</p>
                        <output id="output" name="result">{payScaleValue}L</output>
                    </div>

                    <input type="range" min="1" max="10" step="0.5" className="slider" id="salaryRangeSlider" value={payScaleValue} onChange={payScaleHandler} />
                </div>
            </div>

        </div>
    );
}

export default Sidefilter;
