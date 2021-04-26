import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { blue, purple } from "@material-ui/core/colors";
import "./Services.css";
import { makeStyles } from "@material-ui/core/styles";
import CallIcon from "@material-ui/icons/Call";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  h2: {
    fontSize: "75px",
    fontWeight: "400",
    color: "rgb(15, 17, 107)",
  },
  h1: {
    fontSize: "75px",
    fontWeight: "400",
    color: "rgb(15, 17, 107)",
  },
  h3: {
    fontSize: "45px",
    fontWeight: "400",
    color: "rgb(15, 17, 107)",
    textAlign: "center",
  },
  h4: {
    fontSize: "30px",
    color: "rgb(15, 17, 107)",
    fontWeight: "400",
    textAlign: "center",
  },
  h5: {
    fontSize: "24px",
    color: "rgb(15, 17, 107)",
    fontWeight: "400",
    textAlign: "center",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "rgb(15, 17, 107)",
    margin: "auto",
    padding: "20px 50px",
    fontSize: "20px",
  },
  icon: {
    padding: "10px",
  },
  container: {
    display: "flex",
    marginTop: "30px",
  },
  item: {
    // flexBasis: "33%",
    // maxWidth: "33%",
    padding: "50px",
  },
  itemFlexGrow: {
    flexGrow: 0,
    border: "1px solid red",
  },
  checkicon: {
    fontSize: "100px",
    margin: "auto",
    display: "flex",
  },
  p: {
    color: "darkblue",
    textAlign: "center",
  },
}));
const Services = () => {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:'blue'}}>
      <div className="top">
        <Typography align="center" className="h5" variant="h5" gutterBottom>
          OUR SERVICES
        </Typography>
        <Typography
          align="center"
          variant="h2"
          className={classes.h2}
          component="h2"
          gutterBottom
        >
          We offer a whole range of treatments for you, <br></br>
          your family and friends
        </Typography>
      </div>
      <Container>
      <Grid container>
        <Grid item xs={12} sm={12} style={{backgroundColor:'pink'}}>
          <Content></Content>
        </Grid>
      </Grid>
      </Container>
      <div className="divstyles">
        <h1 className={classes.h1}>
          Make an appointment with <br></br>an ophthalmologist
        </h1>

        <h3 className={classes.h3}>Have questions?</h3>
        <h3 className={classes.h3}>
          <CallIcon fontSize="large"></CallIcon>(123) 456-7890
        </h3>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            <ImportContactsIcon className={classes.icon} fontSize="medium">
              {" "}
            </ImportContactsIcon>
            BOOK AN APPOINTMENT
          </Button>
        </CardActions>
      </div>
      <Grid item container>
        <Grid item xs={false} sm={1}></Grid>
        <Grid item xs={12} sm={10}>
          <Typography align="center" className="h5" variant="h5" gutterBottom>
            ADVANTAGES
          </Typography>
          <Typography
            align="center"
            variant="h2"
            className={classes.h3}
            component="h2"
            gutterBottom
          >
            Good Vision for Many years
          </Typography>
          <div className={classes.container}>
            <div className={classes.item}>
              <CheckCircleRoundedIcon
                justifyContent="center"
                color="primary"
                className={classes.checkicon}
              ></CheckCircleRoundedIcon>
              <br></br>
              <h4 className={classes.h4}>Highest professional level</h4>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className={classes.item}>
              <CheckCircleRoundedIcon
                justifyContent="center"
                color="primary"
                className={classes.checkicon}
              ></CheckCircleRoundedIcon>
              <br></br>
              <h4 className={classes.h4}>Highest professional level</h4>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
            <div className={classes.item}>
              <CheckCircleRoundedIcon
                justifyContent="center"
                color="primary"
                className={classes.checkicon}
              ></CheckCircleRoundedIcon>
              <br></br>
              <h4 className={classes.h4}>Highest professional level</h4>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={false} sm={1}></Grid>
      </Grid>
      <Grid item container className="faqgrid">
        <Grid item xs={false} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h2"
            className={classes.h3}
            component="h2"
            gutterBottom
          >
            FREQUENTLY ASKED QUESTIONS
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.h5}>
                What exactly is glaucoma?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Glaucoma is a condition in which the eye's intraocular pressure
                (IOP) is too high. This means that your eye has too much aqueous
                humor in it, either because it produced too much, or because
                it's not draining properly. Other symptoms are optic nerve
                damage and vision loss. Glaucoma is a silent disease that robs
                the patient of their peripheral vision. Early detection is very
                important.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.h5}>
                What causes myopia?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.h5}>
                I see fine. Why do I need to see an Eye Doctor?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Regular eye exams are the only way to catch “silent” diseases
                such as diabetes, glaucoma and other conditions in their early
                stages, when they’re more easily managed or treated. Considering
                mass-produced, over-the-counter reading glasses? You are truly
                doing yourself a disservice, both financially and medically.
                One-size-fits-all reading glasses not only do not work well for
                most people who have a different prescription in each eye,
                and/or astigmatism, or whose lens and frame parameters are not
                measured correctly. Moreover, they bypass the opportunity to
                have their eyes checked for early detection of many manageable
                diseases or conditions. For those insisting on selecting glasses
                not measured specifically for their eyes, headache and eye
                fatigue are common symptoms.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.h5}>
                How often should I get my eyes examined?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We recommend that everyone get a complete eye exam every year.
                This insures good ocular health and insures we catch a problem
                while it's still a small one. This is especially important if
                you are a contact lens wearer. You have an increased risk of
                serious complications that may not be evident until examined.
                Don't be fooled into thinking your eyes are healthy just because
                you think you're seeing clearly. Your eyes are also a good
                source of information regarding your overall systemic health.
                Diseases like high blood pressure, diabetes, M.S., high
                cholesterol, and many others frequently show up in the eyes, and
                regular eye exams can help to monitor or detect these
                conditions. Ask yourself this . . . would you rather lose your
                teeth or your vision. Don't take your vision for granted! Don't
                let your insurance company dictate how often you should be seen
                either. Do you think they care about the health of your eyes
                like we do, or do you think maybe they just want to cut costs?
                Get your eyes examined every year.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.h5}>
                What are cataracts?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Cataracts occur when the lens inside the eye becomes cloudy and
                less transparent. You may experience light sensitivity, blurry
                vision, and distorted colors. Studies suggest that antioxidants
                in the diet may lower the risk for developing cataracts. Smoking
                also contributes to the development of cataracts. The most
                common reason for the development of cataracts is the natural
                aging process. Other causes are trauma to the eye, excessive
                ultraviolet exposure, and certain systemic diseases, such as
                diabetes.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={false} sm={3}></Grid>
      </Grid>
      </div>
  );
};

export default Services;
