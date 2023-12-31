import React, { useState } from "react";
import Subtract6 from "../assets/images/Subtract6.png";
import jenny from "../assets/images/jenny.png";
import Rectangle from "../assets/images/Rectangle.png";

function Page5() {
  const [city, setCity] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [room, setRoom] = useState(1);
  const [star, setStar] = useState(4);

  function handleCity(event) {
    setCity(event.target.value);
  }

  function handleArrival(event) {
    setArrival(event.target.value);
  }

  function handleDeparture(event) {
    setDeparture(event.target.value);
  }

  function handleStar(event) {
    setStar(parseInt(event.target.value, 10));
  }

  function handleRoom(event) {
    setRoom(parseInt(event.target.value, 10));
  }

  function handleStarMinus() {
    setStar((prevStar) => prevStar - 1);
  }

  function handleStarPlus() {
    setStar((prevStar) => prevStar + 1);
  }

  function handleRoomMinus() {
    setRoom((prevRoom) => prevRoom - 1);
  }

  function handleRoomPlus() {
    setRoom((prevRoom) => prevRoom + 1);
  }

  return (
    <div className="page5">
      <div className="page5Img">
        <img className="subtract6" src={Subtract6} alt="circle" />
        <img src={jenny} alt="girl" />
        <img className="rectangle" src={Rectangle} alt="rectangle" />
      </div>
      <div className="bookNow">
        <h1>Book now</h1>
        <p className="loremPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <p className="formData">City</p>
        <input
          className="cityInput"
          placeholder="Placeholder"
          value={city}
          onChange={handleCity}
        />
        <div className="flex-div">
          <div>
            <p className="formData">Arrival</p>
            <input
              className="otherInput"
              placeholder="10 October"
              value={arrival}
              onChange={handleArrival}
            />
          </div>
          <div>
            <p className="formData">Departure</p>
            <input
              className="otherInput"
              placeholder="11 October"
              value={departure}
              onChange={handleDeparture}
            />
          </div>
        </div>
        <div className="flex-div">
          <div>
            <p className="formData">Star</p>
            <div className="innerFlex">
              <button onClick={handleStarMinus} className="buttonLeft">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="5"
                  viewBox="0 0 15 5"
                  fill="none"
                >
                  <path
                    d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z"
                    fill="black"
                  />
                </svg>
              </button>
              <input
                className="otherInput"
                id="innerInput"
                type="number"
                placeholder=""
                value={star}
                onChange={handleStar}
              />
              <button onClick={handleStarPlus} className="buttonRight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M8.50194 0.591461H5.70039V6.19457H0.0972748V8.99613H5.70039V14.5992H8.50194V8.99613H14.1051V6.19457H8.50194V0.591461Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="formData">Room</p>
            <div className="innerFlex">
              <button onClick={handleRoomMinus} className="buttonLeft">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="5"
                  viewBox="0 0 15 5"
                  fill="none"
                >
                  <path
                    d="M14.3658 0.844452V4.34622H0.357971V0.844452H14.3658Z"
                    fill="black"
                  />
                </svg>
              </button>
              <input
                className="otherInput"
                id="innerInput"
                placeholder=""
                type="number"
                value={room}
                onChange={handleRoom}
              />
              <button onClick={handleRoomPlus} className="buttonRight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M8.50194 0.591461H5.70039V6.19457H0.0972748V8.99613H5.70039V14.5992H8.50194V8.99613H14.1051V6.19457H8.50194V0.591461Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button className="bookButton">BOOK NOW</button>
      </div>
    </div>
  );
}

export default Page5;
