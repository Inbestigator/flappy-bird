import {
  CollisionShape2D,
  createRectangleShape2D,
  StaticBody2D,
  Vector2,
  Vector2Type,
} from "@inbestigator/godact";
import "./moveBack.ts";

export default function Win({
  addScript,
  position,
}: {
  addScript: boolean;
  position: Vector2Type;
}) {
  return (
    <StaticBody2D
      script={addScript ? "./moveBack.ts" : ""}
      position={position}
      name={"Win" + position.x + position.y}
    >
      <CollisionShape2D
        name="CollisionShape2D"
        shape={createRectangleShape2D({ size: Vector2(64, 64) })}
      />
    </StaticBody2D>
  );
}
