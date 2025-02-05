import {
  AnimatedSprite2D,
  CharacterBody2D,
  CollisionShape2D,
  createCircleShape2D,
  createSpriteFrames,
  createTexture2D,
  Vector2,
} from "@inbestigator/godact";

export default function Player() {
  return (
    <CharacterBody2D
      scale={Vector2(0.5, 0.5)}
      name="Player"
      position={Vector2(-80, 0)}
      script="./player.ts"
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
