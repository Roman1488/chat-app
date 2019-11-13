import React from 'react';

import './InfoBar.css';
import closeIcon from '../../img/closeIcon.png';
import onlineIcon from '../../img/onlineIcon.png';
const InfoBar = ({ room }) => (
  <div className="infoBar">
      <div className="leftInnerContainer">
          <img className="onlineIcon" src={onlineIcon} alt="Online icon"/>
          <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
          <a href="/"><img src={closeIcon} alt="Close icon"/></a>
      </div>
  </div>
);

export default InfoBar;