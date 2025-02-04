import {
  CollisionShape2D,
  createRectangleShape2D,
  createTexture2D,
  Sprite2D,
  StaticBody2D,
  Vector2,
  Vector2Type,
} from "@inbestigator/godact";
import "./moveBack.ts";

export default function Floor({
  addScript = false,
  position,
  height,
}: {
  addScript?: boolean;
  position: Vector2Type;
  height: number;
}) {
  return (
    <StaticBody2D
      script={addScript ? "./moveBack.ts" : ""}
      position={position}
      name={"Floor" + position.x + position.y}
    >
      <CollisionShape2D
        name="CollisionShape2D"
        shape={createRectangleShape2D({ size: Vector2(64, height) })}
      />
      {addScript && (
        <Sprite2D
          name="Sprite2D"
          texture={createTexture2D({ path: "res://flap-pipe.png" })}
          scale={Vector2(64, height)}
          texture_filter={1}
        />
      )}
    </StaticBody2D>
  );
}
