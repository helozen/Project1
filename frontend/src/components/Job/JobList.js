// src/components/Job/JobList.js
import React, { useState, useEffect } from 'react';
import { fetchJobs } from '../../api/api';

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const { data } = await fetchJobs();
      setJobs(data);
    };
    getJobs();
  }, []);

  return (
    <div>
      <h2>Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
