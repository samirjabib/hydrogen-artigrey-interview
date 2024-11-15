// import {useState, useEffect} from 'react';
// import Marquee from 'react-fast-marquee';
// import StarIcon from '../../assets/star.svg';

// const PROMISES = [
//   'High Quality Ingredients',
//   'Independently Certified',
//   'Expert Driven',
//   'Shipped Internationally',
//   'Premium Selection',
//   'Sustainable Sourcing',
//   'Eco-Friendly Packaging',
//   'Customer Satisfaction Guaranteed',
//   'Fast Global Delivery',
//   'Quality Assurance',
//   'Ethically Sourced',
//   'Professional Support',
// ];

// export const Promises = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <div className="bg-black w-full h-[50px]">
//       {isClient ? (
//         <Marquee speed={50} gradient={false} className="h-full">
//           {PROMISES.map((promise, i) => (
//             <div key={i} className="flex items-center mx-8">
//               <img src={StarIcon} alt="Star" className="w-4 h-4" />
//               <h2 className="text-white pl-3 whitespace-nowrap">{promise}</h2>
//             </div>
//           ))}
//         </Marquee>
//       ) : (
//         <div className="flex items-center h-full">
//           {PROMISES.slice(0, 2).map((promise, i) => (
//             <div key={i} className="flex items-center mx-8">
//               <img src={StarIcon} alt="Star" className="w-4 h-4" />
//               <h2 className="text-white pl-3 whitespace-nowrap">{promise}</h2>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
