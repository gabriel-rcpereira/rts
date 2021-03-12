import { Component } from 'react';

interface User {
  name: string, 
  age: number
}

const users: User[] = [
  { name: 'Sarah', age: 20 }
];

interface UserSearchState {
  name: string,
  foundUser: User | undefined
}

class UserSearch extends Component<UserSearchState> {

  state: UserSearchState = {
    name: '',
    foundUser: undefined
  };

  handleOnClickSearch = () => {
    const foundUser = users.find(user => user.name === this.state.name);

    this.setState({ 
      foundUser 
    });
  }

  render() {
    const { name, foundUser } = this.state;

    return (
      <div>
        <input value={name} onChange={e => this.setState({ name: e.target.value })} />
        <button onClick={this.handleOnClickSearch} >Search User</button>
        <div>
          {foundUser && `Name: ${foundUser.name}`}
          {foundUser && `Age: ${foundUser.age}`}
        </div>
      </div>
    );
  }
}

export default UserSearch;