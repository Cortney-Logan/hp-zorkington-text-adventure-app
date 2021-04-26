function Instructions(props) {
  return (
    <div id="instruction-modal" style={{ visibility: props.instructions }}>
      {/* <h2>~How To Play~</h2> */}
      <div id="instruction-container">
        <div>
          The game is played based on by player commands. After starting the
          game, enter commands to move around the castle or interact with
          enchanted objects.
        </div>
        <div id="instruction-body">
          <div className="instruction-column">
            <h3>Move Around the Castle</h3>
            <p>
              Move between rooms in the castle using "move" and the direction
              you'd like to move in. For example,
            </p>
            <p>
              <b>
                <i>move north</i>
              </b>
            </p>
            <p>
              You may encounter rooms that are locked. To uncover the passwords
              or requirements to enter these rooms, interact with objects for
              clues.
            </p>
            <p>
              You can
              <i>
                <b>look around</b>
              </i>
              a room to see a list of the objects currently in the room.
            </p>
          </div>

          <div className="instruction-column">
            <h3>Interact with Objects</h3>
            <p>
              There are many enchanted objects at Hogwarts that you can interact
              with. Simply state the action followed by the item you'd like to
              interact with. For example,
            </p>
            <p>
              <i>examine tart</i>
            </p>
            <p>
              You can use these commands with any object,{" "}
              <i>
                <b>examine, greet, read, take, and drop</b>
              </i>
              . Taking an object will move it into your inventory if it is
              takable, while drop will leave it in the room you are currently
              in.
            </p>
            <p>
              You may be required to pick up certain objects or leave them in
              particular rooms to win the game.
            </p>
          </div>
        </div>
        <div><i>Hint: make sure to interact with objects to gather information necessary to defeat Voldemort. You are welcome and encouraged to try any commands you'd like though they may not be successful.</i></div>
      </div>

      <button
        className="header-button"
        onClick={() => props.setInstructions("hidden")}
      >
        Back to Game
      </button>
    </div>
  );
}
export default Instructions;
