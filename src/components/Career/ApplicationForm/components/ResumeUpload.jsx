import { Upload } from "lucide-react";

const ResumeUpload = ({
  resume,
  isDragging,
  handleFileChange,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  disabled,
}) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-mainDark mb-6 tracking-wide">
        Upload Resume *
      </h3>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
          disabled
            ? "border-gray-200 bg-gray-50 cursor-not-allowed"
            : isDragging
            ? "border-mainColor bg-gray-50"
            : "border-gray-300 hover:border-mainColor"
        }`}
      >
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />

        <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />

        {resume ? (
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-900">{resume.name}</p>
            <p className="text-sm text-gray-500">
              {(resume.size / 1024 / 1024).toFixed(2)} MB
            </p>
            <p className="text-sm text-gray-500">
              Click or drag to replace
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-900">
              Drop your resume here or click to upload
            </p>
            <p className="text-sm text-gray-500">PDF format only (Max 5MB)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;