import { useState } from "react";

import { createRequest } from "../../api";

const initialFormData = {
  name: "",
  email: "",
  password: "",
};

export const SignUp = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [formResponse, setFormResponse] = useState("");
  const [formResponseType, setFormResponseType] = useState("error");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (formData.password.length < 8) {
      newErrors.password = "Password length minimum 8 characters.";
    }
    setErrors(newErrors);
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  const displayResponse = (type, message) => {
    setFormResponseType(type);
    setFormResponse(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    displayResponse("error", "");
    const validate = validateForm();
    if (Object.keys(validate).length === 0) {
      try {
        await createRequest("https://dummyjson.com/users/add", formData);
        displayResponse("success", "User created successfully.");
        setFormData(initialFormData);
      } catch (er) {
        displayResponse("error", er);
      }
    }
  };

  return (
    <div className="">
      <div id="signUpPage" className="cardBox">
        <div className="signUpPageTitle">
          <h2>Sign Up</h2>
          <p>Registration form</p>
        </div>
        <form id="signUpForm" onSubmit={handleSubmit}>
          <div className="formControl">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              placeholder="Enter you name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="formControl">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              placeholder="Enter you email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="formControl">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter you password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
        {formResponse && (
          <div className={`alert ${formResponseType}`}>{formResponse}</div>
        )}
      </div>
    </div>
  );
};
