import { useState } from "react";
import "./styles.css";

export default function App() {
  var [activity, meaning] = useState({
    "đ": " Person Surfing",
    "đŖ ": "Person Rowing Boat",
    "đ": "Person Swimming",
    "âšī¸ ": "Person Bouncing Ball",
    "đī¸ ": "Person Lifting Weights",
    "đ´": " Person Biking",
    "đ¤ŧ": " People Wrestling",
    "đ¤Ŋ": "Person Playing Water Polo",
    "đ¤ž": "Person Playing Handball"
  });

  var [meaning, setMeaning] = useState(
    "Clcik below emojis to see their meaning"
  );
  function getInputEmoji(event) {
    if (activity[event.target.value]) {
      setMeaning(activity[event.target.value]);
    } else if (event.target.value !== "") {
      setMeaning("Oops we dont have it in our database");
    } else if (event.target.value === "") {
      setMeaning("Clcik below emojis to see their meaning");
    }
  }

  return (
    <div className="App ">
      <nav className="navigation nav-heading">Activitimoji Translator</nav>
      <main className="container">
        <input onChange={getInputEmoji} />
        <div className="meaning-div">
          <h1> {meaning} </h1>
        </div>
        <ul className="stock-type">
          {Object.keys(activity).map((item) => (
            <li
              key={item}
              onClick={() => {
                setMeaning(activity[item]);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </main>
      <div className="meaning-div">
        <h3>to select emoji click windows + . (period)</h3>
      </div>
    </div>
  );
}
