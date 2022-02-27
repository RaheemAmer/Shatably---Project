import React from 'react';
import { Link } from 'react-router-dom';
import './choose.css';
import { Button } from 'react-bootstrap';
// import { FaUserAlt, FaBuilding } from 'react-icons/fa';

export default function Choose() {
    return (
        <div className="App m-5">

                    <div className="col-lg-12">
                        <hr />
                        <h1 className="title text-center">Are you a Client or a Company?</h1>
                        <hr />
                    </div>            
            <Link to={'/user_login'}>
                <Button className='m-5'variant="red" size="xxl" >
                    <img src="/user.jpg" alt="" width={300} height={300}/>
                </Button>
            </Link>{' '}

            <Link to={'/company_login'}>
                <Button className='m-5' variant="red" size="xxl">
                    {/* <FaBuilding></FaBuilding> <br />Company */}
                    <img src="/company.jpg" alt="" width={300} height={300}/>
                </Button>
            </Link>{' '}
        </div >
    )
}