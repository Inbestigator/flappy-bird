import {
  Camera2D,
  createGodactScene,
  createTexture2D,
  Node2D,
  Sprite2D,
  Vector2,
} from "@inbestigator/godact";
import Player from "./player.tsx";
import Floor from "./floor.tsx";
import Win from "./win.tsx";

function generatePipeHeights(num: number) {
  const minHeight = 2;
  const maxHeight = 6;
  let currentHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) +
    minHeight;
  let modifier = currentHeight === minHeight
    ? 1
    : currentHeight === maxHeight
    ? -1
    : Math.random() < 0.5
    ? -1
    : 1;

  return Array.from({ length: num }, () => {
    const step = Math.random() < 0.5 ? 2 : -2;
    let newHeight = currentHeight + step;

    newHeight = Math.max(minHeight, Math.min(maxHeight, newHeight));

    modifier = newHeight === minHeight
      ? 1
      : newHeight === maxHeight
      ? -1
      : Math.random() < 0.5
      ? -1
      : 1;

    currentHeight = newHeight;
    return [currentHeight, modifier];
  });
}

function generateLevel() {
  const layout = [
    "X",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "X",
  ];
  const pipeHeights = generatePipeHeights(8);
  for (let i = 1; i < layout.length - 1; i++) {
    for (let j = 0; j < pipeHeights.length; j++) {
      layout[i] = layout[i] +
        ((pipeHeights[j][0] === i ||
            (pipeHeights[j][0] + pipeHeights[j][1]) === i)
          ? "."
          : (pipeHeights[j][0] - i === 1 ||
              (pipeHeights[j][0] + pipeHeights[j][1]) - i === 1)
          ? "'"
          : (pipeHeights[j][0] - i === -1 ||
              (pipeHeights[j][0] + pipeHeights[j][1]) - i === -1)
          ? ","
          : ".") +
        "..";
    }
    layout[i] = layout[i] + "$";
  }
  return layout.join("\n");
}

function MainScene() {
  const layout = generateLevel();
  const children: JSX.Element[] = [];
  const split = layout.split("\n");
  for (let y = 0; y < split.length; y++) {
    for (let x = 0; x < split[y].length; x++) {
      switch (split[y][x]) {
        case "'":
        case ",":
          children.push(
            <Floor
              addScript
              height={split[y][x] === "'" ? y * 64 : ((9 - y) * 64)}
              key={`${x},${y}`}
              position={Vector2(
                64 * x,
                split[y][x] === "'"
                  ? (y * 32) + 32
                  : ((9 * 64) - ((9 - y) * 32)) - 32,
              )}
            />,
          );
          break;
        case "X":
          children.push(
            <Floor
              height={64}
              key={`${x},${y}`}
              position={Vector2(
                64 * x,
                64 * y,
              )}
            />,
          );
          break;
        case "$":
          children.push(
            <Win
              addScript
              key={`${x},${y}`}
              position={Vector2(64 * x, 64 * y)}
            />,
          );
          break;
      }
    }
  }
  return (
    <Node2D name="Main">
      <Sprite2D
        name="Background"
        position={Vector2(816, 288)}
        script="./moveBack.ts"
        texture={createTexture2D({ path: "res://flap-bg.png" })}
        texture_filter={1}
        scale={Vector2(65, 64)}
      />
      <Sprite2D
        name="ExtraBackground"
        position={Vector2(1328, 288)}
        script="./moveBack.ts"
        texture={createTexture2D({ path: "res://flap-bg.png" })}
        texture_filter={1}
        scale={Vector2(65, 64)}
        flip_h
      />
      <Player />
      <Camera2D position={Vector2(128, 288)} name="Camera2D" />
      {children}
    </Node2D>
  );
}

createGodactScene(<MainScene />, "./game/main.tscn");
