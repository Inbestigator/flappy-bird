import {
  Area2D,
  CollisionShape2D,
  createGodactScene,
  createRectangleShape2D,
  createTexture2D,
  Node2D,
  Sprite2D,
  StaticBody2D,
  Vector2,
} from "@gdx/godact";

function Pipe() {
  return (
    <Node2D script="./parallax.ts" name="Pipe">
      <StaticBody2D
        position={Vector2(0, -320)}
        name="TopPipe"
      >
        <CollisionShape2D
          name="CollisionShape2D"
          shape={createRectangleShape2D(Vector2(75, 512))}
        />
        <Sprite2D
          name="Sprite2D"
          texture={createTexture2D("res://sprites/pipe-green.png")}
          scale={Vector2(1.6, 1.6)}
          texture_filter={1}
          flip_v
        />
      </StaticBody2D>
      <Area2D name="Area2D" script="./enteredPipe.ts">
        <CollisionShape2D
          name="CollisionShape2D"
          shape={createRectangleShape2D(Vector2(5, 64))}
        />
      </Area2D>
      <StaticBody2D
        position={Vector2(0, 320)}
        name="BottomPipe"
      >
        <CollisionShape2D
          name="CollisionShape2D"
          shape={createRectangleShape2D(Vector2(75, 512))}
        />
        <Sprite2D
          name="Sprite2D"
          texture={createTexture2D("res://sprites/pipe-green.png")}
          scale={Vector2(1.6, 1.6)}
          texture_filter={1}
        />
      </StaticBody2D>
    </Node2D>
  );
}

createGodactScene(<Pipe />, "./game/pipe.tscn");
