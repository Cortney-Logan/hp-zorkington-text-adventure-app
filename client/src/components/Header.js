function Header(props) {

  return (
    <div id="header">
      <button className="header-button" onClick={()=>props.setInstructions("visible")}>How To Play</button>
      <div id="title">
        <h1>Harry Potter</h1>
        <h2>and the Text Adventure Game</h2>
      </div>
      <button className="header-button" onClick={()=>props.setAbout("visible")}>About</button>
    </div>
  );
}
export default Header;
