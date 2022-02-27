/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Proposal (){
    return (
        <div>
            <br></br>
            <br></br>
            <div class="container">
                <div class="d-style btn btn-brc-tp border-2 bgc-white btn-outline-purple btn-h-outline-purple btn-a-outline-purple w-100 my-2 py-3 shadow-sm">
                    <div class="row align-items-center">
                        <div class="list-unstyled mb-0 col-12 col-md-8 text-dark-l1 text-90 text-left my-4 my-md-0">
                            <h2> Job name : .... </h2>
                            <div class="col-12 col-md-4 text-center">
                                <a href="#" class="f-n-hover btn btn-warning btn-raised px-4 py-25 w-75 text-600 m-3">view Job Details</a>


                            </div>

                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="list-unstyled mb-0 col-12 col-md-8 text-dark-l1 text-90 text-left my-4 my-md-0">
                            <form>

                                <div class="mb-3">

                                    <label for="exampleFormControlTextarea1" class="form-label">    <span>
                                        <span class="text-110">           <h4 class="pt-3 text-170 text-600 text-purple-d1 letter-spacing">
                                            Write your proposal     :          </h4></span>
                                    </span></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <label for="exampleFormControlbudget" class="form-label">    <span>
                                        <span class="text-110">           <h4 class="pt-3 text-170 text-600 text-purple-d1 letter-spacing">
                                            Budget    :          </h4></span>
                                    </span></label>
                                    <input class="form-control" id="exampleFormControlbudget" rows="3"></input>
                                    <label for="exampleFormControltime" class="form-label">    <span>
                                        <span class="text-110">           <h4 class="pt-3 text-170 text-600 text-purple-d1 letter-spacing">
                                            estimated time    :          </h4></span>
                                    </span></label>
                                    <input class="form-control" id="exampleFormControltime" rows="3"></input>

                                </div>
                                <div class="col-12 col-md-4 text-center">
                                    <a href="#" class="f-n-hover btn btn-warning btn-raised px-4 py-25 w-75 text-600 m-3">Submit the Proposal</a>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
