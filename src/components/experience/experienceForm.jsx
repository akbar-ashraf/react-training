import { useState } from "react";

export const ExperienceForm = ({
  formData,
  selectedExperience,
  handleInputChange,
  handleSubmit,
}) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.startDate) {
      newErrors.startDate = "Start date is required.";
    }
    if (!formData.endDate) {
      newErrors.endDate = "End date is required.";
    } else if (formData.endDate < formData.startDate) {
      newErrors.endDate = "End date should be greater than start date.";
    }

    setErrors(newErrors);
    return newErrors;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    console.log("validationErrors", validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      submitHandler(e);
    }
  };
  return (
    <form id="experienceForm" className="mb-4" onSubmit={onSubmit}>
      <input type="hidden" value="-1" id="idInput" name="idInput" />
      <div className="formControl">
        <label htmlFor="companyName">Company Name: </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
        />
        {errors.companyName && <p className="error">{errors.companyName}</p>}
      </div>
      <div className="formControl">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleInputChange}
        />
        {errors.startDate && <p className="error">{errors.startDate}</p>}
      </div>
      <div className="formControl">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleInputChange}
        />
        {errors.endDate && <p className="error">{errors.endDate}</p>}
      </div>
      <div className="formControl">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="text-center">
        <button type="submit" id="experienceFormBtn" className="btn">
          {selectedExperience ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
};
