import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducer } from '../redux/producer';

const ProducerForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', gender: '', dob: '', bio: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducer(form));
    setForm({ name: '', gender: '', dob: '', bio: '' });
  };

  return (
    <div>
      <h2>Add Producer</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="gender" placeholder="Gender" value={form.gender} onChange={handleChange} required />
        <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
        <textarea name="bio" placeholder="Bio" value={form.bio} onChange={handleChange} required />
        <button type="submit">Add Producer</button>
      </form>
    </div>
  );
};

export default ProducerForm;