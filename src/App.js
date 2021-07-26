import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Lists from "./Lists";

const API_KEY = "8b4d02d3-5c81-48e8-90a4-8701f2feda97";
const API = `https://run.mocky.io/v3/${API_KEY}`;

function App() {
  const [lists, setList] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(API);

    let unsortedLIst = response.data.data
    unsortedLIst.sort((a,b) => {
        if(a.name > b.name)
    return 1;
    
    if(b.name > a.name)
    return -1;
    
    return 0;
    })
    setList(unsortedLIst);

    // sortList(lists) 
    
  };

  // const sortList =  (lists) => {
    
  //   if(a.name > b.name)
  //   return 1;
    
  //   if(b.name > a.name)
  //   return -1;
    
  //   return 0;
  // }

  

  const searchClickHandler = (e) => {
    e.preventDefault();
    fetchData();
  }

  const filterContacts = (e) => {
    const inputValue = e.target.value
    const tempList = lists.filter((list) => {
       return list.name.includes(inputValue)
    })
    setList(tempList)
  }

  return (
    <div className="container custom-container">
      <h1>List Manager App</h1>
      <div className="row">
        <div className="col">
          <div className="card justify-content-center">
            <div className="row">
            <form className="d-flex" onSubmit={fetchData}>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search ..."
                    
                    
                    onChange={filterContacts}
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    onClick={searchClickHandler}
                  >
                    <i class="bi bi-search"></i>
                  </button>
                </form>
            </div>
            <div className="row">
              
              <div className="col ms-1 me-1 ">
                {/* <button onClick={fetchData}>Fetch</button> */}
                
                
                
                 {lists.length > 0 &&  lists.map((list) => {
                    return <Lists key={list.id} {...list} />;
                  })}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
