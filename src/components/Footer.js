import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FormatQuoteRounded } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import logo from './Capture.JPG';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop:'30px',
        backgroundColor:'rgb(28, 62, 107)',
        paddingTop:'16px',
        overflowX:'hidden'
      },
     subFooter:{
backgroundColor:'rgb(8, 41, 84)',
marginTop:'8px',
padding:'16px',

     },
     footerSections:{
         margin:'0 16px'
     },
     footerText:{
         color:'white',
         fontSize:'18px'
     },
     icon:{
         fontSize:'50px',
         padding:'10px',
         color:'lightblue'
     },
     footericons:{
        fontSize:'30px',
        padding:'7px',
        color:'lightblue',
        display:'inline-block',
        verticalAlign: 'middle'
     },
     container: {
      display: "flex",
      
    },
    item: {
      
      flexBasis: "33%",
      maxWidth: "33%",
      padding:'20px'
    },
    itemFlexGrow: {
      flexGrow: 0,
      border: "1px solid red"
    },
    p:{
      color:'white',
      fontSize:'18px'
    },
    ul:{
      
      color:'lightblue',
      fontSize:'18px'
    },
    h2:{
      color:'white',
      fontSize:'24px',
      
    }
}));

const Footer=()=>{
const getYear=()=>{
  const dateToday = new Date();
  return dateToday.getFullYear()
}
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {/* <Grid container spacing={3}>
    <Grid item xs={false} sm={1}></Grid>
      <Grid item xs={12} sm={3}>
          <img src={logo}></img>
        <Typography className={[classes.footerText,classes.footerSections]}>We are a recognized leader in high-tech ophthalmology services</Typography>
<FacebookIcon color="primary" className={classes.icon}></FacebookIcon ><TwitterIcon color="primary" className={classes.icon}></TwitterIcon><InstagramIcon color="primary" className={classes.icon}></InstagramIcon>
      </Grid>
      <Grid item xs={12} sm={3}>
          
        <Typography className={[classes.footerText,classes.footerSections]}>What We Treat<br></br>
Astigmatism<br></br>
Myopia<br></br>
Cataract<br></br>
Farsightedness<br></br>
Glaucoma<br></br>
Strabismus<br></br>
Amblyopia<br></br>
Retinal diseases<br></br>
Keratoconus</Typography>

      </Grid>
      <Grid item xs={12} sm={3}>
          <img src={logo}></img>
        <Typography className={[classes.footerText,classes.footerSections]}></Typography>

<LocationOnIcon color="primary" className={classes.footericons}></LocationOnIcon>670 Lafayette Ave, Brooklyn, NY 11216<br></br>
<CallIcon color="primary" className={classes.footericons}></CallIcon>
(123) 456-7890<br></br>
<EmailIcon color="primary" className={classes.footericons}></EmailIcon>info@demolink.org<br></br>
<ImportContactsIcon color="primary" className={classes.footericons}></ImportContactsIcon>Book an Appointment
      </Grid>
      
      <Grid item xs={false} sm={1}></Grid>
      <Grid item xs={12} sm={1}>
        
      </Grid>
      
      <Grid className={classes.subFooter} item xs={12}>
        <span >Copyright © {()=>this.getYear()} SRET</span>
      </Grid>
      
    </Grid> */}
    <Grid item container>
        <Grid item xs={false} sm={1}></Grid>
        <Grid item xs={12} sm={10}>
        <div className={classes.container}>
        <div className={classes.item}>
          
          <br></br>
          <img src={logo}></img>
<p className={classes.p}>We are a recognized leader in high-tech ophthalmology services</p>
<FacebookIcon color="primary" className={classes.icon}></FacebookIcon><TwitterIcon color="primary" className={classes.icon}></TwitterIcon><InstagramIcon color="primary" className={classes.icon}></InstagramIcon>
          </div>
        <div className={classes.item}> 
        
          <br></br>
          <p className={classes.h2}>What we treat</p>
<ul className={classes.ul}>
<li>Astigmatism</li>
<li>Myopia</li>
<li>Cataract</li>
<li>Farsightedness</li>
<li>Glaucoma</li>
<li>Strabismus</li>
<li>Amblyopia</li>
<li>Retinal diseases</li>
<li>Keratoconus</li>
</ul>
        </div>
        <div className={classes.item}> 
       
          <br></br>
          <p className={classes.h2}>Contacts</p>
<LocationOnIcon  className={classes.footericons}></LocationOnIcon>
<a className={classes.ul}>670 Lafayette Ave, Brooklyn, NY 11216</a><br></br>
<CallIcon  className={classes.footericons}></CallIcon>
<a className={classes.ul}>(123) 456-7890</a><br></br>
<EmailIcon  className={classes.footericons}></EmailIcon>
<a className={classes.ul}>info@demolink.org</a><br></br>
<ImportContactsIcon  className={classes.footericons}></ImportContactsIcon>
<a className={classes.ul}>Book an Appointment</a>
         </div>

<div className={classes.item}> 
       
       <br></br>
       <p className={classes.h2}>Opening Hours</p>
<ul className={classes.ul}>
<li>Monday — 8am – 7pm</li>
<li>Tuesday — 8am – 7pm</li>
<li>Wednesday — 8am – 7:30pm</li>
<li>Thursday — 8am – 6:30pm</li>
<li>Friday —8am – 5pm</li>
<li>Saturday — 8am – 2pm</li>

</ul>
      </div>
      </div> 
        </Grid>
        <Grid item xs={false} sm={1}>
          
        </Grid>
        <Grid className={classes.subFooter} item xs={12}>
        <span style={{color:"white",paddingLeft:'160px'}}>Copyright © 2020 {()=>this.getYear()} SRET</span>
        <span className={classes.ul} style={{paddingLeft:'40px'}}>Privacy policy</span>
        <span className={classes.ul} style={{paddingLeft:'40px'}}>Terms of Use</span>
      </Grid>
</Grid>
  </div>
  );
}
export default Footer;