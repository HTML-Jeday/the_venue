import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "lorem lorem lorem lorem lorem lorem lorem lorem",
      "lorem lorem lorem lorem lorem lorem lorem lorem",
      "lorem lorem lorem lorem lorem lorem lorem lorem"
    ],
    linkTo: ["#", "#", "#"],
    delay: [500, 0, 500]
  };

  showBoxes = () => {
    const { prices, desc, linkTo, positions, delay } = this.state;
    return prices.map((item, i) => (
      <Zoom key={i} delay={delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span> {item}</span>
              <span>{positions[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{desc[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="purchase tickets"
                bck="orange"
                color="#fff"
                link={linkTo}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
