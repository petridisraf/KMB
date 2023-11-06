
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      
      <div class="dropdown">
        <button class="dropbtn">R|P Rafail Petridis</button>
        <div class="dropdown-content">
          <a href="#">Setting</a>
          <a href="#">Logout</a>
        </div>
      </div>


      <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="fb-profile-block">
                      <div class="fb-profile-block-thumb cover-container"></div>
                      <div class="profile-img">
                          <a href="#">
                              <img src="https://media.licdn.com/dms/image/D4E0BAQESoWpfWxecmQ/company-logo_200_200/0/1681324616194/kissmybutton_logo?e=2147483647&v=beta&t=MJUu74MuPZAjle9a8DlYNmfUjSH0ABUABpegjjk2ldI" alt="" title=""/>        
                          </a>
                      </div>
                      <div class="profile-name">
                          <h2>Rafail Petridis</h2>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
      </header>

      <body>

      <div className='container my-3'>
        <button className='btn btn-primary' onclick={getNews}>Fetch news</button>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="card" style={{width: "18rem"}}>
              <img class="card-img-top" src="..." alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div> 

      </div>

        
      </body>

      <footer>


      </footer>
    </div>
  );
}



export default App;
