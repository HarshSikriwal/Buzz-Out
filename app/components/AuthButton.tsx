"use client";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { FcGoogle } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";

const AuthButton = ({ session }: { session: Session | null }) => {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  return session ? (
    <button onClick={handleSignOut}>
      <FiLogOut />
    </button>
  ) : (
    <button onClick={handleSignIn}>
      <FcGoogle />
    </button>
  );
};

export default AuthButton;
