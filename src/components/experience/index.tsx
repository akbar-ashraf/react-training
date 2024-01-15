import { useContext, useMemo, useState } from "react";

import { createRequest, updateRequest, deleteRequest } from "../../api";

import { ExperienceList } from "./experienceList";
import { ExperienceForm } from "./experienceForm";
import { EditModeContext } from "../../context/editModeContext";
import { Loader } from "../loader";

const initialFormData = {
  companyName: "",
  startDate: "",
  endDate: "",
  description: "",
};

export const ExperienceSection = ({ experienceData, handleExperienceData }) => {
  const isEditMode = useContext(EditModeContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const [selectedExperience, setSelectedExperience] = useState(null);

  const [searchInput, setSearchInput] = useState("");

  const filteredExperienceData = useMemo(() => {
    return experienceData.filter((item) =>
      item.companyName.toLowerCase().includes(searchInput.toLowerCase())
    );
  }, [experienceData, searchInput]);

  const getExperienceData = () => {
    setSearchInput("");
    handleExperienceData();
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

  const handleDeleteExperience = async (id) => {
    setIsLoading(true);
    try {
      await deleteRequest("http://localhost:3000/api/portfolio/experience", id);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      getExperienceData();
    }
  };

  const updateExperience = async (selectedExperienceID, formData) => {
    setIsLoading(true);
    try {
      await updateRequest(
        "http://localhost:3000/api/portfolio/experience",
        selectedExperienceID,
        formData
      );
    } catch (err) {
      console.log(err);
    } finally {
      getExperienceData();
      setIsLoading(false);
    }
  };

  const addExperience = async (formData) => {
    setIsLoading(true);
    try {
      await createRequest(
        "http://localhost:3000/api/portfolio/experience",
        formData
      );
    } catch (err) {
      console.log(err);
    } finally {
      getExperienceData();
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedExperience) {
      updateExperience(selectedExperience, formData);
      setSelectedExperience(null);
    } else {
      addExperience(formData);
    }
    setFormData(initialFormData);
    getExperienceData();
  };

  const filterExperienceData = (e) => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);
  };

  return (
    <div className="cardBox">
      <Loader isLoading={isLoading}></Loader>
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
