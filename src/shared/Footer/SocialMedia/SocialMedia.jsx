import { Link } from "react-router-dom";

function SocialMedia() {
  return (
    <>
      <div className="grid grid-cols-4  justify-evenly">
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link
            target="_blank"
            to="https://www.instagram.com/mosaicholding_corporation/"
          >
            <i className="fa-brands fa-instagram text-lightColor rounded-full p-2 text-lg border-lightColor border-[3px]"></i>
          </Link>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link
            target="_blank"
            to="https://www.facebook.com/profile.php?id=61565919099335"
          >
            <i className="fa-brands fa-facebook text-lightColor rounded-full p-2 text-lg border-lightColor border-[3px]"></i>
          </Link>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link target="_blank" to="https://x.com/MosaicHoldingCo">
            <i className="fa-brands fa-x-twitter text-lightColor rounded-full p-2 text-lg border-lightColor border-[3px]"></i>
          </Link>
        </div>
        <div className="col-span-1 mx-2  flex justify-center items-center">
          <Link
            target="_blank"
            to="https://www.linkedin.com/company/mosaic-holding-corporation/?viewAsMember=true"
          >
            <i className="fa-brands fa-linkedin text-lightColor rounded-full p-2 text-lg border-lightColor border-[3px]"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SocialMedia;
