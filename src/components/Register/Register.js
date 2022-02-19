import React, { useState } from "react";
import {
    emailValidator,
    passwordValidator,
    usernameValidator,
    nameValidator,
} from "./Register-regex";

import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const SignUp = () => {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        username: "",
        name: "",
        passConfirmation: ""
    });

    const [formValuesErrors, setFormValuesErrors] = useState({
        emailErr: null,
        passErr: null,
        usernameErr: null,
        nameErr: null,
        passConfirmationError: null
    });

    const handleFormChange = (event) => {
        switch (event.target.name) {
            case "name":
                setFormValues({
                    ...formValues,
                    name: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    nameErr:
                        event.target.value.length === 0
                            ? "This field is required"
                            : nameValidator.test(event.target.value) === false
                                ? "name must be in right format to be a real name"
                                : null,
                });
                break;

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
                            : emailValidator.test(event.target.value) === false
                                ? "Email must be like that (UUUUUWWWW@Example.com)"
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
                            : passwordValidator.test(event.target.value) === false
                                ? "Password must be like that (Pass12345)"
                                : null,
                });
                break;

            case "passConfirmation":
                setFormValues({
                    ...formValues,
                    passConfirmation: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    passConfirmationError:
                        event.target.value.length === 0
                            ? "This field is required"
                            : (formValues.passConfirmation === formValues.password) === true
                                ? "Password Confirm doesn't Match"
                                : null,
                });
                break;

            case "username":
                setFormValues({
                    ...formValues,
                    username: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    usernameErr:
                        event.target.value.length === 0
                            ? "This field is required"
                            : usernameValidator.test(event.target.value) === false
                                ? "That is not a right format for the username"
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
            !formValuesErrors.passErr &&
            !formValuesErrors.usernameErr &&
            !formValuesErrors.nameErr &&
            !formValuesErrors.passConfirmationError
        ) {
            console.log(formValues);
            console.log("Registered Successfully ");
        }
    };
    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const marginTop = { marginTop: 5 };
    return (
        <div className="SignUp text-center">
            <Grid>
                <Paper
                    elevation={20}
                    style={paperStyle}
                >
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant="caption" gutterBottom>
                            Please fill this form to create an account !
                        </Typography>
                    </Grid>
                    <form onSubmit={(e) => handleSubmitForm(e)}>
                        <TextField
                            value={formValues.name}
                            onChange={(e) => handleFormChange(e)}
                            name="name"
                            fullWidth
                            label="Name"
                            placeholder="Enter your name"
                        />
                        {formValuesErrors.nameErr && (
                            <div className="form-text text-danger">
                                {formValuesErrors.nameErr}
                            </div>
                        )}
                        <TextField
                            value={formValues.email}
                            onChange={(e) => handleFormChange(e)}
                            name="email"
                            fullWidth
                            label="Email"
                            placeholder="Enter your email"
                        />
                        {formValuesErrors.emailErr && (
                            <div className="form-text text-danger">
                                {formValuesErrors.emailErr}
                            </div>
                        )}
                        <TextField
                            value={formValues.username}
                            onChange={(e) => handleFormChange(e)}
                            name="username"
                            fullWidth
                            label="Username"
                            placeholder="Enter your username"
                        />
                        {formValuesErrors.usernameErr && (
                            <div className="form-text text-danger">
                                {formValuesErrors.usernameErr}
                            </div>
                        )}
                        <br /> <br />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                required
                                aria-label="gender"
                                name="gender"
                                style={{ display: "initial" }}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Password"
                            placeholder="Enter your password"
                            value={formValues.password}
                            onChange={(e) => handleFormChange(e)}
                            name="password"
                            type="password"
                        />
                        {formValuesErrors.passErr && (
                            <div className="form-text text-danger">
                                {formValuesErrors.passErr}
                            </div>
                        )}
                        <TextField
                            value={formValues.passConfirmation}
                            onChange={(e) => handleFormChange(e)}
                            name="passConfirmation"
                            type="password"
                            fullWidth
                            label="Confirm Password"
                            placeholder="Confirm your password"
                        />
                        {formValuesErrors.passConfirmationError && (
                            <div className="form-text text-danger">
                                {formValuesErrors.passConfirmationError}
                            </div>
                        )}
                        <br /> <br />
                        <Button
                            disabled={
                                formValuesErrors.emailErr ||
                                formValuesErrors.passErr ||
                                formValuesErrors.usernameErr ||
                                formValuesErrors.nameErr ||
                                formValuesErrors.passConfirmationError ||
                                (formValues.email && formValues.name && formValues.password && formValues.passConfirmation && formValues.username) === ""
                            }
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
};

export default SignUp;
