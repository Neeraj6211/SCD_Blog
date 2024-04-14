import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";


function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
     <footer className="absolute w-full -bottom-0 bg-gray-800 text-white p-6">
       <div className="container mx-auto flex flex-wrap items-center justify-between">
         <div className="w-full md:w-1/2 flex justify-end">
           <div className="flex space-x-4">
             <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
               <SiTwitter className="text-xl" />
             </a>
             <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
               <SiGithub className="text-xl" />
             </a>
             <a href="https://www.instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
               <SiInstagram className="text-xl" />
             </a>
             <a href="https://www.linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
               <FiLinkedin className="text-xl" />
             </a>
           </div>
         </div>
         <div className="w-full mt-4 text-center">
           <p>© </p>
         </div>
       </div>
     </footer>
  );
 }
 
 export default Footer;