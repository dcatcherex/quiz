
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { ThemeToggle } from "./ThemeToggle";
import { getAuthSession } from "@/lib/nextauth";
import SighInButton from "./SighInButton";
import UserAccountNav from "./UserAccountNav";



const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});


type Props = {};

export const Navbar = async (props: Props) => {

  const session = await getAuthSession()
  // console.log(session?.user)
  

  return (
    <nav className=" bg-transparent max-w-[1280px] mx-auto">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-x-2">
            <Link href="/" className="flex items-center">
              <div className="relative h-[32px] w-[220px] mr-4">
                <Image fill alt="logo my craft ai" src="/logo_horizontal.svg" />
              </div>
              {/* <h3 className="uppercase font-bold mr-8">Learn Cloud</h3> */}
            </Link>
        
        </div>
        <div>
              <ul className="flex space-x-14">
                <li className="p-4 border-b-4 border-transparent hover:border-b-4 hover:border-[#1C5BB7] transition"><Link href="/">Home</Link></li>
                <li className="p-4 border-b-4 border-transparent hover:border-b-4 hover:border-[#1C5BB7] transition"><Link href="/dashboard">Dashboard</Link></li>
                <li className="p-4 border-b-4 border-transparent hover:border-b-4 hover:border-[#1C5BB7] transition"><Link href="/exam">Exam</Link></li>
              </ul>
            </div>
        <div className="flex items-center gap-x-2">
        <ThemeToggle className="mr-4" />
          {session?.user ? ( <UserAccountNav user={session.user}/>):(
            <SighInButton text='Log In'/>
          )}
        
        </div>
      </div>
    </nav>
  );
};
