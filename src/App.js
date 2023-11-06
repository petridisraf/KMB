
import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';
import axios from 'axios';

function App() {
  const [data,setData]=useState([])
  const getNews =()=>{
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=956d389a333644709a37dfb930bcd9b0")
    .then((response)=>{
      setData(response.data.articles)
    })

  }

  return (
    <div className="App">

      <header className="App-header">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
      
      <div className="dropdown">
        <button className="dropbtn">R|P Rafail Petridis</button>
        <div className="dropdown-content">
          <a href="#">Setting</a>
          <a href="#">Logout</a>
        </div>
      </div>


      <div className="container">
          <div className="row">
              <div className="col-md-12">
                  <div className="fb-profile-block">
                      <div className="fb-profile-block-thumb cover-container"></div>
                      <div className="profile-img">
                          <a href="#">
                              <img src="https://media.licdn.com/dms/image/D4E0BAQESoWpfWxecmQ/company-logo_200_200/0/1681324616194/kissmybutton_logo?e=2147483647&v=beta&t=MJUu74MuPZAjle9a8DlYNmfUjSH0ABUABpegjjk2ldI" alt="" title=""/>        
                          </a>
                      </div>
                      <div className="profile-name">
                          <h2>Rafail Petridis</h2>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
      </header>

      <main>

      <div className='container my-3'>
        <button className='btn btn-primary' onClick={getNews}>Fetch news</button>
      </div>
      <div className='container'>
        <div className='row'>{
            data.map((value)=>{
              return(
                <div className='col-3'>
                <div className="card" style={{width: "18rem"}}>
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div> 
              );
            })


        }
          
        </div> 

      </div>

        
      </main>

      <footer>


      </footer>
    </div>
  );
}



export default App;
