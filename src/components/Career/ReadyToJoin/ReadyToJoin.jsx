import { motion } from "framer-motion";
import Paragraph from "../../shared/Paragraph/Paragraph";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

function ReadyToJoin() {

  return (
    <section className="relative md:py-12 overflow-hidden bg-black text-white">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-mainColor"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      ></motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-mainColor rounded-full blur-3xl opacity-60"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="relative z-10 w-3/4 mx-auto text-center md:py-8">
        <div className="m-auto my-6">
          <SectionHeader firstWord="Ready to " secondWord="Build Tomorrow?" />
        </div>

        <Paragraph
          p="If you’re driven by excellence and eager to leave your mark on the built environment, explore our opportunities. At Mosaic Property Management, we invest in your potential, empower your ambition, and champion your journey to redefine engineering excellence."
        />

        <div className="text-center mt-8 mb-2">
          <button
            // onClick={openModal}
            className="btn-boder-white"
          >
            JOIN OUR TEAM
          </button>
          {/* <CareerModal /> */}
        </div>
      </div>
    </section>
  );
}

export default ReadyToJoin;
