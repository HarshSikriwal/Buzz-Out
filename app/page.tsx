import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import GetSound from "./components/GetSound";
import Frankenstein from "../public/Frankenstein.png";
import Image from "next/image";
function Home() {
  return (
    <div className="mx-8">
      <Card className="w-[380px] bg-[#7E22CE]/60 p-4">
        <CardContent className="flex justify-between">
          <Image src={Frankenstein} alt="Mind Blown" height={190} width={100} />
          <div className="flex flex-col justify-center gap-6 p-4">
            <CardTitle className="text-3xl">Just Play</CardTitle>

            <GetSound />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
