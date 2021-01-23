import React from 'react';
import NameInput from './components/NameInput';
import UserDisplay from './components/UserDisplay'
import UsersAutoComplete from './components/UsersAutoComplete';

function App() {
  return (
    <div >
      <NameInput/>
      <UsersAutoComplete />
      <UserDisplay/>
    </div>
  );
}

export default App;
