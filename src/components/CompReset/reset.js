import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { validEmail, validPassword } from "./regex.js";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
} from "@material-ui/core";
import LockResetIcon from '@mui/icons-material/LockReset';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const MySwal = withReactContent(Swal);
const Reset = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        password: "",
        passwordConfirm: ""
    });

    const [formValuesErrors, setFormValuesErrors] = useState({
        passErr: null,
        passwordConfirmErr: null
    });

    const handleFormChange = (event) => {
        switch (event.target.name) {
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
            case "passwordConfirm":
                setFormValues({
                    ...formValues,
                    passwordConfirm: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    passwordConfirmErr:
                        event.target.value.length === 0
                            ? "This field is required"
                            : (formValues.passwordConfirm === formValues.password) === true
                                ? "Password Confirm doesn't Match"
                                : null,
                });
                break;

            default:
                break;
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!formValuesErrors.passErr && !formValuesErrors.passwordConfirmErr) {
            axios
                .patch(`http://localhost:3000/api/v1/contractors/resetPassword/3de2523df49a063c8eb75abaf5fb2db00eb6941f0688bcfad67a35642ccfa2bf`, formValues)
                .then((response) => {
                    console.log(response);
                    navigate('/company_login');
                    MySwal.fire(`Password Rested Successfully,Please Login With New Password`);
                }).catch((err) => {
                    console.log(err);
                    MySwal.fire(`Invalid Password , Please Enter Your Email and Password in Right Way`);
                });
        }
    };

    const paperStyle = {
        padding: 20,
        height: "60vh",
        width: 280,
        margin: "20px auto",
    };
    const avatarStyle = { backgroundColor: "#1bbd7e" };
    const btnStyle = { margin: "8px 0" };
    return (
        <div className="text-center">
            <Grid>
                <Paper
                    elevation={10}
                    style={paperStyle}
                >
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <LockResetIcon />
                        </Avatar>
                        <h3>Reset Password</h3>
                    </Grid>

                    <form onSubmit={(e) => handleSubmitForm(e)}>

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
                        <TextField
                            value={formValues.passwordConfirm}
                            onChange={(e) => handleFormChange(e)}
                            name="passwordConfirm"
                            type="password"
                            fullWidth
                            label="Confirm Password"
                            placeholder="Confirm your password"
                        />
                        {formValuesErrors.passwordConfirmErr && (
                            <div className="form-text text-danger">
                                {formValuesErrors.passwordConfirmErr}
                            </div>
                        )}
                        <br /> <br />
                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                            style={btnStyle}
                            fullWidth
                            disabled={
                                formValuesErrors.passErr ||
                                formValuesErrors.passwordConfirmErr ||
                                (formValues.password && formValues.passwordConfirm) === ""
                            }
                        >
                            Reset
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div >
    );
};

export default Reset;
