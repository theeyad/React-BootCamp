import "./Sidebar.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMeteor } from "@fortawesome/free-solid-svg-icons";
import redFlower from "../../assets/download.jpg";
import blueFlower from "../../assets/download (1).jpg";

export default function Sidebar() {
  const buttons = [
    {
      id: 1,
      c: (
        <>
          <p style={{ marginRight: "5px", display: "inline-block" }}>جديدة</p>
          <FontAwesomeIcon icon={faMeteor} style={{ color: "yellow" }} />
          <FontAwesomeIcon icon={faMeteor} style={{ color: "yellow" }} />
          <FontAwesomeIcon icon={faMeteor} style={{ color: "yellow" }} />
        </>
      ),
    },
    {
      id: 2,
      c: (
        <>
          <p>الأكثر قراءة</p>
          <img src={redFlower} alt="red flower" style={{ width: "40px" }} />
        </>
      ),
    },
    {
      id: 3,
      c: (
        <>
          <p>مقالات مميزة</p>
          <div style={{ textAlign: "center" }}>
            <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          </div>
          <img src={blueFlower} alt="blue flower" style={{ width: "40px" }} />
        </>
      ),
    },
    {
      id: 4,
      c: (
        <>
          <div style={{ textAlign: "center" }}>
            <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          </div>
          <img src={blueFlower} alt="blue flower" style={{ width: "40px" }} />
        </>
      ),
    },
  ];

  let buttonsList = buttons.map((btn) => {
    return <Button key={btn.id}>{btn.c}</Button>;
  });

  return <div className="sidebar">{buttonsList}</div>;
}
