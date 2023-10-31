export const ExperienceForm = ({
  formData,
  selectedExperience,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <form id="experienceForm" className="mb-4" onSubmit={handleSubmit}>
      <input type="hidden" value="-1" id="idInput" name="idInput" />
      <div className="formControl">
        <label htmlFor="companyName">Company Name: </label>
        <input
          required
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
        />
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
