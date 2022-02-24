import React from 'react';
import { Link } from 'react-router-dom';
import './choose.css';
import { Button } from 'react-bootstrap';
import { FaUserAlt, FaBuilding } from 'react-icons/fa';

export default function Choose() {
    return (
        <div className="App m-5">
            <Link to={'/user_login'}>
                <Button className='m-5' variant="danger" size="xxl">
                    <FaUserAlt></FaUserAlt > <br /> Client
                </Button>
            </Link>{' '}
            <Link to={'/company_login'}>
                <Button className='m-5' variant="success" size="xxl">
                    <FaBuilding></FaBuilding> <br />Company
                </Button>
            </Link>{' '}
        </div >
    )
}