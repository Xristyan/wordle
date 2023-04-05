import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={classes.header}>
      {/* <div className={classes.logo}>〄</div> */}
      <h1 className={classes.h1}>WORDLE!!!</h1>
    </div>
  );
};
export default Header;
