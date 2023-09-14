import Image from "next/image";


const title = "Don&apos;t just take our word for it"

const testimonial = [
  {
    name: "Jacob Jones",
    title: "Student",
    description:" I&apos;ve tried a few TOEIC prep apps but this one stands out. The practice tests are comprehensive and the performance tracking feature is a game-changer. My score has improved significantly. Highly recommend! 🤙🏻",
    date:"10/9/66"
  },
  { 
    name: "Wade Warren",
    title: "Student",
    description: "This app took the stress out of my TOEIC preparation. The personalized study plans are incredibly helpful and made studying so much more manageable. I saw improvements in my score after just a few weeks!",
    date:"10/9/66"
  },
  {
    name: "Bessie Cooper",
    title: "Student",
    description: "The wide range of practice questions and tests helped me understand exactly where I needed to focus my efforts. My reading and listening skills have drastically improved and I feel well-prepared for the actual test.",
    date:"10/9/66"
  },
  {
    name: "Esther Howard",
    title: "Student",
    description: "Not only does this app offer great study materials, but it&apos;s also very user-friendly. The layout is clear and easy to navigate, which made my study sessions more enjoyable and productive.",
    date:"10/9/66"
  },
  {
    name: "Albert Flores",
    title: "Student",
    description: "If you're preparing for TOEIC, this app is a must-have. It has everything you need - practice tests, performance tracking, study materials, and more. Plus, it's convenient to use anytime, anywhere.",
    date:"10/9/66"
  },
  {
    name: "Jerome Bell",
    title: "Student",
    description: "I can't thank this app enough for helping me score high on TOEIC. The practice tests mirrored the actual exam very closely and the performance insights were spot on. I went into the test feeling confident and it paid off!",
    date:"10/9/66"
  },
  
]
export const SectionTestimonial = () => {
  return (
    <section className="relative pt-20 pb-32  overflow-hidden dark:bg-slate-900">
      <div className="relative z-10 container px-4 mx-auto">
        <h2 className="mb-16 text-4xl  font-bold font-heading text-center tracking-px-n leading-tight text-slate-700 dark:text-white">
          {title}
        </h2>
        <div className="flex flex-wrap -m-3">
          {testimonial.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-3">
              <div className="p-6 h-full bg-white bg-opacity-60 dark:bg-slate-950 border rounded-md dark:border-[#1C5BB7]">
                <div className="flex flex-col justify-between h-full">
                  <div className="mb-5 block">
                    <div className="flex flex-wrap mb-4 -m-2">
                      <div className="w-auto p-2"></div>
                      <div className="w-auto p-2 pl-0">
                        <h3 className="font-semibold leading-normal text-[#1C5BB7]">
                          {item.name}
                        </h3>
                        <p className="text-gray-500 uppercase">{item.title}</p>
                      </div>
                    </div>
                    <p className="text-md ">
                      {item.description}
                    </p>
                  </div>
                  <div className="block">
                    <p className="text-sm text-gray-500 font-medium">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};