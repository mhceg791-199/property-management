const ManageCard = ({ item }) => {
  return (
    <div className="manage-card relative h-96 bg-white border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl group cursor-pointer">
      {/* 1. Image Layers */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20 grayscale 
                   group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 
                   ease-in-out transform group-hover:scale-110"
        style={{ backgroundImage: `url(${item.image})` }}
      />

      {/* 2. Dynamic Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent 
                      opacity-90 group-hover:from-mainColor group-hover:via-mainColor/70 group-hover:opacity-90 
                      transition-all duration-500 z-[5]"
      />

      {/* 3. Decorative Border */}
      <div className="absolute inset-0 border border-transparent group-hover:border-mainGold/40 transition-colors duration-500 z-20" />

      {/* 4. Content Content Content */}
      <div className="relative z-30 p-8 flex flex-col justify-end h-full">
        <div className="flex items-center gap-4 mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
          <div className="p-2 border border-mainGold/40 text-mainGold bg-mainGold/5 group-hover:bg-mainGold group-hover:text-white transition-all">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold uppercase tracking-tight text-mainColor group-hover:text-white transition-colors">
            {item.title}
          </h3>
        </div>

        <p className="text-gray-600 group-hover:text-white/90 text-base leading-relaxed border-l-2 border-mainGold pl-4 transform group-hover:-translate-y-1 transition-all duration-500 delay-75">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default ManageCard;
