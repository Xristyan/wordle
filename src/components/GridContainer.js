import React, { useState } from "react";
import classes from "./GridContainer.module.css";
import Box from "./Box";
import Buttons from "./buttons/Buttons";
const GridContainer = (props) => {
  const [wordChecker, setWordChecker] = useState([]);
  const onUpdateBoxesAndPosition = (e) => {
    props.updateBoxesAndPositionHandler(e);
  };
  // console.log(props.pos);
  return (
    <React.Fragment>
      <div className={classes.gridContainer}>
        {props.allBoxes.map((e, i) => {
          return (
            <Box boolValue={props.boolArray[i]} key={e.id} id={e.id}>
              {e.letter}
            </Box>
          );
        })}
      </div>
      <Buttons
        winner={props.winner}
        onUpdateBoxesAndPosition={onUpdateBoxesAndPosition}
      />
    </React.Fragment>
  );
};
export default GridContainer;
