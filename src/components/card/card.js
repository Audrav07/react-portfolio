import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './triangle.css';

const styles = {
  card: {
    width: 200,
    minWidth: 505,
    minHeight: 340,
    marginTop:45,
    marginLeft:80,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    color:" #fd2c19"
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
   

<div className="wrapper">

      <h1 className="designs">D</h1>
      <h2 className="design-word">esign</h2>
             <div className="border">
     
      <Card className={classes.card} style={{backgroundColor:" #ffffff", transform:"matrix(1, 0, 0, 1, 0, 0)",  boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"}}>
   
      

        <CardContent>
    
      
          <p className="paragraph">is all about telling a <span className="underline--magical">story.</span></p>
     
          
        </CardContent>

           
      </Card>
</div>
    </div>


  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
