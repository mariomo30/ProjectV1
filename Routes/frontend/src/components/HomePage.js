import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";


export default class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography compoment='h4' variant='h4'>
                        Ingresar el origen y el destino
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div align="center">
                                Direcciones para la ruta.
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid> 
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField required={true} type="text" placeholder="Ingrese el lugar de partida..."/>
                        <FormHelperText>
                            <div align="center">
                                Origen
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid> 
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField required={true} type="text" placeholder="Ingrese el lugar de destino..."/>
                        <FormHelperText>
                            <div align="center">
                                Destino
                            </div>
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained">
                        Calcular ruta
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained">
                        Limpiar campos
                    </Button>
                </Grid> 
            </Grid>  
        );
    }
}