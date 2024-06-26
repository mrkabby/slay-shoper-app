import React from 'react';
import SlayPhoto from "../../assets/images/yawAddo.jpg"
import Navbar from '../../component/navbar';
import Footer from '../../component/footer';
import {  useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate()
    return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-[#171717] dark:bg-zinc-800">
    
    
        <div className="flex flex-wrap items-center pl-14">
          <div className="w-full md:w-1/2 text-left p-4">
            <h1 className="text-5xl font-bold text-white dark:text-white mb-3">
              Greetings <br /> you just a <span className='text-red-500'>SLAY</span> away,<br />Dear Friends
            </h1>
            <p className=" text-white dark:text-white text-lg mb-6">
              Find the perfect outfit for everyone on your list this year, no matter what your
              budget is.
            </p>
            
            <button className="bg-red-500 hover:bg-red-700 text-white text-4xl font-bold py-4 px-6 rounded" onClick={()=>navigate(`/store`)}>
              Shop Now
            </button>
            
          </div>
          <div className="w-full  md:w-1/2 p-4">
            <img className="w-auto " src={SlayPhoto} alt="Slay Img" />
          </div>
        </div>
      </div>
    
    <Footer />
    </>
  );
};

export default LandingPage;
