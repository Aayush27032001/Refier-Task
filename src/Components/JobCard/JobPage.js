import React, {useState} from 'react';
import JobCard from './JobCard';

const JobPage = () => {

    const [jobs,setJobs] = useState([{
        name:"Business Development Executive (Only for Female Candidates)",
        company:"Easeassist",
        location:"Remote",
        experience:"0+",
        content:"Immediate Joining !! Fast Growing Business Solutions Startup is looking for passionate Female Business Development Professionals who would l...",
        type:"Full-Time"
    },{
        name:"Business Development Executive (Only for Female Candidates)",
        company:"Easeassist",
        location:"Remote",
        experience:"4+",
        content:"Immediate Joining !! Fast Growing Business Solutions Startup is looking for passionate Female Business Development Professionals who would l...",
        type:"Full-Time"
    }])

    return (
        <>
            
            {
                jobs.map((job,i)=>
                    <JobCard job={job} key={i}/>
                )
            }
        </>
    );
}

export default JobPage;
