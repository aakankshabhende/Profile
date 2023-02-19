import { useState } from 'react'
import axios from "axios";
import './App.css';

function App() {

  const [data, setData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      const res =response.data
      setData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        }
    })}

  return (
    <>
        <p>Profile details: </p><button onClick={getData}>Click Here</button>
        {data && <div>
              <p>Profile name: {data.profile_name}</p>
              <p>About me: {data.about_me}</p>
            </div>
        }
        </>
  );
}

export default App;
