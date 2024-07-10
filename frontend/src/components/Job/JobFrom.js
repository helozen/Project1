// src/components/Job/JobForm.js
import React, { useState } from 'react';
import { createJob } from '../../api/api';

function JobForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob({ title, description });
      setTitle('');
      setDescription('');
      alert('Job created successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Job Description" required />
      <button type="submit">Create Job</button>
    </form>
  );
}

export default JobForm;
