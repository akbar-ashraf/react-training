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

  const [isFormVisible, setIsFormVisible] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const [selectedExperience, setSelectedExperience] = useState(null);

  const [searchInput, setSearchInput] = useState("");

  const [filteredExperienceData, setFilteredExperienceData] =
    useState(experienceData);

  const updateExperienceData = (updatedData) => {
    setSearchInput("");
    handleExperienceData(updatedData);
    setFilteredExperienceData(updatedData);
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditExperience = (id) => {
    setSelectedExperience(id);
    const editExperience = experienceData.find((item) => item._id == id);
    setFormData(editExperience);
    showForm();
  };

  const handleDeleteExperience = (id) => {
    const updateExperiencedData = experienceData.filter(
      (item) => item._id != id
    );
    updateExperienceData(updateExperiencedData);
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
      updateExperienceData(updatedExperience);
      setSelectedExperience(null);
    } else {
      const uniqueID = Date.now();
      const newExperience = { ...formData, _id: uniqueID };
      updateExperienceData([...experienceData, newExperience]);
    }

    setFormData(initialFormData);
  };

  const filterExperienceData = (e) => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);
    const updatedExperienceData = experienceData.filter((item) =>
      item.companyName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredExperienceData(updatedExperienceData);
  };

  return (
    <div className="cardBox">
      <div className="experienceTitle">
        <h2>Experience</h2>
        {isEditMode && (
          <div>
            <button type="button" className="btn" onClick={showForm}>
              Add Experience
            </button>
          </div>
        )}
      </div>
      {isFormVisible && isEditMode && (
        <ExperienceForm
          formData={formData}
          selectedExperience={selectedExperience}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      )}

      {isEditMode && (
        <div className="formControl">
          <input
            type="text"
            id="searchInput"
            name="searchInput"
            value={searchInput}
            placeholder="Search by company"
            onChange={filterExperienceData}
            autoComplete="np"
          />
        </div>
      )}

      <ul id="experienceList">
        {filteredExperienceData.length ? (
          <>
            {filteredExperienceData.map((item) => {
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
