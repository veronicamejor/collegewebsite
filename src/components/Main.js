// src/components/MainSection.js
import React from 'react';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image6 from './image6.jpg';
import image7 from './image7.jpg';
import image8 from './image8.jpg';
import image9 from './image9.jpg';


const MainSection = () => {
  return (

<section className="main-section">
    <div className="container  text-center mt-4">
      <h1>I.S.T EDUCATION</h1>
      <p>
      We are dedicated to providing students with individualized training through comprehensive, innovative,<br></br>
       and high-quality vocational programs that prepare students for rewarding careers in rapidly increasing industries.
      </p>
    </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={image1} alt="Card 1" />
              <div className="card-body">
        <button className="btn btn-dark">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={image2} alt="Card 2" />
              <div className="card-body">
        <button className="btn btn-dark">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={image3} alt="Card 3" />
              <div className="card-body">
        <button className="btn btn-dark">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={image4} alt="Card 4" />
              <div className="card-body">
        <button className="btn btn-dark">learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" container card col-md-10 mt-4">
      <div className="card-body">
        <h5 className="card-title text-center">About Us</h5>
        <p className="card-text text-center">
        We are dedicated to providing students with individualized training through comprehensive, innovative, <br></br>
        and high-quality vocational programs that prepare students for rewarding careers in rapidly increasing industries.
        </p>
      </div>
    </div>


    <div className="container  text-center mt-4">
      <h1>Our Courses</h1> 
    </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src={image6} alt="Card 1" />
              <div className="card-body">
                <h5 className="card-title">Software Development</h5>
                <button className="btn btn-dark">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={image7} alt="Card 2" />
              <div className="card-body">
                <h5 className="card-title">Cyber Security</h5>
                <button className="btn btn-dark">Learn More</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={image8} alt="Card 3" />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <button className="btn btn-dark">Learn More</button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={image9} alt="Card 6" />
              <div className="card-body">
                <h5 className="card-title">Oracle</h5>
                <button className="btn btn-dark">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    </section>
  );
};

export default MainSection;
