import React from "react";
import { TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Grid } from "@mui/material";
import CustomButton from "./../../contractorProfile/components/Button/Button";

const Contact = props => {
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
                  <h2>User Name :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth name='name' label='Name' />
                </Grid>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2>User Email :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth name='email' label='E-mail' />
                </Grid>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2>Phone :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth name='Phone' label='Phone' />
                </Grid>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2>Address :</h2>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id='demo-simple-select-label'>
                        Address
                      </InputLabel>
                      <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={Address}
                        label='Address'
                        onChange={handleChange}
                      >
                        <MenuItem value={"Cairo"}>Cairo</MenuItem>
                        <MenuItem value={"Obour"}>Obour</MenuItem>
                        <MenuItem value={"Menia"}>Menia</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item className='section_title top_30'>
                  <span></span>
                  <h2>About Me :</h2>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label='About Me' multiline rows={4} />
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

export default Contact;
