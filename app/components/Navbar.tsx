import Link from "next/link";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import AuthButton from "./AuthButton";

import { cookies, headers } from "next/headers";
import { NextFont } from "@next/font";
async function Navbar({ hennyPenny }: { hennyPenny: NextFont }) {
  // console.log(cookies());
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  let path = "M 0 0 V 80 M 0 80 c 80 -40 80 40 160 0 ";
  // console.log(error, session);
  function createPath(path: string) {
    for (let i = 3; i < 3000 / 80 + 1; i += 2) {
      path += `S ${i * 80} 120 ${i * 80 + 80} 80 `;
    }
    return path;
  }
  // console.log(session);
  path = createPath(path) + "v -80 H 0";

  return (
    <nav className="relative mb-10">
      <svg
        className="fill-purple-700"
        width="100%"
        height="120"
        strokeWidth="5"
      >
        <path d={path} />
      </svg>
      <div className="absolute top-0 left-0 z-10">
        <Link href="./" className="flex mt-3 gap-2 ml-4 items-center">
          <Image className="" src={Logo} alt="logo" height={60} width={80} />
          <h1 className={`text-4xl text-yellow-300 ${hennyPenny.className}`}>
            Buzz Out
          </h1>
        </Link>
      </div>
      <div className="font-bold absolute top-4 right-4 z-10 items-center text-3xl text-yellow-300">
        <AuthButton session={session} />
      </div>
    </nav>
  );
}

export default Navbar;
