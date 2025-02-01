"extends CharacterBody2D";

// deno-lint-ignore no-explicit-any
const Godot: any = null;

const JUMP_VELOCITY = -250;

export function _physics_process(delta: number) {
  // Add the gravity.
  if (!Godot.is_on_floor()) {
    Godot.velocity += Godot.get_gravity() * delta;
  }

  // Handle jump.
  if (
    Godot.Input.is_action_just_pressed("ui_up") ||
    Godot.Input.is_action_just_pressed("ui_accept")
  ) {
    Godot.velocity.y = JUMP_VELOCITY;
  }

  Godot.move_and_slide();

  for (const i in Godot.range(Godot.get_slide_collision_count())) {
    const collision_info = Godot.get_slide_collision(i).get_collider();
    if (collision_info.name.begins_with("Win")) {
      Godot.get_tree().quit();
    } else {
      Godot.get_tree().reload_current_scene();
    }
  }
}
