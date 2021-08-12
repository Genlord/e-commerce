import React from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import { Button } from '@material-ui/core';



import Gcard7 from './gcard7.png'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  icon: {
    height: 100,
    width: 100,
  }
}));


export default function ListItem7(props) {

  const classes = useStyles();
    
        if (props.count7 > 0) {
                return (
                    <ListItem>
        <ListItemAvatar>
        <img src={Gcard7} className={classes.icon}/>
        </ListItemAvatar>
        <ListItemText primary={`Card7 x${props.count7}`} secondary={`$${443 * props.count7}`} />
        <Button variant="contained" color="primary" onClick={() => props.setCount7(props.count7 - 1)}>
        Remove From Cart
        </Button>
      </ListItem>
                  )  
               } else return(null)  
   
}