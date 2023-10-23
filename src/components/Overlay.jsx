import { useProgress } from "@react-three/drei";
import React from "react";
import { usePlay } from "../context/Play";

export function Overlay() {
  const { progress } = useProgress();
  const { play, setPlay, hasScroll, end } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 ? (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Ан-225 «Мрія»
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>

          <p className="intro__scroll">
            Листайте нижче щоб почати нашу подорож
          </p>

          <button className="explore" onClick={() => setPlay(true)}>
            Більше
          </button>
        </div>
      ) : null}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">
          Переможемо. Відновимо. Мрія жила, живе, і житиме
        </p>
      </div>
    </div>
  );
}
