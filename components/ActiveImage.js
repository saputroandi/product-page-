import React from "react";

function ActiveImage(props) {
  return (
    <img
      key={props.imageObj.id}
      src={"images/" + props.imageObj.image}
      alt={props.imageObj.image}
    />
  );
}

export default ActiveImage;
