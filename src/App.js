import React from 'react';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
    <Profile name='Amal Ben Salah' bio='Student' profession='Web devolopper' >
      <img src='https://media.istockphoto.com/photos/portrait-beautiful-young-woman-with-clean-fresh-skin-picture-id1329622588?b=1&k=20&m=1329622588&s=170667a&w=0&h=MrsM7nyIOW4Gt5PM5Vs6xYIMJ1nr1FLT9bvt0Sve-S4=' alt='pic'   />

      </Profile>
      </div>
  );
}

export default App;
