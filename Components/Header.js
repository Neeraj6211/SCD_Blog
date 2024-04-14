function Header({ topic, topicName, }) {
  return (
     <>
       {topic && (
         <div className="pt-24 px-12 mx-auto max-w-7xl">
           <div className="px-0.5 md:px-7 pt-6 mx-auto flex justify-between items-center">
             <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200">{topicName}</h3>
           </div>
         </div>
       )}
 
       {!topic && (
         <div className="pt-24 px-12 mx-auto max-w-7xl">
           <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
 
             {/* Adding the image */}
             <img src="https://res.cloudinary.com/duveokt0s/image/upload/v1713001600/samples/cloudinary-logo-vector.svg" alt="Reactangle Image" className="w-full h-64 object-cover" />
           </div>
         </div>
       )}
     </>
  );
 }
 
 export default Header;