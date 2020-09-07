import React from 'react';

function App() {
  const profiles = [
    { id:1, name: "Taro", age:10 },
    { id:2, name: "Hanako", age:5 }
  ];
  return (
    <div>
      {profiles.map((profile, i)=> <User name={profile.name} age={profile.age} key={i}/>)}
      <User/>
    </div>
  );
}

const User = (props)=>{
  return (<div>Hi, I am {props.name}, and {props.age} years old!</div>);
}
User.defaultProps = {name:"noname",age:1};

export default App;
