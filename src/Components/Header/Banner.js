import React from 'react';
import s1 from '../../Video/s1.png';
import s2 from '../../Video/s6.webp';
import s3 from '../../Video/s3.jpg';
import s4 from '../../Video/s4.png';
import s5 from '../../Video/s5.webp';


const Banner = () => {
    return (
    <div className='w-100 h-100  py-28'>
  <div id="Clouds">
  <div className="Cloud Foreground"></div>
  <div className="Cloud Background"></div>
  <div className="Cloud Foreground"></div>
  <div className="Cloud Background"></div>
  <div className="Cloud Foreground"></div>
  <div className="Cloud Background"></div>
  <div className="Cloud Background"></div>
  <div className="Cloud Foreground"></div>
  <div className="Cloud Background"></div>
  <div className="Cloud Background"></div>

  
</div>
<div id= "crossfade" className="w-100 h-96 ">
     <img className = "cone  " src ={s1} alt = "png"/>
     <img className = "ctwo " src = {s2} alt = "png"/>
     <img className = "cthree " src = {s3} alt = "png"/>
     <img className = "cfour  " src = {s4} alt = "png"/>
     <img className = "cfive " src = {s5} alt = "png"/>
</div>

    </div>

        
        // <div>
        //     <header className="bg-white shadow">
        //             <video className='videoTag w-screen h-90' autoPlay loop muted>
        //                 <source src={sample} type='video/mp4' />
        //             </video>
        //     </header>
        // </div>
    );
};

export default Banner;