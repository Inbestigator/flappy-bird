"extends Area2D";

import { GlobalMethods } from "@gdx/godact/methods";

export function _ready() {
  GlobalMethods.connect("body_entered", _on_body_entered);
}

export function _on_body_entered(_body: never) {
  const scoreButton = GlobalMethods.get_node("../../Camera/Score");
  if (scoreButton) {
    scoreButton.text = GlobalMethods.str(
      GlobalMethods.int(scoreButton.text) + 1,
    );
  }
}
