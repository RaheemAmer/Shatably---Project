import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import './slideshow.css';

export default function SlideShow() {
    return (
        // <div className="videoBanner">
        //     <div className="videoBanner__info">
        //         <h1>Hire the best Companies for any Design you want , online.</h1>
        //         <h4>
        //             Millions of people use ( Shatably.com ) to turn their designs into reality.
        //         </h4>
        //         <button className="videoBanner__info--first">
        //             Hire a Company
        //         </button>
        //         <br />
        //         <button className="videoBanner__info--second">
        //             Earn Money Decorating
        //         </button>
        //     </div>

        // </div>
        <div className='hero'>
        <div className='content'>
            <h1>Hire the best companies</h1>
            <p className='search-text'> Search the largest selection of luxury high-rise apartments, and luxury homes. </p>
            <form className='search'>

                <div>
                    <input type='text' placeholder='Enter Keyword..' />
                </div>
                <div className='radio'> 
                    <button type='submit'>
                        <AiOutlineSearch className='icon'/>
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}


