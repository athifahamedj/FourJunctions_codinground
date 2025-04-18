import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../redux/movie';
import { addActor } from '../redux/actor';
import { addProducer } from '../redux/producer';
import { v4 as uuidv4 } from 'uuid';

const MovieForm = () => {
  const dispatch = useDispatch();
  const actors = useSelector((state) => state.actors);
  const producers = useSelector((state) => state.producers);

  const [form, setForm] = useState({
    name: '',
    year: '',
    plot: '',
    poster: '',
    producerId: '',
    actorIds: [],
  });
  const [newActor, setNewActor] = useState({ name: '', gender: '', dob: '', bio: '' });
  const [newProducer, setNewProducer] = useState({ name: '', gender: '', dob: '', bio: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { id: uuidv4(), ...form };
    dispatch(addMovie(movie));
    setForm({ name: '', year: '', plot: '', poster: '', producerId: '', actorIds: [] });
  };

  const handleAddActor = () => {
    const actor = { id: uuidv4(), ...newActor };
    dispatch(addActor(actor));
    setForm({ ...form, actorIds: [...form.actorIds, actor.id] });
    setNewActor({ name: '', gender: '', dob: '', bio: '' });
  };

  const handleAddProducer = () => {
    const producer = { id: uuidv4(), ...newProducer };
    dispatch(addProducer(producer));
    setForm({ ...form, producerId: producer.id });
    setNewProducer({ name: '', gender: '', dob: '', bio: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input placeholder="Movie Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Year" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} />
      <input placeholder="Plot" value={form.plot} onChange={e => setForm({ ...form, plot: e.target.value })} />
      <input placeholder="Poster URL" value={form.poster} onChange={e => setForm({ ...form, poster: e.target.value })} />

      <select value={form.producerId} onChange={e => setForm({ ...form, producerId: e.target.value })}>
        <option value="">Select Producer</option>
        {producers.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
      </select>

      <select multiple value={form.actorIds} onChange={e => setForm({ ...form, actorIds: Array.from(e.target.selectedOptions, option => option.value) })}>
        {actors.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
      </select>

      <button type="submit">Add Movie</button>

      <div>
        <h3>Add New Actor</h3>
        <input placeholder="Name" value={newActor.name} onChange={e => setNewActor({ ...newActor, name: e.target.value })} />
        <input placeholder="Gender" value={newActor.gender} onChange={e => setNewActor({ ...newActor, gender: e.target.value })} />
        <input placeholder="DOB" value={newActor.dob} onChange={e => setNewActor({ ...newActor, dob: e.target.value })} />
        <input placeholder="Bio" value={newActor.bio} onChange={e => setNewActor({ ...newActor, bio: e.target.value })} />
        <button type="button" onClick={handleAddActor}>Add Actor</button>
      </div>

      <div>
        <h3>Add New Producer</h3>
        <input placeholder="Name" value={newProducer.name} onChange={e => setNewProducer({ ...newProducer, name: e.target.value })} />
        <input placeholder="Gender" value={newProducer.gender} onChange={e => setNewProducer({ ...newProducer, gender: e.target.value })} />
        <input placeholder="DOB" value={newProducer.dob} onChange={e => setNewProducer({ ...newProducer, dob: e.target.value })} />
        <input placeholder="Bio" value={newProducer.bio} onChange={e => setNewProducer({ ...newProducer, bio: e.target.value })} />
        <button type="button" onClick={handleAddProducer}>Add Producer</button>
      </div>
    </form>
  );
};

export default MovieForm;