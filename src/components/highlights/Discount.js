import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/MyButton"

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = (params) => {
    const { discountStart, discountEnd } = this.state;

    if (discountStart < discountEnd) {
      this.setState({
        discountStart: discountStart + 1
      });
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    setTimeout((params) => {
      this.porcentage();
    }, 30);
  };

  render() {
    const { discountStart } = this.state;
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={() => {
              this.porcentage();
            }}
          >
            <div className="discount_porcentage">
              <span>{discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 20th JUNE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                cum aliquid, minima cupiditate eveniet fugiat quia at odio. Vel
                eaque, commodi optio reprehenderit harum temporibus quod vitae
                illum aspernatur doloremque?
              </p>
              <MyButton 
              text="Purchase tickets"
              bck="#ffa880"
              color="#ffff"
              link="#"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
