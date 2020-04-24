import React from 'react'
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/siddharth.jpg";


import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="Siddharth Chandran"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Siddharth Chandran</h3>
                    <h6>Full Stack Developer</h6>
                    <Button
                      href="https://github.com/Siddharth-Chandran/"
                      target="_blank"
                      justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button
                      href="https://www.facebook.com/sid.chan.5794"
                      target="_blank"
                      justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button
                      href="https://www.instagram.com/siddharth.chandran/"
                      target="_blank" 
                      justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                A 25 year old Full Stack developer living in Pune, India. Love to
                create bugs to solve other bugs. {" "}
              </p>
              <br />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}