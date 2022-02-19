import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { validEmail, validPassword } from "./regex.js";
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
    Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Login = () => {
    const navigate = useNavigate();
    console.log(navigate);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const [formValuesErrors, setFormValuesErrors] = useState({
        emailErr: null,
        passErr: null,
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
                            : validEmail.test(event.target.value) === false
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
                            : validPassword.test(event.target.value) === false
                                ? "Password must be like that (Pass12345)"
                                : null,
                });
                break;

            default:
                break;
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!formValuesErrors.emailErr && !formValuesErrors.passErr) {
            console.log(formValues);
            console.log("LoggedIN Successfully ");
            navigate('/');
        }
    };

    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "20px auto",
    };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const btnStyle = { margin: "8px 0" };
    return (
        <div className="Login text-center">
            <Grid>
                <Paper
                    elevation={10}
                    style={paperStyle}
                >
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>

                    <form onSubmit={(e) => handleSubmitForm(e)}>
                        <TextField
                            label="Email"
                            placeholder="Enter Email"
                            fullWidth
                            required
                            value={formValues.email}
                            onChange={(e) => handleFormChange(e)}
                            name="email"
                        />
                        {formValuesErrors.emailErr && (
                            <div id="usernameHelp" className="form-text text-danger">
                                {formValuesErrors.emailErr}
                            </div>
                        )}
                        <TextField
                            label="Password"
                            placeholder="Enter password"
                            type="password"
                            fullWidth
                            required
                            value={formValues.password}
                            onChange={(e) => handleFormChange(e)}
                            name="password"
                        />
                        {formValuesErrors.passErr && (
                            <div className="form-text text-danger">
                                {formValuesErrors.passErr}
                            </div>
                        )}
                        <FormControlLabel
                            control={<Checkbox name="checkedB" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            style={btnStyle}
                            fullWidth
                            disabled={
                                formValuesErrors.emailErr ||
                                formValuesErrors.passErr ||
                                (formValues.email && formValues.password) == ""
                            }
                        >
                            Sign in
                        </Button>
                    </form>
                    <Typography>
                        {" "}
                        <Link href="#"> Forgot password ?</Link>
                    </Typography>
                    <br />
                    <Typography>
                        {" "}
                        Do you have an account ? <br />
                        <Link href="/signup">Sign Up</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div >
    );
};

export default Login;
