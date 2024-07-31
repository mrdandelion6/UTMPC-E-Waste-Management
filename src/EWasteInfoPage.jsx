import { Info, Trash2, Recycle, Tool, ShoppingBag } from 'lucide-react';

const EWasteInfoPage = () => {
  const strategies = [
    { icon: <Recycle />, text: "Recycle your old electronics at certified e-waste recycling centers" },
    { icon: <Tool />, text: "Repair and upgrade devices instead of replacing them" },
    { icon: <ShoppingBag />, text: "Buy refurbished or second-hand electronics when possible" },
    { icon: <Trash2 />, text: "Donate working electronics to schools or charities" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
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
        <p className="text-lg">
          By implementing these strategies, we can significantly reduce e-waste and its environmental impact.
          Let&#39;s work together to create a more sustainable future!
        </p>
      </div>
    </div>
  );
};

export default EWasteInfoPage;