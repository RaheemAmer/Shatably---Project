import React from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Grid } from "@mui/material";
import CustomButton from "./../../contractorProfile/components/Button/Button";

export default function Privacy(props) {
  const [Address, setAddress] = React.useState("");

  const handleChange = event => {
    setAddress(event.target.value);
  };

  return (
    <>
      <Grid container className='section pb_50' spacing='10'>
        <Grid item xs={12} lg={12}>
          <Grid container>
            <Grid item className='top_30'>
              <Grid container spacing={2}>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2> Change Password :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField className="mb-4" fullWidth name='email' label='Your E-mail' />
                  <TextField id="outlined-password-input" className="mb-4" fullWidth name='Password' label="Current Password" type="password" />
                  <TextField id="outlined-password-input" className="mb-4" fullWidth name='New Password' label="New Password" type="password" />
                  <TextField id="outlined-password-input" className="mb-4" fullWidth name='Password' label="Repeat New Password" type="password" />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text={"Update Data"} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

