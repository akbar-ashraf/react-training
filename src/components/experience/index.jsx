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

  const [searchCompany, setSearchCompany] = useState("");
  const [searchExperienceData, setSearchExperienceData] =
    useState(experienceData);

  const setExperienceData = (updatedData) => {
    setSearchCompany("");
    handleExperienceData(updatedData);
    setSearchExperienceData(updatedData);
  };

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
    setExperienceData(updateExperiencedData);
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
      setExperienceData(updatedExperience);
      setSelectedExperience(null);
    } else {
      const uniqueID = Date.now();
      const newExperience = { ...formData, _id: uniqueID };
      setExperienceData([...experienceData, newExperience]);
    }

    setFormData(initialFormData);
  };

  const handleSearchCompany = (e) => {
    const searchValue = e.target.value;
    setSearchCompany(searchValue);
    const updatedExperienceData = experienceData.filter((item) =>
      item.companyName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchExperienceData(updatedExperienceData);
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

      {isEditMode && (
        <div className="formControl">
          <input
            type="text"
            id="searchCompany"
            name="searchCompany"
            value={searchCompany}
            placeholder="Search by company"
            onChange={handleSearchCompany}
            autoComplete="np"
          />
        </div>
      )}

      <ul id="experienceList">
        {searchExperienceData.length ? (
          <>
            {searchExperienceData.map((item) => {
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
