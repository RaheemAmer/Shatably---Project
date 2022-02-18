import React, { useState } from "react";
import { validEmail, validPassword } from './regex.js';
import './login.css'



export default function LoginUser() {

    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const [formValuesErrors, setFormValuesErrors] = useState({
        emailErr: null,
        passErr: null
    });

    const handleFormChange = (event) => {
        switch (event.target.name) {
            case "email":
                setFormValues({
                    ...formValues,
                    email: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    emailErr:
                        event.target.value.length === 0
                            ? "This field is required"
                            : validEmail.test(event.target.value) === false ? "Email must be like that (UUUUUWWWW@Example.com)"
                                : null,
                });
                break;

            case "password":
                setFormValues({
                    ...formValues,
                    password: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    passErr:
                        event.target.value.length === 0
                            ? "This field is required"
                            : validPassword.test(event.target.value) === false ? "Password must be like that (Pass12345)"
                                : null,
                });
                break;

            default:
                break;
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (
            !formValuesErrors.emailErr &&
            !formValuesErrors.passErr
        ) {
            console.log(formValues);
            console.log("LoggedIN Successfully ");
            
        }
    };



    return (
        <>
            <br/>
            <div className="container text-center d-flex flex-column align-items-center border border-2 w-25 shadow">
                <form className="mb-3" onSubmit={(e) => handleSubmitForm(e)}>
                    <h1 className=" text-center">Login</h1>
                    <div className="mb-3">
                        <label htmlFor="usernameInput" className="form-label">
                            Email
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            value={formValues.email}
                            onChange={(e) => handleFormChange(e)}
                            name="email"
                        />
                        {/* {emailErr && <p>Your email is invalid</p>} */}
                        {formValuesErrors.emailErr && (
                            <div id="usernameHelp" className="form-text text-danger">
                                {formValuesErrors.emailErr}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="PassINput" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            value={formValues.password}
                            onChange={(e) => handleFormChange(e)}
                            name="password"
                        />
                        {/* {pwdError && <p>Your password is invalid</p>} */}
                        {formValuesErrors.passErr && (
                            <div id="usernameHelp" className="form-text text-danger">
                                {formValuesErrors.passErr}
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success"
                        disabled={
                            formValuesErrors.emailErr ||
                            formValuesErrors.passErr
                        }
                    >
                        LogIn
                    </button>
                </form >
            </div >
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </>


    );
}