"use client";
import { useState, useRef } from "react";
// import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdReplay, MdPlayArrow } from "react-icons/md";

const SoundGenerator = ({ soundFiles }: { soundFiles: string[] }) => {
  const [randomSound, setRandomSound] = useState(
    soundFiles[Math.floor(Math.random() * soundFiles.length)]
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  function togglePlay() {
    console.log(audioRef);
    if (!isPlaying) {
      audioRef?.current?.play().then(() => {
        setIsPlaying(true);
      });
      // setIsPlaying(true);
    } else {
      audioRef?.current?.pause();
      setRandomSound(soundFiles[Math.floor(Math.random() * soundFiles.length)]);
      setIsPlaying(false);
    }
  }

  return (
    <div className="ml-8">
      <audio ref={audioRef} src={randomSound}></audio>
      <button
        onClick={togglePlay}
        className={`hover:scale-105 addshadow flex bg-white rounded-full w-[70px] h-[70px] justify-center items-center  ${
          isPlaying ? "text-3xl" : `text-6xl`
        }`}
      >
        {isPlaying ? <MdReplay /> : <MdPlayArrow />}
      </button>
    </div>
  );
};

export default SoundGenerator;
