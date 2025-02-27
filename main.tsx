import {
  Camera2D,
  CollisionShape2D,
  createLabelSettings,
  createRectangleShape2D,
  Label,
  Node2D,
  StaticBody2D,
  Vector2,
} from "@gdx/godact";
import Player from "./player.tsx";
import Background from "./bg.tsx";
import { GDMethods } from "@gdx/godact/methods";

export default function MainScene() {
  return (
    <Node2D name="Main" script="./spawnPipes.ts">
      <Background position={Vector2(416, 288)} />
      <Camera2D
        position={Vector2(128, 288)}
        name="Camera"
        onPhysicsProcess={() => (GDMethods.position.x += 0.5)}
      >
        <Player />
        <Label
          position={Vector2(-18, -200)}
          label_settings={createLabelSettings({ font_size: 64 })}
          name="Score"
          text="0"
        />
        {[-288, 288].map((y) => (
          <StaticBody2D
            key={y}
            position={Vector2(-80, y)}
            name={`Height Limiter ${y}`}
          >
            <CollisionShape2D
              name="CollisionShape2D"
              shape={createRectangleShape2D(Vector2(64, 64))}
            />
          </StaticBody2D>
        ))}
      </Camera2D>
    </Node2D>
  );
}
