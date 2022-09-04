import React from "react";
import wallpaper from '../assets/home_wallpaper.jpg'
import Grid from '@mui/material/Grid';
import { Button, Slider, Box, Typography } from "@mui/material";
import { useState } from "react";

var PageStyle = {
    backgroundImage: "url(" + wallpaper + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundAttachment: 'fixed'
    
}

export default function Home(){

    let slidervalue = value => value
    const [slideValue, setSlideValue] = useState(2);
    const handleChange = (event, value) => setSlideValue(value)

    return (
        <div class="HomePage" style={PageStyle}>
            <Grid container justifyContent="center" alignItems="center" direction="column" style={{heith: '100vh'}}>

                <Grid item xs={6}>
                    <Typography>
                        Selecione a Quantidade de Jogadores
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Box width={300}>
                    <Slider
                        aria-label="Players"
                        defaultValue={2}
                        getAriaValueText={slidervalue}
                        step={1}
                        marks
                        min={2}
                        max={4}
                        valueLabelDisplay="auto"
                        onChange={handleChange}
                    />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Button> Continuar </Button>
                </Grid>
            
            </Grid>
        </div>
    )
}

