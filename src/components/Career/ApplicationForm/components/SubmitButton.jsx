import React from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const SubmitButton = ({ loading, success, disabled }) => {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        disabled={disabled || loading || success}
        className={`group relative px-12 py-4 font-semibold rounded-lg overflow-hidden transition-all duration-300 disabled:cursor-not-allowed ${
          success
            ? "bg-green-600 text-white"
            : "bg-mainColor text-white hover:bg-mainColor/90 hover:shadow-xl"
        } ${loading ? "opacity-75" : ""}`}
      >
        <span className="relative z-10 flex items-center gap-3">
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : success ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Submitted!
            </>
          ) : (
            <>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Submit Application
            </>
          )}
        </span>
        
        {!loading && !success && (
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default SubmitButton;