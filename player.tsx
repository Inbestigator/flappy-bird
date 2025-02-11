import {
  AnimatedSprite2D,
  CharacterBody2D,
  CollisionShape2D,
  createCircleShape2D,
  createSpriteFrames,
  createTexture2D,
  Vector2,
} from "@gdx/godact";
import { GDMethods } from "@gdx/godact/methods";

export default function Player() {
  return (
    <CharacterBody2D
      scale={Vector2(0.5, 0.5)}
      name="Player"
      position={Vector2(-70, 0)}
      onPhysicsProcess={(delta) => {
        const JUMP_VELOCITY = -250;

        GDMethods.velocity = Vector2(
          GDMethods.velocity.x + GDMethods.get_gravity().x * delta,
          GDMethods.velocity.y + GDMethods.get_gravity().y * delta,
        );
        GDMethods.rotation = GDMethods.velocity.y * 0.001;

        if (
          GDMethods.Input.is_action_just_pressed("ui_up") ||
          GDMethods.Input.is_action_just_pressed("ui_accept")
        ) {
          GDMethods.velocity.y = JUMP_VELOCITY;
          GDMethods.rotation = 0;
        }

        const collision = GDMethods.move_and_slide();

        if (collision) {
          GDMethods.get_tree().reload_current_scene();
        }
      }}
    >
      <AnimatedSprite2D
        name="AnimatedSprite2D"
        animation="flap"
        autoplay="flap"
        sprite_frames={createSpriteFrames({
          frames: [
            {
              duration: 0.125,
              texture: createTexture2D("res://sprites/bird-midflap.png"),
            },
            {
              duration: 0.125,
              texture: createTexture2D("res://sprites/bird-upflap.png"),
            },
            {
              duration: 0.125,
              texture: createTexture2D("res://sprites/bird-midflap.png"),
            },
            {
              duration: 0.125,
              texture: createTexture2D("res://sprites/bird-downflap.png"),
            },
          ],
          name: "flap",
          loop: true,
          speed: 1,
        })}
        texture_filter={1}
        scale={Vector2(4, 4)}
      />
      <CollisionShape2D
        name="CollisionShape2D"
        shape={createCircleShape2D(48)}
      />
    </CharacterBody2D>
  );
}
