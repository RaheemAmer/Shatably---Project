import React from "react";
import { Navigate } from "react-router-dom";
import './register.css'

const emailValidator = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const usernameValidator = /^[a-zA-Z0-9][a-zA-Z0-9_]*[a-zA-Z0-9](?<![-?\d+\\.?\d*$]{6,}.*)$/;


class FormComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            emailAddress: "",
            password: "",
            passwordConfirmation: "",
            firstNameError: "",
            userNameError: "",
            emailAddressError: "",
            passwordError: "",
            passwordConfirmationError: "",
            isFormSubmitted: false,
            redirect: null
        };


        this.handleChangeCall = this.handleChange.bind(this);
        // this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateFirstName = this.validateFirstName.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.validateEmailAddress = this.validateEmailAddress.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
            this
        );
        this.validateField = this.validateField.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

        return;
    }

    handleBlur(event) {
        const { name } = event.target;

        this.validateField(name);
        return;
    }

    handleSubmit(event) {
        event.preventDefault();
        let formFields = [
            "firstName",
            "lastName",
            "userName",
            "emailAddress",
            "password",
            "passwordConfirmation"
        ];
        let isValid = true;
        formFields.forEach(field => {
            isValid = this.validateField(field) && isValid;
        });

        if (isValid) {
            this.setState({ isFormSubmitted: true });
            this.setState({ Navigate: "/" })
        }
        else this.setState({ isFormSubmitted: false });

        return this.state.isFormSubmitted;
    }

    validateField(name) {
        let isValid = false;

        if (name === "firstName") isValid = this.validateFirstName();
        else if (name === "lastName") isValid = this.validateLastName();
        else if (name === "emailAddress") isValid = this.validateEmailAddress();
        else if (name === "userName") isValid = this.validateUserName();
        else if (name === "password") isValid = this.validatePassword();
        else if (name === "passwordConfirmation")
            isValid = this.validatePasswordConfirmation();
        return isValid;
    }

    validateFirstName() {
        let firstNameError = "";
        const value = this.state.firstName;
        if (value.trim() === "") {
            firstNameError = "First Name is required";
        }

        this.setState({
            firstNameError
        });
        return firstNameError === "";
    }

    validateLastName() {
        let lastNameError = "";
        const value = this.state.lastName;
        if (value.trim() === "") {
            lastNameError = "Last Name is required";
        }

        this.setState({
            lastNameError
        });
        return lastNameError === "";
    }

    validateUserName() {
        let userNameError = "";
        const value = this.state.userName;
        if (value.trim() === "") {
            userNameError = "User Name is required";
        }
        //usernameValidator
        else if (!usernameValidator.test(value))
            userNameError = "UserName is not valid and must be in right form";
        this.setState({
            userNameError
        });
        return userNameError === "";
    }

    validateEmailAddress() {
        let emailAddressError = "";
        const value = this.state.emailAddress;
        if (value.trim === "")
            emailAddressError = "Email Address is required";
        else if (!emailValidator.test(value))
            emailAddressError = "Email is not valid";
        this.setState({
            emailAddressError
        });
        return emailAddressError === "";
    }

    validatePassword() {
        let passwordError = "";
        const value = this.state.password;
        if (value.trim === "")
            passwordError = "Password is required";
        else if (!passwordValidator.test(value))
            passwordError =
                "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

        this.setState({
            passwordError
        });
        return passwordError === "";
    }

    validatePasswordConfirmation() {
        let passwordConfirmationError = "";
        if (this.state.password !== this.state.passwordConfirmation)
            passwordConfirmationError = "Password does not match Confirmation";

        this.setState({
            passwordConfirmationError
        });
        return passwordConfirmationError === "";
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }
        return (
            <div className="container border border-4  shadow d-flex flex-column align-items-center w-50 p-2" >
                <h3 className="p-3">SignUp</h3>

                {this.state.isFormSubmitted ? (
                    <div className="details">
                        <h3 className="text-success">Thanks for signing up, This is your details That you entered:</h3>
                        <div className="container text-center border border-2 h4">
                            <br />
                            <div>First Name: {this.state.firstName}</div>
                            <div>Last Name: {this.state.lastName}</div>
                            <div>User_Name: {this.state.userName}</div>
                            <div>Email Address: {this.state.emailAddress}</div>
                            <br />
                        </div>
                    </div>
                ) : (
                    <div className="text-center w-50">
                        <form onSubmit={this.handleSubmit} >
                            <input
                                className="form-control m-2"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChangeCall}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />

                            {this.state.firstNameError && (
                                <div className="errorMsg">{this.state.firstNameError}</div>
                            )}

                            <input
                                className="form-control m-2"

                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChangeCall}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />

                            {this.state.lastNameError && (
                                <div className="errorMsg">{this.state.lastNameError}</div>
                            )}

                            <input
                                className="form-control m-2"
                                type="text"
                                placeholder="User Name"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleChangeCall}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />

                            {this.state.userNameError && (
                                <div className="errorMsg">{this.state.userNameError}</div>
                            )}

                            <input
                                className="form-control m-2"

                                type="email"
                                placeholder="Email Address"
                                name="emailAddress"
                                value={this.state.emailAddress}
                                onChange={this.handleChangeCall}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />

                            {this.state.emailAddressError && (
                                <div className="errorMsg">{this.state.emailAddressError}</div>
                            )}
                            <input
                                className="form-control m-2"

                                type="password"
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChangeCall}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />

                            {this.state.passwordError && (
                                <div className="errorMsg">{this.state.passwordError}</div>
                            )}

                            <input
                                className="form-control m-2"

                                type="password"
                                placeholder="Confirm Password"
                                name="passwordConfirmation"
                                value={this.state.passwordConfirmation}
                                onChange={this.handleChangeCall}
                                onBlur={this.handleBlur}
                                autoComplete="off"
                            />

                            {this.state.passwordConfirmationError && (
                                <div className="errorMsg">
                                    {this.state.passwordConfirmationError}
                                </div>
                            )}
                            <button className="btn btn-success bg-success">Signup</button>
                        </form>
                    </div>
                )
                }
            </div>
        );
    }
}
export default FormComponent;