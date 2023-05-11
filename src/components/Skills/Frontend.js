import React from "react";
import { BsFillSignRailroadFill } from "react-icons/bs";
const Frontend = () => {
  return (
    <div className="skills__content" data-aos="fade-right">
      <h3 className="skills__title">Frontend developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
                 <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
                 <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
                 <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intemediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
                 <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
                 <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
                 <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
