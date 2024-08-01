import { Info, Trash2, Recycle, Wrench, ShoppingBag } from 'lucide-react';
import { FaInstagram, FaDiscord, FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const EWasteInfoPage = () => {
  const strategies = [
    { icon: <Recycle />, text: "Recycle your old electronics at certified e-waste recycling centers" },
    { icon: <Wrench />, text: "Repair and upgrade devices instead of replacing them" },
    { icon: <ShoppingBag />, text: "Buy refurbished or second-hand electronics when possible" },
    { icon: <Trash2 />, text: "Donate working electronics to schools or charities" },
  ];

  return (
    <div>
      <div className="bg-green-200 p-5 fixed top-0 left-0 w-full z-10 mb-2">
        <h1 className="text-4xl font-bold text-center">E-Waste Management</h1>
      </div>

      <div className="max-w-4xl mx-auto p-6 pt-20 mt-12">
        <h1 className="text-3xl font-bold mb-6 text-center">E-Waste: A Growing Environmental Concern</h1>
        
        <div className="bg-blue-100 p-4 rounded-lg mb-6 flex items-center">
          <Info className="text-blue-500 mr-3" size={24} />
          <p className="text-lg">
            <strong>Did you know?</strong> 50 million tons of e-waste is produced each year, and 85% of that ends up in landfills.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Strategies to Reduce E-Waste</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-start">
              <div className="text-green-500 mr-3 mt-1">{strategy.icon}</div>
              <p>{strategy.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg mb-10">
            By implementing these strategies, we can significantly reduce e-waste and its environmental impact. Let&#39;s work together to create a more sustainable future!
          </p>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center">Join the University of Toronto Mississauga Physics Club</h1>

        <div className="mt-4 text-center">
          <p className='text-lg'>
              The UTM Physics Club hopes to promote the importance of e-waste management and encourage the UTM community to take action. We are committed to raising awareness about the environmental impact of e-waste and providing resources to help individuals reduce their e-waste footprint. 
          </p>
        </div>

        <div className="mt-10 text-center">
        <div className="flex justify-center space-x-4">
          <a 
            href="https://www.instagram.com/utm.physics.club/" 
            className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://discord.gg/558RfzrPNj" 
            className="inline-block bg-gradient-to-r bg-[#7289da] text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaDiscord size={24} />
          </a>
          <a 
            href="https://www.facebook.com/people/UTM-Physics-Club/61563066107515/" 
            className="inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/utm-physics-club" 
            className="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://x.com/utm_physics" 
            className="inline-block bg-black text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>


      </div>
    </div>
  );
};

export default EWasteInfoPage;