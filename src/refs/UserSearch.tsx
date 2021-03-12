import { useState, useRef, useEffect } from 'react';

const users = [
  {
    name: 'Sarah',
    age: 20
  },
  {
    name: 'John',
    age: 20
  },
  {
    name: 'Eric',
    age: 20
  }
];

const UserSearch: React.FC = () => {
  const [ name, setName ] = useState('');
  const [ foundUser, setFoundUser ] = useState<{ name: string, age: Number } | undefined>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClickSearch = () => {
    setFoundUser(users.find(user => user.name === name));
  };

  return (
    <div>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleClickSearch} >Search User</button>
      <div>
        {foundUser && `Name: ${foundUser.name}`}
        {foundUser && `Age: ${foundUser.age}`}
      </div>
    </div>
  );
};

export default UserSearch;