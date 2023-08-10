import { cookies } from "next/headers";
import SoundGenerator from "./SoundGenerator";
import { createClient } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const GetSound = async () => {
  const supabase = createClientComponentClient();

  const { data: sounds, error } = await supabase.storage
    .from("random-sounds")
    .list();

  if (!sounds) return;
  //   let randomSound = data[Math.floor(Math.random() * data.length)];

  const FetchSound = (name: string) => {
    let soundData = supabase.storage.from("random-sounds").getPublicUrl(name);
    if (soundData) {
      return soundData.data.publicUrl;
    }
  };
  let soundFiles: string[] = [];
  for (let d of sounds) {
    let sound = FetchSound(d.name);
    if (!sound) return;
    soundFiles.push(sound);
  }

  return <SoundGenerator soundFiles={soundFiles} />;
};

export default GetSound;
