import "./Sidebar.css";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMeteor } from "@fortawesome/free-solid-svg-icons";
import redFlower from "../../assets/download.jpg";
import blueFlower from "../../assets/download (1).jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Button>
        <span style={{ marginRight: "5px" }}>جديدة</span>
        <FontAwesomeIcon icon={faMeteor} style={{ color: "yellow" }} />
        <FontAwesomeIcon icon={faMeteor} style={{ color: "yellow" }} />
        <FontAwesomeIcon icon={faMeteor} style={{ color: "yellow" }} />
      </Button>
      <Button>
        <p>الأكثر قراءة</p>
        <img src={redFlower} alt="red flower" style={{ width: "40px" }} />
      </Button>
      <Button>
        <p>مقالات مميزة</p>
        <div style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "yellow" }} />
        </div>
        <img src={blueFlower} alt="blue flower" style={{ width: "40px" }} />
      </Button>
    </div>
  );
}
