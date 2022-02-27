import * as React from "react";
import "./settingsPageStyle.css";
import { Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Contact from "./components/Contact";
import Privacy from './components/Privacy';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function SettingsPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   var tabsView = "vertical"
  //   window.addEventListener('resize', function(event){
  //     if (window.innerWidth < 900) {
  //       tabsView = ""
  //     }else{
  //       tabsView = "dsd"
  //     }
  //     console.log(tabsView);
  // });
  return (
    <>
      <Container className='top_60'>
        <Row className='row'>
          <Col className='col-lg-3 col-md-4'>
            <div className='profile'>
              <Box
                className='css-1n3h4wo'
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  height: 224,
                }}
              >
                <Grid container className='section graybg p_50'>
                  <Grid container spacing={3} justify={"space-between"}>
                    <Grid item xs={12} sm={12} md={12}>
                      <Tabs
                        orientation='vertical'
                        variant='scrollable'
                        value={value}
                        onChange={handleChange}
                        aria-label='Vertical tabs example'
                      >
                        <Tab label='User Information' {...a11yProps(0)} />
                        <Tab label='Change Password' {...a11yProps(1)} />
                        <Tab label='Item Three' {...a11yProps(2)} />
                        <Tab label='Item Four' {...a11yProps(3)} />
                        <Tab label='Item Five' {...a11yProps(4)} />
                        <Tab label='Item Six' {...a11yProps(5)} />
                        <Tab label='Item Seven' {...a11yProps(6)} />
                      </Tabs>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </Col>
          <div className='col-lg-9 col-md-8 tab-container'>
            <div className='content'>
              <TabPanel value={value} index={0}>
                <Contact />
              </TabPanel>
              <TabPanel value={value} index={1}>
              <Privacy />
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel>
              <TabPanel value={value} index={4}>
                Item Five
              </TabPanel>
              <TabPanel value={value} index={5}>
                Item Six
              </TabPanel>
              <TabPanel value={value} index={6}>
                Item Seven
              </TabPanel>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
// ----------------------------------------------------------------
