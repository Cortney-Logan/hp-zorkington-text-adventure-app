function Modal(props) {
  return (
    <div className="modal" style={{ visibility: props.about }}>
      <div id="about-container">
        <p><b><i>Harry Potter and the Text Adventure Game</i></b> was developed as a CLI game as part of Burlington Code Academy's Software Development Bootcamp. The user interface was later updated to a single page web app.</p>
        <p>The game is based on the classic text adventure game, Zork and uses characters and storyline from the classic Harry Potter series written by J.K.Rowling.</p>
      </div>
      <button
        className="header-button"
        onClick={() => props.setAbout("hidden")}
      >
        Back to Game
      </button>
    </div>
  );
}
export default Modal;
