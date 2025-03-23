import { motion } from "framer-motion";
import {CBS, FOX, NBC, ABC} from '../assets/images'
const logos = [
  { src: CBS, alt: "CBS News" },
  { src: ABC, alt: "ABC" },
  { src: NBC, alt: "NBC" },
  { src: FOX, alt: "Fox" }
];

export default function Companies() {
  return (
    <div className="bg-white flex flex-col items-center justify-center p-6">
        <div className="flex items-center">
            <div className="w-[80%]" >
                <p className="text-[#49C7AB] uppercase text-[24px] font-[500] font-cabinet">As Seen</p>
                <h2 className="text-[#1E293B] text-[52px] font-[500] font-cabinet">Featured On</h2>
            </div>
            <div className="overflow-hidden mt-5 w-full">
                <motion.div
                    className="flex space-x-10 w-max"
                    animate={{ x: [0, -300] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                >
                {logos.concat(logos).map((logo, index) => (
                    <img key={index} src={logo.src} alt={logo.alt} className="h-10" />
                ))}
                </motion.div>
            </div>
        </div>
        
    </div>
  );
}
