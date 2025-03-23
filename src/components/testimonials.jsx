import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {C1, C2, C3, StarIcon, LeftIcon, RightIcon} from '../assets/images'
const testimonials = [
  {
    name: "Nicholas O.",
    review:
      "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
    image: C1,
  },
  {
    name: "Christine M.",
    review:
      "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
    image: C2,
  },
  {
    name: "Heather B.",
    review:
      "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
    image: C3,
  },
  {
    name: "Nicholas O.",
    review:
      "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed. I was so surprised. Thank you Recovery Delivered!",
    image: C1,
  },
  {
    name: "Christine M.",
    review:
      "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple. Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
    image: C2,
  },
  {
    name: "Heather B.",
    review:
      "If you need help. Go here. Get online. Sign up. Pay the fees and never look back. I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
    image: C3,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col py-10 px-5 md:px-20">
      <h2 className="text-[#49C7AB] text-[24px] font-[500] font-cabinet uppercase">Our Client's</h2>
      <div className="flex justify-between">
        <h1 className="text-[52px] text-[#1E293B] font-[500] font-cabinet">Testimonials</h1>
        <div className="flex gap-2 self-center">
            <button
            onClick={prevTestimonial}
            className="bg-[#fff] border border-[#475569] w-[32px] h-[32px] rounded-[50%] flex justify-center items-center"
            >
                <img src={LeftIcon} className="w-[20px] h-[20px]" />
            </button>
            <button
            onClick={nextTestimonial}
            className="bg-[#49C7AB] border border-[#49C7AB] w-[32px] h-[32px] rounded-[50%] flex justify-center items-center"
            >
                <img src={RightIcon} className="w-[20px] h-[20px]" />
            </button>
        </div>
      </div>
      <div className="relative w-full mt-6 overflow-hidden">
        <motion.div
          className="flex transition-transform"
          animate={{ x: `-${index * 100}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="flex-none w-full md:w-1/3 p-4"
              whileHover={{ scale: 1.05, rotate: 15  }}
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                    <img src={StarIcon} alt="icon" />
                  
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
                <div className="flex gap-x-10 items-center ">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                    />
                     <h4 className="text-[20px] font-[500] font-cabinet">{testimonial.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
}
