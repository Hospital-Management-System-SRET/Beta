import React from "react";
import ServiceCard from "./ServiceCard";
import { Grid } from "@material-ui/core";
import ServicesList from "./constants";

const getServicesList = (ServiceObj) => {
  return (
    <Grid item  md={4} sm={6} xs={12}>
      <ServiceCard {...ServiceObj}></ServiceCard>
    </Grid>
  );
};

const Content = () => {
  return (
    <Grid container >
      {ServicesList.map((ServiceObj) => {
        return getServicesList(ServiceObj);
      })}
      {/* <ServiceCard title="Comprehensive diagnosis of vision" description="Diagnosis begins with complete history and family history of visual impairment in the patient.

External examination of the eye including lids, conjunctiva, cornea, iris, lens, etc. are the next step." image={card1image}/></Grid>
            <Grid item xs={12} sm={4}><ServiceCard/></Grid>
            <Grid item xs={12} sm={4}><ServiceCard/></Grid>  */}
    </Grid>
  );
};
export default Content;
