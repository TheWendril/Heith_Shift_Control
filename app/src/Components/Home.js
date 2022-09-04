import React from "react";
import wallpaper from '../assets/home_wallpaper.jpg'
import Grid from '@mui/material/Grid';
import { Button, Slider, Box, Typography } from "@mui/material";
import { useState } from "react";
import {Link} from 'react-router-dom'

var PageStyle = {
    backgroundImage: "url(" + wallpaper + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundAttachment: 'fixed',
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    verticalAlign: 'middle',
    alignItems: 'center'   
}

var FormStyle = {
    height: '300px',
    backgroundColor: '#edf0f5',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px black'
}

var GridItemStyle = {
    display: 'flex',
    alignItems: 'center'
}

export default function Home(){

    let slidervalue = value => value
    const [slideValue, setSlideValue] = useState(2);
    const handleChange = (event, value) => setSlideValue(value)
    
    let clickButton = event => {localStorage.setItem('players', slideValue);
                                localStorage.setItem('inGame', true)
                                localStorage.setItem('gameDay', 1)
                                localStorage.setItem('turn', 1)
                                localStorage.setItem('fullMoon', false)
                                }

    return (
        <div className="HomePage" style={PageStyle}>
            <Grid container xs={10} sm={6} md={4}  direction="column" justify="center" alignItems="center" style={FormStyle}>

                <Grid item xs={4} style={GridItemStyle}>
                    <Typography color={'error'}>
                        QUANTIDADE DE JOGADORES
                    </Typography>
                </Grid>

                <Grid item xs={3} style={GridItemStyle}>
                    
                    <Box width="270px">
                        <Slider
                            color='error'
                            aria-label="Players"
                            defaultValue={2}
                            getAriaValueText={slidervalue}
                            step={1}
                            marks
                            min={2}
                            max={6}
                            valueLabelDisplay="auto"
                            onChange={handleChange}
                        />
                    </Box>

                </Grid>

                <Grid item xs={4} style={GridItemStyle}>
                    <Link to='/game'>
                        <Button variant='contained' color='error' onClick={clickButton}> Começar</Button>
                    </Link>    
                </Grid>
            
            </Grid>
        </div>
    )
}

