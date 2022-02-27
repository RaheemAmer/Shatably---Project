import React from 'react';
import { Link } from 'react-router-dom';
import './choose.css';
import { Button } from 'react-bootstrap';
import { FaUserAlt, FaBuilding } from 'react-icons/fa';
import Foooter from '../Footer/Footer'

export default function Choose() {
    return (
        <>
            <div className="Choose m-5">
                <div className="col-lg-12">
                    <hr />
                    <h1 className="title text-center">Are you a Client or a Company?</h1>
                    <hr />
                </div>

                <Link to={'/user_login'}>
                    <Button className='btn-1 m-5 ' >
                        {/* <img src="/user.jpg" alt="" width={300} height={300}/> */}
                        <FaUserAlt></FaUserAlt> <br /> User
                    </Button>
                </Link>{' '}
                <Link to={'/company_login'}>
                    <Button className='m-5 btn-2'>
                        {/* <FaBuilding></FaBuilding> <br />Company */}
                        {/* <img src="/company.jpg" alt="" width={300} height={300} /> */}
                        <FaBuilding></FaBuilding> <br /> Company
                    </Button>
                </Link>{' '}
            </div >
            <Foooter />
        </>
    )
}