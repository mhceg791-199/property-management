const ManageCard = ({ item }) => {
  return (
    <div className="manage-card relative h-96 bg-white border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl group">
      {/* Image Layers */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20 group-hover:opacity-30 transition-opacity duration-500"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20 grayscale 
                   group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 
                   ease-in-out transform group-hover:scale-110"
        style={{ backgroundImage: `url(${item.image})` }}
      />

      <div className="absolute inset-0 border border-transparent group-hover:border-mainGold/40 transition-colors duration-500" />

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col justify-end h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 border border-mainGold/40 text-mainGold bg-mainGold/5">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-mainColor group-hover:text-mainGold transition-colors">
            {item.title}
          </h3>
        </div>

        <p className="text-gray-600 text-base leading-relaxed border-l-2 border-mainGold pl-4">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default ManageCard;
