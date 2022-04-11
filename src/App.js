import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import email from "./assets/email.svg";
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";

function App() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const axiosFunc = () => {
    axios.get("https://randomuser.me/api/").then((response) => {
      const myData = response.data.results[0];
      setUser(myData);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    axiosFunc();
  }, []);

  const handleRandomUser = () => {
    axiosFunc();
  };

  return (
    <div className="App">
      {!isLoading && (
        <main>
          <section className="section1">
            <div>
              <span>
                <img src={user.picture.large} alt="" />
              </span>
              <h2 style={{textDecoration:'underline'}}>
                {user.name.title + " " + user.name.first + " " + user.name.last}
              </h2>
            </div>

            <div>
              <span>
                <img src={email} alt={user.email} className='svg'/>
              </span>
              <h2>{user.email}</h2>
            </div>

            <div>
              <span>
                <img src={phone} alt={user.phone} className='svg' />
              </span>
              <h2>{user.phone}</h2>
            </div>

            <div>
              <span>
                <img src={location} alt="" className='svg' />
              </span>
              <h2>
                {user.location.street.number + " " + user.location.street.name}
              </h2>
            </div>
          </section>

          <section className="section2">
            <h2>Age : {user.dob.age}</h2>
            <h2>Registered Date: {user.registered.date.slice(0, 10)}</h2>
          </section>
        </main>
      )}

      <div className="btn">
        <button onClick={handleRandomUser}>RANDOM USER</button>
      </div>
    </div>
  );
}

export default App;
