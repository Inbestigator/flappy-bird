"extends Area2D";

// deno-lint-ignore no-explicit-any
const Godot: any = null;

export function _ready() {
  Godot.connect("body_entered", _on_body_entered);
}

export function _on_body_entered(_body: never) {
  const scoreButton = Godot.get_node("../../Camera/Score");
  if (scoreButton) {
    scoreButton.text = Godot.str(Godot.int(scoreButton.text) + 1);
  }
}
