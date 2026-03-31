import { useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../../../../config/api";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  position: "",
  experience: "",
  portfolio: "",
  coverLetter: "",
  siteName: "Mosaic Property Management",
  siteURL: "https://mosaic-propmgmt.com",
};

export const useApplicationForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [resume, setResume] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null); // Clear error on input change
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file
      if (file.type !== "application/pdf") {
        setError("Only PDF files are allowed");
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be less than 5MB");
        return;
      }
      
      setResume(file);
      setError(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }

    setResume(file);
    setError(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setResume(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!resume) {
      setError("Please upload your resume (PDF only)");
      return;
    }

    // Backup for rollback
    const backupForm = { ...formData };
    const backupResume = resume;

    // Optimistic UI update
    setSuccess(true);
    setLoading(false);
    resetForm();

    try {
      // Prepare FormData
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          data.append(key, formData[key]);
        }
      });
      data.append("resume", backupResume);

      // Submit
      await axios.post(API_ENDPOINTS.submitApplication, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    } catch (err) {
      console.error("Submission error:", err);
      
      // Rollback on error
      setSuccess(false);
      setFormData(backupForm);
      setResume(backupResume);
      
      // Set error message
      const errorMessage = err.response?.data?.message || 
                          "Something went wrong. Your data has been restored.";
      setError(errorMessage);
    }
  };

  return {
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
    resetForm,
  };
};