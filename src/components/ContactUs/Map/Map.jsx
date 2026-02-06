import "./Map.css";
function Map() {
  return (
    <>
      <div className="my-10">
        <iframe
          className="border-map"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.6818542152027!2d-114.06869137644054!3d51.040496471710824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371701da5015555%3A0x92b800ab28830384!2zMTMwMiA0IFN0IFNXICMyMDAsIENhbGdhcnksIEFCIFQyUiAwVjjYjCDZg9mG2K_Ypw!5e0!3m2!1sar!2seg!4v1731335283172!5m2!1sar!2seg"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default Map;
