import classes from "./Buttons.module.css";
const Buttons = (props) => {
  const buttonHandler = (e) => {
    props.onUpdateBoxesAndPosition(e.target.value.toUpperCase());
  };
  return (
    <div
      className={`${classes.buttonsContainer} ${
        props.winner === true ? classes.fade : ""
      }`}
    >
      <div className={classes.rowButtons}>
        <button onClick={buttonHandler} value={"q"} className={classes.btn}>
          Q
        </button>
        <button onClick={buttonHandler} value={"w"} className={classes.btn}>
          W
        </button>
        <button onClick={buttonHandler} value={"e"} className={classes.btn}>
          E
        </button>
        <button onClick={buttonHandler} value={"r"} className={classes.btn}>
          R
        </button>
        <button onClick={buttonHandler} value={"t"} className={classes.btn}>
          T
        </button>
        <button onClick={buttonHandler} value={"y"} className={classes.btn}>
          Y
        </button>
        <button onClick={buttonHandler} value={"u"} className={classes.btn}>
          U
        </button>
        <button onClick={buttonHandler} value={"i"} className={classes.btn}>
          I
        </button>
        <button onClick={buttonHandler} value={"o"} className={classes.btn}>
          O
        </button>
        <button onClick={buttonHandler} value={"p"} className={classes.btn}>
          P
        </button>
      </div>
      <div className={classes.rowButtons_2}>
        <button onClick={buttonHandler} value={"a"} className={classes.btn}>
          A
        </button>
        <button onClick={buttonHandler} value={"s"} className={classes.btn}>
          S
        </button>
        <button onClick={buttonHandler} value={"d"} className={classes.btn}>
          D
        </button>
        <button onClick={buttonHandler} value={"f"} className={classes.btn}>
          F
        </button>
        <button onClick={buttonHandler} value={"g"} className={classes.btn}>
          G
        </button>
        <button onClick={buttonHandler} value={"h"} className={classes.btn}>
          H
        </button>
        <button onClick={buttonHandler} value={"j"} className={classes.btn}>
          J
        </button>
        <button onClick={buttonHandler} value={"k"} className={classes.btn}>
          K
        </button>
        <button onClick={buttonHandler} value={"l"} className={classes.btn}>
          L
        </button>
      </div>
      <div className={classes.rowButtons_3}>
        <button
          onClick={buttonHandler}
          value={"enter"}
          className={classes.btnenter}
        >
          ➤
        </button>
        <button onClick={buttonHandler} value={"z"} className={classes.btn}>
          Z
        </button>
        <button onClick={buttonHandler} value={"x"} className={classes.btn}>
          X
        </button>
        <button onClick={buttonHandler} value={"c"} className={classes.btn}>
          C
        </button>
        <button onClick={buttonHandler} value={"v"} className={classes.btn}>
          V
        </button>
        <button onClick={buttonHandler} value={"b"} className={classes.btn}>
          B
        </button>
        <button onClick={buttonHandler} value={"n"} className={classes.btn}>
          N
        </button>
        <button onClick={buttonHandler} value={"m"} className={classes.btn}>
          M
        </button>
        <button
          onClick={buttonHandler}
          value={"delete"}
          className={classes.btndel}
        >
          ⌫
        </button>
      </div>
    </div>
  );
};
export default Buttons;
