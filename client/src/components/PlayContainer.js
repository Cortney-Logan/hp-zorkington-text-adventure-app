import TextArea from "./TextArea.js";
import PlayerInput from "./PlayerInput.js";
import Inventory from "./Inventory.js";
import Instructions from "./Instructions";
import About from "./About.js";

function PlayContainer(props) {
  return (
    <div id="player-container">
      <TextArea
        player={props.player}
        setPlayer={props.setPlayer}
        itemKey={props.itemKey}
        description={props.description}
        details={props.details}
      />
      <PlayerInput
        player={props.player}
        setPlayer={props.setPlayer}
        itemKey={props.itemKey}
        answerItem={props.answerItem}
        setAnswerItem={props.setAnswerItem}
        answerAction={props.answerAction}
        setAnswerAction={props.setAnswerAction}
        startGame={props.startGame}
        playerMove={props.playerMove}
      />
      <Inventory inventory={props.player.inventory} />
      <Instructions
        instructions={props.instructions}
        setInstructions={props.setInstructions}
      />
      <About about={props.about} setAbout={props.setAbout} />
    </div>
  );
}
export default PlayContainer;
