import { AlertCircle, CheckCircle } from "lucide-react";

const FormMessages = ({ error, success }) => {
  if (!error && !success) return null;

  return (
    <div className="mb-6 space-y-4">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-700 animate-in fade-in slide-in-from-top-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm">{error}</p>
        </div>
      )}

      {success && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 text-green-700 animate-in fade-in slide-in-from-top-2">
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Application submitted successfully!</p>
            <p className="text-sm mt-1">
              We'll review your application and contact you soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormMessages;