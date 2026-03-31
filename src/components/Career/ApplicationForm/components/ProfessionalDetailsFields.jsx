
const ProfessionalDetailsFields = ({ formData, handleChange, disabled }) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
        Professional Details
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Years of Experience *
          </label>
          <select
            name="experience"
            required
            value={formData.experience}
            onChange={handleChange}
            disabled={disabled}
            className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">Select Experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Portfolio URL (Optional)
          </label>
          <input
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            disabled={disabled}
            className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="https://yourportfolio.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cover Letter / Why Join Us? *
          </label>
          <textarea
            name="coverLetter"
            required
            value={formData.coverLetter}
            onChange={handleChange}
            disabled={disabled}
            rows={6}
            className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Tell us about yourself and why you want to join our team..."
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetailsFields;