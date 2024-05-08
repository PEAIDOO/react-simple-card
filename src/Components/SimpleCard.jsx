import React from "react";
import Description from "./Description";
import Title from "./Title";
import Image from "./Image";

class SimpleCard extends React.Component {
  render() {
    return (
      <>
        <div className="cards">
          <div className="card1">
            <div className="card-image">
              <Image image="https://i.pinimg.com/564x/62/5d/a7/625da73aac764c306f1f465e535ae4e0.jpg" />
            </div>
            <div className="other-comp">
              <Title title="Jurgen Klopp " />
              <Description description="Jurgen Klopp, the manager of Liverpool FC, led the club to their first-ever Premier League title in the 2019-2020 season, ending a 30-year wait for domestic league glory with a record-breaking 99-point tally. Under his leadership, Liverpool also clinched the UEFA Champions League title in 2019, showcasing Klopp's tactical prowess and ability to inspire his team to success. His high-intensity playing style and consistent top-four finishes have revitalized Liverpool's footballing identity, making Klopp one of the most successful and respected managers in modern football." />
            </div>
          </div>

          <div className="card2">
            <div className="card-image">
              <Image image="https://i.pinimg.com/564x/e5/27/2c/e5272c440388697b0a1d7125c8adb96f.jpg" />
            </div>
            <div className="other-comp">
              <Title title="Mohammed Salah" />
              <Description description="Mohamed Salah has carved his name in Premier League history with his outstanding performances for Liverpool FC. Since joining the club in 2017, Salah has clinched two Golden Boot awards for being the league's top scorer, played a crucial role in Liverpool's 2019-2020 title win, and garnered numerous individual accolades, solidifying his reputation as one of the league's premier talents" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SimpleCard;
