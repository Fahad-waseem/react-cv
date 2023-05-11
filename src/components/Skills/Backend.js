import React from "react";
import { BsFillSignRailroadFill } from "react-icons/bs";

const Backend = () => {
  return (
    <div className="skills__content" data-aos="fade-left">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
                <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
                <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
                <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
                <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
                <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
                <BsFillSignRailroadFill/>

            <div>
              <h3 className="skills__name">Word press</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
