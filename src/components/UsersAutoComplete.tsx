import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import User from '../models/User';
import State from '../models/State';

interface UsersAutoCompleteProps {
  users: User[],

  setUsersData: Function,
}

function UsersAutoComplete({users, setUsersData}: UsersAutoCompleteProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsersData(response.data);
    })
  }, []);

  useEffect(() => {
   if (textInput.length > 0) {
      const regex = new RegExp(`^${textInput}`, 'i');
      setSuggestions(users.sort().filter(user => regex.test(user.name)).map(users => users.name));
    } else {
      setSuggestions([])
    }
  }, [textInput]);

  return (
    <div>
      <input type="text" onChange={(e) => setTextInput(e.target.value)} value={textInput} placeholder="Enter a user's name"></input>
      <ul>
        {suggestions.map(suggestion => {
          return <li onClick={() => setTextInput(suggestion)}>{suggestion}</li>
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setUsersData: (users: User[]) => dispatch({ type: 'SET_USER_DATA', payload: users }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAutoComplete)

