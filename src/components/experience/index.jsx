import { useContext, useState } from "react";

import { ExperienceList } from "./experienceList";
import { ExperienceForm } from "./experienceForm";
import { EditModeContext } from "../../context/editModeContext";

const initialFormData = {
  companyName: "",
  startDate: "",
  endDate: "",
  description: "",
};

export const ExperienceSection = ({ experienceData, handleExperienceData }) => {
  const isEditMode = useContext(EditModeContext);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditExperience = (id) => {
    setSelectedExperience(id);
    const editExperience = experienceData.find((item) => item._id == id);
    setFormData(editExperience);
    handleShowForm();
  };

  const handleDeleteExperience = (id) => {
    const updateExperiencedData = experienceData.filter(
      (item) => item._id != id
    );
    handleExperienceData(updateExperiencedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedExperience) {
      const updatedExperience = experienceData.map((item) => {
        if (item._id === selectedExperience) {
          return { ...item, ...formData };
        } else {
          return item;
        }
      });
      handleExperienceData(updatedExperience);
      setSelectedExperience(null);
    } else {
      const uniqueID = Date.now();
      const newExperience = { ...formData, _id: uniqueID };
      handleExperienceData([...experienceData, newExperience]);
    }

    setFormData(initialFormData);
  };

  return (
    <div className="cardBox">
      <div className="experienceTitle">
        <h2>Experience</h2>
        {isEditMode && (
          <div>
            <button type="button" className="btn" onClick={handleShowForm}>
              Add Experience
            </button>
          </div>
        )}
      </div>
      {showForm && isEditMode && (
        <ExperienceForm
          formData={formData}
          selectedExperience={selectedExperience}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      )}

      <ul id="experienceList">
        {experienceData.length ? (
          <>
            {experienceData.map((item) => {
              return (
                <ExperienceList
                  key={item._id}
                  item={item}
                  handleEditExperience={handleEditExperience}
                  handleDeleteExperience={handleDeleteExperience}
                ></ExperienceList>
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
