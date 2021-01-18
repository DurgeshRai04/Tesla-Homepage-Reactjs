import React from "react";
import "../css/Item.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "../component/Button";
function Item({
  title,
  desc,
  descLink,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
  first,
  twoButton,
}) {
  return (
    <div className="item" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="item__container">
        <div className="item__text">
          <p>{title}</p>
          <div className="item__desc">
            <p>{desc}</p>
          </div>
        </div>

        <div className="lower__thirdpart">
          <div className="item__buttons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
            {twoButton && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
            )}
          </div>
          {first && (
            <div className="item__expand">
              <ExpandMoreIcon fontSize="large" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Item;
