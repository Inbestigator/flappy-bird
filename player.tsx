import {
  CharacterBody2D,
  CollisionShape2D,
  createRectangleShape2D,
  createTexture2D,
  Sprite2D,
  Vector2,
} from "@inbestigator/godact";
import "./player.ts";

export default function Player() {
  return (
    <CharacterBody2D
      scale={Vector2(0.5, 0.5)}
      name="Player"
      position={Vector2(0, 256)}
      script="./player.ts"
    >
      <Sprite2D
        name="Sprite2D"
        texture={createTexture2D({ path: "res://flap-bird.png" })}
        scale={Vector2(128, 128)}
        texture_filter={1}
      />
      <CollisionShape2D
        name="CollisionShape2D"
        shape={createRectangleShape2D({ size: Vector2(127, 127) })}
      />
    </CharacterBody2D>
  );
}
