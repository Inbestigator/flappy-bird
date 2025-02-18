import { createGodactScene } from "@gdx/godact";
import MainScene from "./main.tsx";
import Pipe from "./pipe.tsx";
import Background from "./bg.tsx";

createGodactScene(MainScene(), "./game/main.tscn");
createGodactScene(Pipe(), "./game/pipe.tscn");
createGodactScene(Background({}), "./game/bg.tscn");
