import { places } from "./data.jsx";
import { getImageUrl } from "./Utils/Utils.jsx";
import { useState } from "react";
import { useContext } from "react";
import { imageContext, placeContext } from "./Contexts/Context.jsx";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <imageContext.Provider value={{ imgSize: imageSize }}>
        <label>
          <input
            type="checkbox"
            checked={isLarge}
            onChange={(e) => {
              setIsLarge(e.target.checked);
            }}
          />
          Use large images
        </label>
        <hr />
        <List />
      </imageContext.Provider>
    </>
  );
}

function List() {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <placeContext.Provider value={place}>
        <Place />
      </placeContext.Provider>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Place() {
  const placeObject = useContext(placeContext);

  return (
    <>
      <PlaceImage />
      <p>
        <b>{placeObject.name}</b>
        {": " + placeObject.description}
      </p>
    </>
  );
}

function PlaceImage() {
  const imageData = useContext(imageContext);
  const placeObject = useContext(placeContext);

  return (
    <img
      src={getImageUrl(placeObject)}
      alt={placeObject.name}
      width={imageData.imgSize}
      height={imageData.imgSize}
    />
  );
}
