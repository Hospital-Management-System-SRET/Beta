import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    //maxWidth:345,
    margin: "auto",
    transition: "0.3s",
    width: "100%",

    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
  root: {
    //minWidth: 500,
    //margin:"auto",
    maxWidth: 345,
  },
  media: {
    margin: "auto",
    height: "100px",
    paddingTop: "55.25%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    marginBottom: 12,
    marginTop: 12,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    padding: "20px 30px",
    backgroundColor: "rgb(15, 17, 107)",
    margin: "10px 10px",
  },
});

const ServiceCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { title, description, image } = props;
  return (
    // <Card className={classes.root}>
    <Card className={classes.card}>
      <CardContent>
        <CardMedia
          style={{ height: "150px" }}
          className={classes.media}
          image={image}
          title="Paella dish"
        />
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2" className={classes.title}>
          {title}
        </Typography>
        <Divider className={classes.divider} light />
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body1" component="p">
          {description}
          {/* well meaning and kindly.
          <br />
          {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
