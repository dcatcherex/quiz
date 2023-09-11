import { Mail } from "lucide-react";
import { Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export const LandingFooter = () => {
  return (
    <footer className="dark:bg-slate-950  ">
      <div className="max-w-[1280px] mx-auhref grid grid-cols-1 sd:grid-cols-2 md:grid-cols-4 p-12  text-slate-700 gap-8 dark:text-white">
        <div><Image width="200" height="200" src="/logo.png" alt="" /></div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio enim, tenetur pariatur facere quas itaque dolores deserunt adipisci facilis cumque!
        </div>

        <div>
          <h4 className="font-bold text-[#1C5BB7]" >Contact Info</h4>
          <ul className="list-none mt-4 ml-0">
            <li>
              <span>Fb:</span> Learn Cloud
            </li>
            <li>
              <span>Youtube:</span> Learn Cloud
            </li>
            <li>
              <span>Line:</span> @learncloud
            </li>
            <li>
              <span>IG:</span> learncloud
            </li>
          </ul>
          <div className="flex gap-2 mt-4">
            <Mail className="h-6 w-6" />
            <div>
              <p className="font-semibold text-[#1C5BB7]">Email:</p>
              <p>info@learncloud.com</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Smartphone className="h-6 w-6" />
            <div>
              <p className="font-semibold text-[#1C5BB7]">Phone:</p>
              <p>12345678</p>
            </div>
          </div>
        </div>
        {/* link */}
        <div>
          <h4 >Policy Links</h4>
          <div className="flex flex-col mt-4 underline underline-offset-4">
            <Link href={"privacy"}>Privacy Policy</Link>
            <Link href={"cookies"}>Cookies Policy</Link>
            <Link href={"term"}>Terms & Conditions </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

