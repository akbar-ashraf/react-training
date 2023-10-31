import { useEffect, useState } from "react";

import { ExperienceList } from "./experienceList";
import { ExperienceForm } from "./experienceForm";
const initialFormData = {
  companyName: "",
  startDate: "",
  endDate: "",
  description: "",
};

export const ExperienceSection = ({ isEditMode, setTotalExperience }) => {
  const [experienceData, setExperienceData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const [selectedExperience, setSelectedExperience] = useState(null);

  const calculateTotalExperience = (experiences) => {
    let totalExperience = 0;
    //console.log(experiences);
    experiences.forEach((experience) => {
      console.log(experience);
      if (experience.startDate && experience.endDate) {
        const startDate = new Date(experience.startDate);
        const endDate = new Date(experience.endDate);
        console.log(startDate);
        const duration = endDate - startDate;
        console.log("duration: ", duration);
        const years = duration / (365 * 24 * 60 * 60 * 1000);
        console.log("years:", years);
        totalExperience += years;
      }
    });
    return totalExperience.toFixed(2);
  };

  useEffect(() => {
    console.log("useEffect experienceData");
    const cacYears = calculateTotalExperience(experienceData);
    setTotalExperience(cacYears);
    console.log("cacYears:", cacYears);
  }, [experienceData, setTotalExperience]);

  const handlerShowForm = () => {
    setShowForm(true);
  };

  const handlerInputChange = (e) => {
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
            <button type="button" className="btn" onClick={handlerShowForm}>
              Add Experience
            </button>
          </div>
        )}
      </div>
      {showForm && isEditMode && (
        <ExperienceForm
          formData={formData}
          selectedExperience={selectedExperience}
          submitHandler={submitHandler}
          handlerInputChange={handlerInputChange}
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
                  isEditMode={isEditMode}
                  handlerEditExperience={handlerEditExperience}
                  handlerDeleteExperience={handlerDeleteExperience}
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
