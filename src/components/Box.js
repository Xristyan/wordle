import classes from "./Box.module.css";
const Box = (props) => {
  // console.log(props.boolValue);
  return (
    <div
      className={`${classes.box} ${
        props.boolValue === true ? classes.green : ""
      } ${props.boolValue === false ? classes.yellow : ""}
       ${props.boolValue === null && classes.default}`}
    >
      <div
        className={` ${props.boolValue === true ? classes.default : ""} ${
          props.boolValue === false ? classes.default : ""
        }
       ${props.boolValue === null && classes.default}`}
      >
        {props.children}
      </div>
    </div>
  );
};
export default Box;
