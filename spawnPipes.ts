"extends Node2D";

import { GDMethods } from "@gdx/godact/methods";

const pipeScene = GDMethods.preload("res://pipe.tscn");
const bgScene = GDMethods.preload("res://bg.tscn");
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
  newPipe.position = GDMethods.Vector2(
    228 * i,
    GDMethods.randf_range(128, 384),
  );
  GDMethods.add_child(newPipe);
  const newBg = bgScene.instantiate();
  newBg.position = GDMethods.Vector2(getNthX(), 288);
  GDMethods.add_child(newBg);
}
function getNthX() {
  const k = i - 1;
  const diff = 288 * k;
  return 128 + diff;
}
