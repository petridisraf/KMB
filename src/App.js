
import './App.css';
import React, {useState} from 'react';
import Axios from 'axios';
import axios from 'axios';
import { MDBFooter, MDBContainer,MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,MDBPagination, MDBPaginationItem, MDBPaginationLink, MDBSelect  } from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function App() {
  const [data,setData]=useState([])
  const getNews =()=>{
    axios.get("https://newsapi.org/v2/everything?q=a&apiKey=956d389a333644709a37dfb930bcd9b0&page=3&pageSize=6")
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
      <div>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#">KMB</Navbar.Brand>
              <Nav.Link href="#">Signout</Nav.Link>
              <Nav.Link href="#features">Settings</Nav.Link>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <a href="#login">Rafail Petridis</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
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

      <main onLoad={getNews}>
      <div className='container my-3'>
        <button className='btn btn-primary' onClick={getNews}>Fetch news</button>

        <select style={{float: "right"}} className="select">
          <option value="business">Business</option>
          <option value="entertainment">entertainment</option>
          <option value="general">general</option>
          <option value="health">health</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="technology">technology</option>
        </select>

        

      </div>

      

      
      <div className='container'>
        <div className='row'>{
            data.map((value)=>{
              return(
                <div className='col-3'>
                <div className="card" style={{width: "18rem"}}>
                  <img className="card-img-top" src={value.urlToImage} alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                    <a href="#" className="btn btn-primary">Main News</a>
                  </div>
                </div>
              </div> 
              );
            })


        }
          
        </div> 

      </div>

      <nav aria-label='Page navigation example'>
        <MDBPagination className='mb-0'>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>Previous</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>1</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>2</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>3</MDBPaginationLink>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBPaginationLink href='#'>Next</MDBPaginationLink>
          </MDBPaginationItem>
        </MDBPagination>
      </nav>  
        
      </main>

      <footer>
        <MDBFooter className='text-left text-white' style={{ backgroundColor: '#21081a' }}>
          <MDBContainer className='p-4'></MDBContainer>

          <div className='text-left p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-white' href='https://rafailpetridis.com/'>
              Rafail petridis
            </a>
            <a className='text-white' href='#'>
            Privacy
            </a>
            <a className='text-white' href='#'>
              Terms
            </a>
            <a className='text-white' href='#'>
            Cookies
            </a>
            <a className='text-white' href='#'>
            More
            </a>
          </div>
        </MDBFooter>

      </footer>
    </div>
  );
}



export default App;
