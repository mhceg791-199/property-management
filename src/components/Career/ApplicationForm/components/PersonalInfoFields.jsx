import { POSITIONS } from "../../../../data/career/Positions";

const PersonalInfoFields = ({ formData, handleChange, disabled }) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
        Personal Information
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            disabled={disabled}
            className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            disabled={disabled}
            className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            disabled={disabled}
            className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="(305) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Desired Position *
          </label>
          <select
            name="position"
            required
            value={formData.position}
            onChange={handleChange}
            disabled={disabled}
            className="w-full px-4 py-3 text-mainColor rounded-md bg-transparent border border-mainColor focus:outline-none focus:ring-2 focus:ring-mainColor transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">Select Position</option>
            {POSITIONS.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoFields;