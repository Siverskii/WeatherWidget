import React, { useState, useRef, useEffect } from "react";
import styles from "./SettingStyle.scss";
const CityItem = React.memo((props) => {
  const cityItem = useRef(null);
  const cityItemContainer = useRef(null);
  let dndEn = false;
  let startY = null;
  let startOffsetX = null;

  useEffect(() => {
    props.giveItemOffset(cityItemContainer.current.offsetTop, props.city);
  }, []);

  function dndStart(e) {
    document.addEventListener("mousemove", dndMove, false);
    document.addEventListener("touchmove", dndMove, false);
    startY =
      e.type == "mousedown" || e.type == "mouseup"
        ? e.pageY
        : Math.round(e.targetTouches[0].pageY);
    startOffsetX = cityItem.current.offsetTop;
    cityItem.current.style.position = "absolute";
    cityItem.current.style.zIndex = 2;
    dndEn = true;
  }

  function dndMove(e) {
    if (dndEn) {
      if (e.type == "touchmove") {
        let top =
          startOffsetX + (Math.round(e.targetTouches[0].pageY) - startY);
        cityItem.current.style.top = top + "px";
      } else {
        let top = startOffsetX + (e.pageY - startY);
        cityItem.current.style.top = top + "px";
      }
    }
  }

  function dndFinish(e) {
    dndEn = false;
    cityItem.current.style.zIndex = 1;
    props.reorderList(cityItem.current.offsetTop, props.city);
  }

  return (
    <div ref={cityItemContainer} className="city-item-container">
      <div ref={cityItem} className="city-item">
        <i
          onMouseDown={dndStart}
          onMouseUp={dndFinish}
          onTouchStart={dndStart}
          onTouchEnd={dndFinish}
          className={"icon-menu"}
        ></i>
        {props.city}
        <i
          onClick={() => props.deleteCity(props.city)}
          className={"icon-trash"}
        ></i>
      </div>
    </div>
  );
});

export { CityItem };
