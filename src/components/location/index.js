import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.3351192903533!2d-95.689382384913!3d30.227518581816128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8646d79564aa2ea1%3A0x7029854fa53a39ea!2sMagnolia+High+School!5e0!3m2!1sru!2sua!4v1541506453110"
        width="100%"
        height="500px"
        frameborder="0"
        allowfullscreen
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
