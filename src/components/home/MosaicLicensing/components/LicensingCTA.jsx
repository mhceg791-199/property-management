import { Plus, ArrowRight } from "lucide-react";

const LicensingCTA = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto mt-6 md:mt-12 relative z-10 border border-lightColor/20 p-8 md:p-12 bg-mainColor/5 overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <Plus size={80} className="text-mainColor rotate-12" />
      </div>

      <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
        <div className="md:col-span-8 space-y-4">
          <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-mainColor">
            Looking for a licensed, <br />
            <span className="text-mainGold font-light">
              disciplined approach
            </span>{" "}
            to property management?
          </h3>
          <p className="paragraph text-mainColor/60 font-medium">
            Discover how Mosaic Property Management can support your asset.
          </p>
        </div>

        <div className="md:col-span-4 flex md:justify-end">
          <button
            onClick={() => {
              onNavigate("/contact-us");
              window.scrollTo(0, 0);
            }}
            className="group relative flex items-center gap-4 bg-mainColor text-white px-8 py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-mainGold hover:text-mainColor transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">Connect With Us</span>
            <ArrowRight
              size={16}
              className="relative z-10 group-hover:translate-x-2 transition-transform duration-500"
            />
            <div className="absolute top-0 -left-full w-full h-full bg-mainGold group-hover:left-0 transition-all duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LicensingCTA;
