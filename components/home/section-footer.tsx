import { Mail } from "lucide-react";
import { Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const slogan = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio enim, tenetur pariatur facere quas itaque dolores deserunt adipisci faciliscumque!"

const emal = "info@learncloud.com"
const phone = "12345678"
const socialContact = [
  {
  social: "Fb",
  link: "/",
  name: "Learn Cloud"
  },
  {
  social: "Youtube",
  link: "/",
  name: "Learn Cloud"
  },
  {
  social: "Line",
  link: "/",
  name: "Learn Cloud"
  },
  {
  social: "IG",
  link: "/",
  name: "Learn Cloud"
  },
  
];

const policy = [
  { title: "Privacy Policy",
    link: "/"
  },
  { title: "Cookies Policy",
    link: "/"
  },
  { title: "Terms & Conditions",
    link: "/"
  },
  
]

export const SectionFooter = () => {
  return (
    <footer className="dark:bg-slate-950  ">
      <div className="max-w-[1280px] mx-auhref grid grid-cols-1 sd:grid-cols-2 md:grid-cols-4 p-12  text-slate-700 gap-8 dark:text-white">
        <div>
          <Image width="200" height="200" src="/logo_text.svg" alt="" />
        </div>
        <div>
          {slogan}
        </div>

        <div>
          <h4 className="font-bold text-[#1C5BB7]">Contact Info</h4>
          <ul className="list-none mt-4 ml-0">
          {socialContact.map((item) => (
            <li key={item.social}>
              <span>{item.social}:</span> {item.name}
            </li>
          ))}
          </ul>
          <div className="flex gap-2 mt-4">
            <Mail className="h-6 w-6" />
            <div>
              <p className="font-semibold text-[#1C5BB7]">Email:</p>
              <p>{emal}</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Smartphone className="h-6 w-6" />
            <div>
              <p className="font-semibold text-[#1C5BB7]">Phone:</p>
              <p>{phone}</p>
            </div>
          </div>
        </div>
        {/* link */}
        <div>
          <h4>Policy Links</h4>
          <div className="flex flex-col mt-4 underline underline-offset-4">
            {policy.map((item) => (
              <Link key={item.title} href={item.link}>{item.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
