import ProfessionalDetailsFields from "./components/ProfessionalDetailsFields";
import ResumeUpload from "./components/ResumeUpload";
import FormMessages from "./components/FormMessages";
import SubmitButton from "./components/SubmitButton";
import { useApplicationForm } from "./hooks/useApplicationForm";
import PersonalInfoFields from "./components/PersonalInfoFields";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

export default function ApplicationForm() {
  const {
    formData,
    resume,
    isDragging,
    loading,
    success,
    error,
    handleChange,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleSubmit,
  } = useApplicationForm();

  return (
    <section id="application-form-section" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="heading font-bold text-mainDark mb-6 tracking-wide">
              <SectionHeader firstWord="Tell Us" />
            </h2>
            <p className="text-gray-600 text-lg md:text-xl">
              Submit your application and let's build something great together
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Personal Information */}
            <PersonalInfoFields
              formData={formData}
              handleChange={handleChange}
              disabled={loading || success}
            />

            {/* Professional Details */}
            <ProfessionalDetailsFields
              formData={formData}
              handleChange={handleChange}
              disabled={loading || success}
            />

            {/* Resume Upload */}
            <ResumeUpload
              resume={resume}
              isDragging={isDragging}
              handleFileChange={handleFileChange}
              handleDragOver={handleDragOver}
              handleDragLeave={handleDragLeave}
              handleDrop={handleDrop}
              disabled={loading || success}
            />

            {/* Messages (Error/Success) */}
            <FormMessages error={error} success={success} />

            {/* Submit Button */}
            <SubmitButton loading={loading} success={success} />

            {/* Footer Text */}
            <p className="text-center text-sm text-gray-500 mt-6">
              We review all applications carefully and will contact qualified
              candidates within 2 weeks.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
