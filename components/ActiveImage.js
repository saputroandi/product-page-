import React, { useEffect } from "react";

function ActiveImage(props) {
  //   useEffect(() => {
  //     console.log(props);

  //     return () => {
  //       console.log("kabeh");
  //     };
  //   }, [props]);
  return (
    <img
      key={props.imageObj.id}
      src={"images/" + props.imageObj.image}
      alt={props.imageObj.image}
    />
  );
}

export default ActiveImage;
