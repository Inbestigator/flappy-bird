"extends CharacterBody2D";

// deno-lint-ignore no-explicit-any
const Godot: any = null;

const JUMP_VELOCITY = -250;

export function _physics_process(delta: number) {
  Godot.velocity += Godot.get_gravity() * delta;
  Godot.rotation = Godot.velocity.y * 0.001;

  if (
    Godot.Input.is_action_just_pressed("ui_up") ||
    Godot.Input.is_action_just_pressed("ui_accept")
  ) {
    Godot.velocity.y = JUMP_VELOCITY;
    Godot.rotation = 0;
  }

  const collision = Godot.move_and_slide();

  if (collision) {
    Godot.get_tree().reload_current_scene();
  }
}
