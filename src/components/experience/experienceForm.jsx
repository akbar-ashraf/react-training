export const ExperienceForm = ({
  formData,
  selectedExperience,
  handlerInputChange,
  submitHandler,
}) => {
  return (
    <form id="experienceForm" className="mb-4" onSubmit={submitHandler}>
      <input type="hidden" value="-1" id="idInput" name="idInput" />
      <div className="formControl">
        <label htmlFor="companyName">Company Name: </label>
        <input
          required
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handlerInputChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handlerInputChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handlerInputChange}
        />
      </div>
      <div className="formControl">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          value={formData.description}
          onChange={handlerInputChange}
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
