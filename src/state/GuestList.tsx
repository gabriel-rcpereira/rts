import { useState } from 'react';

export const GuestList: React.FC = () => {
  const [ name, setName ] = useState('');
  const [ guests, setGuests ] = useState<string[]>([]);

  const handleClickAddGuest = () => {
    setGuests([ ...guests, name ]);
    setName('');
  };

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} ></input>
      <button onClick={handleClickAddGuest} >Add Guest</button>
      <ul>
        {guests.map(guest => (<li key={guest}>{guest}</li>))}
      </ul>
    </div>
  );
};