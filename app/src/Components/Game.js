import React from "react";
import {Button, Grid} from '@mui/material'
import { useState } from "react";
import night from '../assets/night.jpg'
import day from '../assets/day.jpg'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Link } from "react-router-dom";


var DefaultGamePageStyle = {
    
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


var GamePageStyleDay = {...DefaultGamePageStyle, backgroundImage: "url(" + day + ")"}
var GamePageStyleNight = {...DefaultGamePageStyle, backgroundImage: "url(" + night + ")"}


var FormStyle = {
    height: '300px',
    backgroundColor: '#edf0f5',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px black'
}


var SpaceItemsJustify = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export default function Game(){

    const [gameDay, setDay] = useState(parseInt(localStorage.getItem('gameDay')))
    const [turn, setTurn] = useState(parseInt(localStorage.getItem('turn')))
    const [fullMoon, setFullMoon] = useState(localStorage.getItem('fullMoon') === 'true')
    const [players, setPlayers] = useState(parseInt(localStorage.getItem('players')))
    const [GamePageStyle, setGamePageStyle] = useState(GamePageStyleDay)


    const resetAll = (event) => {
        localStorage.setItem('gameDay', 0)
        localStorage.setItem('inGame', false)
        localStorage.setItem('turn', 0)
        localStorage.setItem('fullMoon', false)
        window.location.reload(false)
    }

    const applyChanges = () => {
        localStorage.setItem('gameDay', gameDay)
        localStorage.setItem('turn', turn)
        localStorage.setItem('fullMoon', fullMoon)
    }

    const makeLogic = () => { 
        
        setTurn(turn + 1)
        
        if(turn % players == 0)
            setDay(gameDay + 1)
        
        if(gameDay % 6 == 0)
            setFullMoon(true)
        else
            setFullMoon(false)


        // trocar dia para noite ou vice versa
        if(turn % players == 0){

            if(GamePageStyle.backgroundImage == GamePageStyleDay.backgroundImage)
                setGamePageStyle(GamePageStyleNight)
            
            else
                setGamePageStyle(GamePageStyleDay)

        }
    
    }

    let nextTurnButton = (event) => {
        
        makeLogic()    
        applyChanges()
    }

    return (
    <div style={GamePageStyle}>
        

        <Grid xs={10} sm={8} md={4} direction={'column'} container style={FormStyle}>

            <Grid container direction={'row'} style={SpaceItemsJustify}>

                <Grid item xs={12} sm={4}>Dia: {gameDay}</Grid>
                <Grid item xs={12} sm={4}>Turno: {turn}</Grid>
                <Grid item xs={12} sm={4}>Lua Cheia: {fullMoon.toString()}</Grid>
            
            </Grid>

            <Grid item xs={6} sm={4} md={9}></Grid>

            <Grid container direction={'row'}  style={SpaceItemsJustify}>
    
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color={'error'} onClick={resetAll}>Resetar</Button>        
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <Button variant="contained" color={'primary'} onClick={nextTurnButton}>Próximo turno</Button>    
                </Grid>
            
            </Grid>

        </Grid>
        

    </div>)
}