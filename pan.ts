"extends Node2D";

// deno-lint-ignore no-explicit-any
const Godot: any = null;

export function _physics_process(_delta: number) {
  Godot.position.x += 1;
}
