import { useState } from "react";
import "./App.css";

type Zodiac =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

interface ZodiacSelectorProps {
  sign: Zodiac;
  setSign: (sign: Zodiac) => void;
}

function ZodiacSelector({ sign, setSign }: ZodiacSelectorProps) {
  return (
    <select
      className="select-zodiac"
      value={sign}
      onChange={(e) => {
        setSign(e.target.value as Zodiac);
      }}
    >
      <option>Aries</option>
      <option>Taurus</option>
      <option>Gemini</option>
      <option>Cancer</option>
      <option>Leo</option>
      <option>Virgo</option>
      <option>Libra</option>
      <option>Scorpio</option>
      <option>Sagittarius</option>
      <option>Capricorn</option>
      <option>Aquarius</option>
      <option>Pisces</option>
    </select>
  );
}
function App() {
  const [username, setUsername] = useState("barbarator");
  const [handle, setHandle] = useState("barbarator");
  const [title, setTitle] = useState(
    "A force stronger than gravity: barbarator."
  );
  const [description, setDescription] = useState(
    "If you're wondering why you can't stop thinking about barbarator, unfortunately there's nothing you can do about it. She's just so goddamn magnetic."
  );
  const [sun, setSun] = useState<Zodiac>("Aries");
  const [rising, setRising] = useState<Zodiac>("Aries");
  const [moon, setMoon] = useState<Zodiac>("Aries");

  return (
    <div className="App">
      <div className="inputs">
        <h2>WHAT IS THE EDICT OF THE STARS TODAY?</h2>
        <label className="label-text">
          Username:
          <input
            className="input-text"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </label>
        <br />
        <label className="label-text">
          Handle:
          <input
            className="input-text"
            type="text"
            value={handle}
            onChange={(e) => {
              setHandle(e.target.value);
            }}
          />
        </label>
        <br />
        <label className="label-zodiac">
          ☉:
          <ZodiacSelector sign={sun} setSign={setSun} />
        </label>
        <br />
        <label className="label-zodiac">
          ↑:
          <ZodiacSelector sign={rising} setSign={setRising} />
        </label>
        <br />
        <label className="label-zodiac">
          ☽:
          <ZodiacSelector sign={moon} setSign={setMoon} />
        </label>
        <br />
        <label className="label-text">
          Title:
          <input
            className="input-text"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <br />
        <label className="label-textarea">
          Description:
          <textarea
            className="input-textarea"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="container">
        <div className="header">
          <div className="profile-image">
            <img src="./pic.png" className="pic" alt="" />
          </div>
          <div>
            <span className="username">@{username}</span>
            <span className="handle">@{handle}</span>
            <div className="zodiac">{`☉ ${sun} ↑ ${rising} ☽ ${moon}`}</div>
          </div>
        </div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export default App;
