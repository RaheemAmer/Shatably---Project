import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import {
  Paper,
  Typography,
  Icon,
  Rating,
  TextField,
  Button,
} from "@mui/material";
// import { Grid } from "@mui/core";

const Portfolio = props => {
  return (
    <Grid container className='section pb_45 pt_45'>
      <Grid item className='section_title mb-4'>
        <span></span>
        <h2>Some of our Works</h2>
      </Grid>

      <Grid item xs={12} className=''>
        <Grid container spacing={2} className=''>
          {props.Jobs.map(job => (
            <Grid item lg={4} md={6} sm={12}>
              <Card className='job-card'>
                <CardActionArea>
                  <figure className='card_image'>
                    <img src={`${job.image}`} alt='' />
                  </figure>
                  <CardContent>
                    <Typography className='job-card-title'>
                        <h3 className='fw-bold'>{job.title}</h3>
                    </Typography>
                    <Typography
                      variant='body2'
                      className='job-card-description'
                    >
                      <p className='fs-7'>{job.description}</p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
