import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  const cardData = [
    {
      title: "Infected",
      value: confirmed.value,
      description: "Number of Active Covid-19 Cases",
      style: styles.infected,
    },
    {
      title: "Recovered",
      value: recovered.value,
      description: "Number of Recovered Covid-19 Cases",
      style: styles.recovered,
    },
    {
      title: "Deaths",
      value: deaths.value,
      description: "Number of Covid-19 Deaths",
      style: styles.deaths,
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        {cardData.map((data, i) => {
          const { title, value, description, style } = data;
          return (
            <Grid
              key={i}
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, style)}
            >
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">{description}</Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
