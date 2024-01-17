import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner2 = () => {
    
    useEffect(() => {
        AOS.init({duration:"1000"})
    },[])
    return (
        <div className=''  data-aos="fade-up"
        data-aos-duration="2000">
            <div className=''>
                <img className='w-full opacity-70' src="https://i.ibb.co/L9gjSbJ/1-Svz-Kct-RCi8bw-B0-QPd-OZk-BP0p-Rhs-Oq-Zpl0wjs6y0.png" alt="" />
            <Link to='signin' className='btn md:p-10  btn-neutral text-[30px] md:pb-16 absolute top-[60%] left-[42%] drop-shadow-xl border-red-500 '>Let’s Explore</Link>
            </div>
        </div>
    );
};

export default Banner2;