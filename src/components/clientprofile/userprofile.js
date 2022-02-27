/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import './userprofile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Foooter from '../Footer/Footer'


export default function UserProfile() {
  return (
    <>
      <div class="container">
        <br></br>
        <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                    <div class="mt-3">
                      <h4>Ahmed A.</h4>
                      <p class="text-secondary mb-1"></p>
                      <p class="text-muted font-size-sm">Egypt, Cairo</p>
                      {/* <button class="btn btn-primary">Follow</button> */}
                      <button class="btn btn-outline-primary">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Ahmed A.
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (+20) 816-9029
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (+20) 380-4539
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Egypt,Cairo
                    </div>
                  </div>

                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Number of Projects</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      4
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " href="#">Edit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foooter />
    </>

  );
}
