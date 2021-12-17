import React from 'react'
import styled from 'styled-components'
import play from '../Img/play.png'
import { Link } from 'react-router-dom'
const Toolbar = styled.header`
  .dot{
    max-width:10px;
    height:10px;
    background-color:"black";
    @media all and (max-width:576px){   
     height:"2px"  
   } 
  }
  .play{
    @media all and (max-width:1000px){   
       display:none
   }  
  }
  span{
    @media all and (max-width:1000px){   
       display:none
   }  
  }
  .non{
    @media all and (max-width:900px){   
       display:none
   } 
  }
  .col-4{
    @media all and (max-width:900px){   
       display:none
   } 
  }
`
function Carosule() {
  return (
    <Toolbar>
      <div style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "0px" }}>
        <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel" style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "0px" }} >
          <div className="carousel-inner" style={{ padding: "3%" }}>
            <div className="carousel-item active">
              <div className="row">
                <div className="col-4">
                  <h1 className='non mt-3 text-white'  ><strong>{slider[0].title}</strong></h1>
                  <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0].text}</p>
                  <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Trending</button>
                    <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Recommanded</button>
                  </div>
                  <Link style={{ textDecoration: "none" }} to={
                    {
                      pathname: "/swatch",
                      state: {
                        Data: slider[0],
                      },
                    }
                  }>
                    <div className='pt-4'>

                      <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}>Play</span>

                    </div> </Link>
                </div>
                <div className="col-12 col-lg-8">
                  <Link style={{ textDecoration: "none" }} to={
                    {
                      pathname: "/swatch",
                      state: {
                        Data: slider[0],
                      },
                    }
                  }>
                    <img style={{ borderRadius: "10px" }} src={slider[0].img} className="d-block w-100" alt="..." />
                  </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <h1 className='non mt-3 text-white'> <strong>{slider[1].title}</strong></h1>
                  <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0].text}</p>
                  <div className=" non btn-group mt-3" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Trending</button>
                    <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Recommanded</button>
                  </div>
                  <Link style={{ textDecoration: "none" }} to={
                    {
                      pathname: "/swatch",
                      state: {
                        Data: slider[1],
                      },
                    }
                  }>
                    <div className='pt-4'>
                      <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}>Play</span>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-lg-8">
                  <Link style={{ textDecoration: "none" }} to={
                    {
                      pathname: "/swatch",
                      state: {
                        Data: slider[1],
                      },
                    }
                  }>
                    <img style={{ borderRadius: "10px" }} src={slider[1].img} className="d-block w-100" alt="..." />
                   
                  </Link>
                </div>
              </div>


            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <h1 className='non mt-3 text-white'> <strong>{slider[2].title}</strong></h1>
                  <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[0].text}</p>
                  <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Trending</button>
                    <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Recommanded</button>
                  </div>
                  <Link style={{ textDecoration: "none" }} to={
                    {
                      pathname: "/swatch",
                      state: {
                        Data: slider[2],
                      },
                    }
                  }>
                    <div className='pt-4'>
                      <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}>Play</span>
                    </div>
                  </Link>

                </div>
                <div className="col-12 col-lg-8">
                  <Link style={{ textDecoration: "none" }} to={
                    {
                      pathname: "/swatch",
                      state: {
                        Data: slider[2],
                      },
                    }
                  }>
                    <img style={{ borderRadius: "10px" }} src={slider[2].img} className="d-block w-100" alt="..." />
                  </Link>
                </div>
              </div>

            </div>

            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <h1 className='non mt-3 text-white'> <strong>{slider[3].title}</strong></h1>
                  <p className="non card-text mb-0 py-1" style={{ color: "#838991", fontSize: "18px" }}>{slider[3].text}</p>
                  <div className="non btn-group mt-3" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Trending</button>
                    <button type="button" className="btn btn-secondary py-0 mx-1" style={{ backgroundColor: "rgb(40,46,61)", color: "#b6bbc0", fontSize: "12px" }}>Recommanded</button>
                  </div>
                  <Link style={{ textDecoration: "none" }} to={
                    {
                      pathname: "/swatch",
                      state: {
                        Data: slider[3],
                      },
                    }
                  }>
                    <div className='pt-4'>

                      <img className='play' src={play} alt="" style={{ maxWidth: "65px", maxHeight: "65px" }} /><span className='px-3' style={{ color: "#ffffff", fontSize: "18px" }}>Play</span>
                    </div>
                  </Link>
                </div>
                <div className="col-12 col-lg-8">
                  <Link style={{ textDecoration: "none" }} to={
                    {
                      pathname: "/swatch",
                      state: {
                        Data: slider[3],
                      },
                    }
                  }>
                    <img style={{ borderRadius: "10px" }} src={slider[3].img} className="d-block w-100" alt="..." />
                   
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='row p-4'>
            <div className="carousel-indicators col-2 mx-0" >
              <button style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active dot" aria-current="true" aria-label="Slide 1"></button>
              <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button className='dot' style={{ maxWidth: "10px", height: "10px", borderRadius: "50%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="col-10"></div>
          </div>
          <button className="carousel-control-prev" style={{ maxWidth: "5%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " style={{ maxWidth: "5%" }} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </Toolbar>

  )
}
const slider = [{
  id: 1,
  img: "https://ap2-prod-images.disco-api.com/2021/12/13/6f716f6a-e48b-4931-94d7-14dfeb1fc05a.jpeg?bf=0&f=jpg&p=true&q=85&w=700",
  iframe: "https://www.youtube.com/embed/WBqoJVEyJPU",
  prime: true,
  newstatus: true,
  title: "Say Yes To The Dress India",
  text: "16 Indian brides-to-be hunt for their perfect dress with family & top talent.",
},
{
  id: 2,
  img: "https://ap2-prod-images.disco-api.com/2020/12/31/63e0eb60-dac7-4ea6-99fd-36127d7d8a84.jpeg?bf=0&f=jpg&p=true&q=85&w=1600",
  iframe: "https://www.youtube.com/embed/HRMt1bYTaDY",
  prime: true,
  newstatus: true,
  title: "Top Gear ft. Clarkson, Hammond, May",
  text: "Top Gear irreverently celebrates everything that's brilliant about cars."
},
{
  id: 3,
  img: "https://ap2-prod-images.disco-api.com/2021/12/03/7dae3d74-6fd6-40af-a442-fc9db50235a0.jpeg?bf=0&f=jpg&p=true&q=85&w=1000",
  iframe: "https://www.youtube.com/embed/9szKlUPS42I",
  prime: true,
  newstatus: true,
  title: "Family Karma",
  text: 'The lives of Indian-American friends and their families are chronicled.'
},
{
  id: 4,
  img: "https://ap2-prod-images.disco-api.com/2020/03/03/0b5e031c-2106-4175-bc35-110de31689c7.jpeg?bf=0&f=jpg&p=true&q=85&w=1600",
  iframe: "https://www.youtube.com/embed/WKLDQz96VG0",
  prime: false,
  newstatus: true,
  title: "Breaking Point: Indian Submariners",
  text: "The training it takes to become a submariner is revealed."
}]
export default Carosule