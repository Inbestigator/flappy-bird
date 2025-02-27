import { createTexture2D, Sprite2D, Vector2Type } from "@gdx/godact";

export default function Background({ position }: { position?: Vector2Type }) {
  return (
    <Sprite2D
      position={position}
      texture={createTexture2D("res://sprites/bg-day.png")}
      z_index={-1}
    />
  );
}
