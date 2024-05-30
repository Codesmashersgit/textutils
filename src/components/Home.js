
// import './Child.css';
// function Child(props){

//   function clickhandler(){
//     console.log("hello");
//   }
//     return (
//         <div>
//       <h1>{props.name}</h1>
//       {/* <p>Age: {props.age}</p> */}
//      <button onClick={clickhandler}>{props.button}</button>
//     </div>
//     );
// }

// export default Child;
// Home.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const navigateToAbout = () => {
    history.push('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToAbout}>Go to About Page</button>
    </div>
  );
}

export default Home;
