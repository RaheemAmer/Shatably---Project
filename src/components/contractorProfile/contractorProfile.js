import React from "react";
import Footer from "../Footer/Footer";
import "./contractorProfile.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
// import Portfolio from "./components/Portfolio";
import resume from "./utils/resume";
// import {Container, Grid} from "@mui/core";
// import { Grid } from "@mui/material";
import { Container, Col, Row } from "react-bootstrap";
import Resume from "./pages/Resume";



export default function ContactorProfile() {
  return (
    <>
      <div className='top_60 container'>
        <Row className='row'>
          <Col className='col-xl-3 col-lg-4 col-md-4 col-sm-12 mb-5'>
            <Profile {...resume} />
          </Col>
          <div className='col-xl-9 col-lg-8 col-md-8 col-sm-12 tab-container'>
            {/* <Header /> */}
            <div className='content'>
              <Resume {...resume} />
            </div>
          </div>
        </Row>
      </div>

      <Footer />
    </>
  );
}
