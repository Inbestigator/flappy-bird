"extends Node2D";

// deno-lint-ignore no-explicit-any
const Godot: any = null;

const pipeScene = Godot.preload("res://pipe.tscn");
const bgScene = Godot.preload("res://bg.tscn");
let timer = 0.5;
let i = 0;

export function _physics_process(delta: number) {
  timer += delta;
  if (timer >= 0.5) {
    timer = 0;
    i += 1;
    spawnPipe();
  }
}

function spawnPipe() {
  const newPipe = pipeScene.instantiate();
  newPipe.position = Godot.Vector2(228 * i, Godot.randf_range(128, 384));
  Godot.add_child(newPipe);
  const newBg = bgScene.instantiate();
  newBg.position = Godot.Vector2(getNthX(), 288);
  Godot.add_child(newBg);
}
function getNthX() {
  const k = i - 1;
  const diff = 288 * k;
  return 128 + diff;
}
