import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                p: 1,
                m: 1,
                borderRadius: 1,
                fontSize: '0.875rem',
                fontWeight: '800',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default function HeadOfProfile() {
    return (
        <div style={{ width: '100%' }}>
            <br></br>
            <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', border: 0 }}>
<Item>
<h2>
                        Better market your expertise with specialized profiles
                    </h2>
                    <p>
                        Specialized profiles allow you to display more specific skills, deliverables, and more – and help power better search results and job recommendations.<span style={{ color: 'green' }}> Learn more</span>
                    </p>
                    <Button variant="contained" disableElevation>
                        Add a Job</Button>            
</Item>
           
            </Box>
                
        </div>
    );
}
