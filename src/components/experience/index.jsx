import { useState } from "react";

const initialFormData = {
  companyName: "",
  startDate: "",
  endDate: "",
  description: "",
};

export const ExperienceSection = ({ isEditMode }) => {
  const [experienceData, setExperienceData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const [selectedExperience, setSelectedExperience] = useState(null);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlerEditExperience = (id) => {
    setSelectedExperience(id);
    const editExperience = experienceData.find((item) => item._id == id);
    setFormData(editExperience);
  };

  const handlerDeleteExperience = (id) => {
    const updateExperiencedData = experienceData.filter(
      (item) => item._id != id
    );
    setExperienceData(updateExperiencedData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (selectedExperience) {
      const updatedExperience = experienceData.map((item) => {
        if (item._id === selectedExperience) {
          return { ...item, ...formData };
        } else {
          return item;
        }
      });
      setExperienceData(updatedExperience);
      setSelectedExperience(null);
    } else {
      const uniqueID = Date.now();
      const newExperience = { ...formData, _id: uniqueID };
      setExperienceData([...experienceData, newExperience]);
    }

    setFormData(initialFormData);
  };

  return (
    <div className="cardBox">
      <div className="experienceTitle">
        <h2>Experience</h2>
        {isEditMode && (
          <div>
            <button type="button" className="btn" onClick={showFormHandler}>
              Add Experience
            </button>
          </div>
        )}
      </div>
      {showForm && isEditMode && (
        <>
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
          <div className="alert" id="responseAlert"></div>
        </>
      )}

      <ul id="experienceList">
        {experienceData.length ? (
          <>
            {experienceData.map((item) => {
              return (
                <li key={item._id}>
                  {item.companyName && (
                    <p>
                      <strong>{item.companyName}</strong>
                    </p>
                  )}
                  {item.startDate && <>Start Date: {item.startDate}</>}
                  {item.endDate && <>End Date: {item.endDate}</>}
                  {item.description && <p>{item.description}</p>}

                  {isEditMode && (
                    <>
                      <div className="cardActions">
                        <span
                          className="editBtn"
                          onClick={() => handlerEditExperience(item._id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                            ></path>
                          </svg>
                        </span>
                        <span
                          className="removeBtn"
                          onClick={() => handlerDeleteExperience(item._id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </>
                  )}
                </li>
              );
            })}
          </>
        ) : (
          <li>No Experience added!</li>
        )}
      </ul>
    </div>
  );
};
