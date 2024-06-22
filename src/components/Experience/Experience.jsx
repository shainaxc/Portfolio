import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>S</div>
        <span  style={{color: darkMode?'white':''}}></span>
        <span>Skillful</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>H</div>
        <span  style={{color: darkMode?'white':''}}></span>
        <span>Hardworking</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>A</div>
        <span  style={{color: darkMode?'white':''}}></span>
        <span>Artistic</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>I</div>
        <span  style={{color: darkMode?'white':''}}> </span>
        <span>Innovative</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>N</div>
        <span  style={{color: darkMode?'white':''}}></span>
        <span>Neat</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>A</div>
        <span  style={{color: darkMode?'white':''}}></span>
        <span>Adaptable</span>
      </div>
    </div>
  );
};

export default Experience;
