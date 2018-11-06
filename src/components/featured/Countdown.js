import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class Countdown extends Component {
  state = {
    deadline: 'Dec, 16, 2018',
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0',
  };

  getTime(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    if(time < 0){
        console.log('date passed')
    }else{
      const seconds = Math.floor((time/1000)%60)
      const minutes = Math.floor((time/1000/60)%60)
      const hours = Math.floor((time/1000*60*60)%24)
      const days = Math.floor(time/(1000*60*60*24))
      this.setState({
        days,
        seconds,
        minutes,
        hours
      })
    }
  }
  componentDidMount() {
    setInterval(()=> this.getTime(this.state.deadline), 1000)
  }
  

  render() {

    const { days, minutes, hours, seconds } = this.state

    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
