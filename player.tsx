import {
  AnimatedSprite2D,
  CharacterBody2D,
  CollisionShape2D,
  createCircleShape2D,
  createSpriteFrames,
  createTexture2D,
  Vector2,
} from "@gdx/godact";
import { GlobalMethods } from "@gdx/godact/methods";

export default function Player() {
  return (
    <CharacterBody2D
      scale={Vector2(0.5, 0.5)}
      name="Player"
      position={Vector2(-70, 0)}
      onPhysicsProcess={(delta) => {
        const JUMP_VELOCITY = -250;

        GlobalMethods.velocity += GlobalMethods.get_gravity() * delta;
        GlobalMethods.rotation = GlobalMethods.velocity.y * 0.001;

        if (
          GlobalMethods.Input.is_action_just_pressed("ui_up") ||
          GlobalMethods.Input.is_action_just_pressed("ui_accept")
        ) {
          GlobalMethods.velocity.y = JUMP_VELOCITY;
          GlobalMethods.rotation = 0;
        }

        const collision = GlobalMethods.move_and_slide();

        if (collision) {
          GlobalMethods.get_tree().reload_current_scene();
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
