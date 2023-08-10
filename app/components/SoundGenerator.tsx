"use client";
import { useState, useRef } from "react";
import { GrPlayFill } from "react-icons/gr";
import { MdOutlineReplay } from "react-icons/md";

const SoundGenerator = ({ soundFiles }: { soundFiles: string[] }) => {
  const [randomSound, setRandomSound] = useState(
    soundFiles[Math.floor(Math.random() * soundFiles.length)]
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div>
      <audio
        ref={audioRef}
        controls
        src={randomSound}
        onPause={() =>
          setRandomSound(
            soundFiles[Math.floor(Math.random() * soundFiles.length)]
          )
        }
      ></audio>
      {/* <button onClick={togglePlay}>
        {isPlaying ? <MdOutlineReplay /> : <GrPlayFill />}
      </button> */}
    </div>
  );
};

export default SoundGenerator;
