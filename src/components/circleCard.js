import React from "react"

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
const full = window.location.protocol+'//'+window.location.hostname+(window.location.port ? ':'+window.location.port: '');
const styles = {
    card: {
      maxWidth: '50%',
      margin: 'auto',
      minheight: '80%',
    },
   
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  
  function SimpleCard(props) {
    const { classes } = props;
   
  
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
             {props.header}
          </Typography>
          <Typography variant="h5" component="h2">
          
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
           Tech stack: { props.techstack }
          </Typography>
          <Typography component="p">
           {props.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button  href={props.link} size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }
  
  SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleCard);