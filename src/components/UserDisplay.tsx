import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import SimpleMap from './SimpleMap';

import User from '../models/User';
import State from '../models/State';

interface UserDisplayProps {
  users: User[],

  setUsersData: Function,
}

function UserDisplay({users, setUsersData}: UserDisplayProps) {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response: any) => {
      setUsersData(response.data);
    })
  }, []);

  return (
    <div>
      <h2>QUESTION 2</h2>
      {users.map((user => {
        return (
          <div>
            <div>{user.name}</div>
            <div>{user.address.street}</div>
            <div>{user.address.suite}</div>
            <SimpleMap center={{lat: +user.address.geo.lat, lng: +user.address.geo.lng}}/>
          </div>
        )
      }))}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay)

