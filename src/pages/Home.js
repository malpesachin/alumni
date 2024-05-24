import React, {useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Cards from "../components/Cards";
import Footer from '../components/Footer/Footer'
import Car1 from '../images/carousel 1.webp'
import Car2 from '../images/carousel 2.webp'
import Car3 from '../images/carousel 3.webp'
import Gaurav from '../images/Gaurav Kaushik.jpg'
import Arushika from '../images/Arushika Shukla.jpg'
import Ashish from '../images/Ashish Agarwal.jpg'
import { useUserAuthContext } from '../context/UserContext';
import Platform from '../components/HomePageComponents/Platform'
import HomeExtras from '../components/HomePageComponents/HomeExtras'
import ExtraTabs from '../components/HomePageComponents/ExtraTabs'
import FinalHeader from '../components/Header/FinalHeader';
import EventGallary from "../pages/EventGallary"
function Home() {
  const {setcurrentPage} = useUserAuthContext();
  useEffect(() => {
    setcurrentPage(window.location.pathname);
  }, [])
  
  return (
    <div className='relative'>
      <FinalHeader></FinalHeader>
      <div className="w-11/12 mx-auto my-[5.3rem] ">
        <Carousel className="h-[30rem]">
          <Carousel.Item className="h-[30rem]">
            <img
              className="d-block w-100 h-[30rem]"
              src={Car1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Aerial View (F.E.T)</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='h-[30rem]'>
            <img
              className="d-block w-100 h-[30rem]"
              src={Car2}
              alt="Second slide"
            />

           
          </Carousel.Item>
          <Carousel.Item className='h-[30rem]'>
            <img
              className="d-block w-100 h-[30rem]"
              src={Car3}
              alt="Third slide"
            />

            
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='w-11/12 mx-auto'>
        <span className='flex justify-center self-center text-3xl font-semibold'>Notable Alumni</span>
        <div className='flex flex-wrap justify-center self-center my-5 gap-5'>
          <Cards src={Gaurav} desc="Senior Software Engineer at Microsoft" title="Er. Gaurav Kaushik"></Cards>  
          <Cards src={Arushika} title="Er.Arushika Shukla" desc="Lead Dispute Analyst at American Express"></Cards>
          <Cards src={Ashish} title="Er.Ashish Agarwal" desc="Senior Engineering Manager at American Express"></Cards>
        </div>
      </div>
      <Platform />
      <HomeExtras />
      <ExtraTabs />
      <EventGallary />
      <Footer></Footer>
    </div>
  )
}

export default Home;