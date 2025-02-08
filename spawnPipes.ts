"extends Node2D";

import { GlobalMethods } from "@gdx/godact/methods";

const pipeScene = GlobalMethods.preload("res://pipe.tscn");
const bgScene = GlobalMethods.preload("res://bg.tscn");
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
  newPipe.position = GlobalMethods.Vector2(
    228 * i,
    GlobalMethods.randf_range(128, 384),
  );
  GlobalMethods.add_child(newPipe);
  const newBg = bgScene.instantiate();
  newBg.position = GlobalMethods.Vector2(getNthX(), 288);
  GlobalMethods.add_child(newBg);
}
function getNthX() {
  const k = i - 1;
  const diff = 288 * k;
  return 128 + diff;
}
