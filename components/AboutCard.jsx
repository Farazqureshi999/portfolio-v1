import React from 'react';

function AboutCard({count,countTitle}) {
  return <div className="about-card">
      <h5 className="font-poppins font-bold">{count}</h5>
      <h6 className="uppercase font-nunito font-bold">{countTitle}</h6>
  </div>;
}

export default AboutCard;
