// import logo from './logo.svg';
import './App.css';
import CompanyAdd from './components/CompanyAdd';
import Companies from './components/Companies';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import ComapanyCard from './components/CompanyCard';
import axios from 'axios';


function App() {
  const [companies, setCompanies] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:3000/api/companyList`, {
      headers:{
        'Accept':'application/json'
      }
    })
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      setCompanies(res);
    })
    .catch((err)=>{
      console.log(`React Fetch Error : ${err}`);
    })
  },[]);

  return (
    <>
    <div className="container">
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> 
            <img src="/img/hywu.svg" alt="" width="28" height="28" className="d-inline-block align-text-top me-1" />
            소프트웨어융합과 채용 공고 </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0"> */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active me-1" aria-current="page" href="#">Home</a>
              </li> */}
            </ul>
            {/* <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}

            {/* Modal */}
            <CompanyAdd />
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/banner2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/banner3.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/banner1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center'
      }}>
        <h2 className="sub_title" style={{
          textAlign: 'center',
          marginTop: '50px',
          borderBottom: '1px solid gray',
          width: '30%',
          height: '50px'
        }}> Post List </h2>
      </div>

      <div className='card_layout'>
      {
          companies.map((companies)=>{
            return (
              <ComapanyCard
                key={companies.id}
                id={companies.id}
                logo={companies.logo}
                name={companies.name}
                num={companies.num}
                job={companies.job}
                date={companies.date}
              />
            )
          })
        }
      </div>

      {/* Table */}
      {/* <table className="table table-hover" style={{marginTop:'20px'}}>
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col"> </th>
            <th scope="col">회사명</th>
            <th scope="col">채용인원</th>
            <th scope="col">직무</th>
            <th scope="col">채용기간</th>
            <th scope="col">Modify/Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          companies.map((companies)=>{
            return (
              <Companies
                key={companies.id}
                id={companies.id}
                image={companies.logo}
                name={companies.name}
                num={companies.num}
                job={companies.job}
                date={companies.date}
              />
            )
          })
        }
        </tbody>
      </table> */}
    </div>
    </>
  );
}

export default App;
