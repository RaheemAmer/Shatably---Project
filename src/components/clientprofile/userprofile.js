import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import { Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import './userprofile.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// function Item(props) {
//   const { sx, ...other } = props;
//   return (
//     <Box
//       sx={{
//         bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
//         color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
//         border: '1px solid',
//         borderColor: (theme) =>
//           theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
//         p: 1,
//         m: 1,
//         borderRadius: 1,
//         fontSize: '0.875rem',
//         fontWeight: '800',
//         ...sx,
//       }}
//       {...other}
//     />
//   );
// }

// Item.propTypes = {
//   sx: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
//     ),
//     PropTypes.func,
//     PropTypes.object,
//   ]),
// };

export default function UserProfile() {
  return (
    //         <div style={{ width: '100%' }}>
    //             <br></br>
    //             <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', border: 0 }}>
    //          <Item>
    //              <div class="container">
    //                     <div class="row">
    //                         <div class="col">
    //                             <div class="row">
    //                                 <div class="col">
    //                                     <Avatar sx={{ height: '150px', width: '150px' }}>OP</Avatar>
    //                                 </div>
    //                                 <div class="col">
    //                                     <h2> Doaa</h2>

    //                                     <p>    <LocationOnIcon/> Cairo, Egypt</p>
    //                                     <p>Available Now<Button><EditIcon/> </Button></p> 

    //                                     <Button variant="contained" disableElevation>
    //                                         Edit My info</Button>
    //                                 </div>
    //                             </div>

    //                         </div>
    //                         <div class="col">
    //                         </div>
    //                         <div class="col">
    //                             <div class="row-3">
    //                                 <Button variant="contained" disableElevation>
    //                                     Add a Job</Button>
    //                             </div>
    //                             <br></br>
    //                             <div class="row-3">
    //                                 {/* <Button variant="contained" disableElevation>
    //                                     Add a Job</Button> */}
    //                                     No.of current Jobs= 
    //                             </div>
    //                         </div>
    //                         <Box
    //   sx={{
    //     display: 'grid',
    //     gap: 0,
    //     gridTemplateColumns: 'repeat(2, 1fr)',
    //   }}
    // >
    //   {/* <Item>
    //       <h2>
    //           Information
    //       </h2>
    //       <p>hdshdks</p>
    //   </Item>
    //   <Item>
    //   <h2>
    //           work history
    //       </h2>
    //   </Item> */}

    // </Box>
    //                     </div>
    //                 </div>
    //              </Item>  
    //              <Item>
    //       <h2>
    //           Information
    //       </h2>
    //       <p></p>
    //   </Item>
    //   <Item>
    //   <h2>
    //           work history
    //       </h2>
    //   </Item>        
    //             </Box>

    //         </div>
    <div class="container">
      <br></br>
      <div class="main-body">

        <nav aria-label="breadcrumb" class="main-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>

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
                    Ahmed A.                    </div>
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
                    Egypt,Cairo                    </div>
                </div>
                
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Number of Projects</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    4                    </div>
                </div>
                
                <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <a class="btn btn-info " target="__blank" href="">Edit</a>
                  </div>
                </div>
                
              </div>
            </div>

            <div class="row gutters-sm">
              <div class="col-sm-6 mb-3">
                {/* <div class="card h-100">
                  {/* <div class="card-body">
                    <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2"></i> Previous Projects</h6>
                    <small>Required </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Lorem ipsum </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Lorem ipsum </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Lorem ipsum </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Lorem ipsum </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div> */}
                {/* </div> */}
              </div>
              {/* <div class="col-sm-6 mb-3">
                <div class="card h-100">
                  <div class="card-body">
                    <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                    <small>Lorem ipsum </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Lorem ipsum </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: ' 72%' }} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Lorem ipsum </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Lorem ipsum </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: ' 55%' }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <small>Lorem ipsum </small>
                    <div class="progress mb-3" style={{ height: '5px' }}>
                      <div class="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
