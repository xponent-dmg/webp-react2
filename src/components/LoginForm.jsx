import React, { useState } from "react";
import "/src/css/LoginForm.css";

function AuthForm() {
  const [userInput, setUserInput] = useState({
    userId: "",
    userPass: "",
    workCity: "",
    hostServer: "",
    userRole: "",
    ssoOptions: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setUserInput((prev) => ({
        ...prev,
        ssoOptions: checked
          ? [...prev.ssoOptions, value]
          : prev.ssoOptions.filter((item) => item !== value),
      }));
    } else {
      setUserInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", userInput);
  };

  const handleFormReset = () => {
    setUserInput({
      userId: "",
      userPass: "",
      workCity: "",
      hostServer: "",
      userRole: "",
      ssoOptions: [],
    });
  };

  return (
    <div className="form-container">
      <h2>Novell Services Authentication</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="userId">User ID:</label>
          <input
            id="userId"
            type="text"
            name="userId"
            value={userInput.userId}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="userPass">Password:</label>
          <input
            id="userPass"
            type="password"
            name="userPass"
            value={userInput.userPass}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="workCity">Employment City:</label>
          <input
            id="workCity"
            type="text"
            name="workCity"
            value={userInput.workCity}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="hostServer">Select Server:</label>
          <select
            id="hostServer"
            name="hostServer"
            value={userInput.hostServer}
            onChange={handleInputChange}>
            <option value="">-- Choose a server --</option>
            <option value="Alpha">Alpha</option>
            <option value="Beta">Beta</option>
          </select>
        </div>

        <fieldset>
          <legend>Choose Your Role:</legend>
          {["Admin", "Engineer", "Manager", "Guest"].map((role) => (
            <div className="input-group" key={role}>
              <label htmlFor={`userRole-${role}`}>{role}</label>
              <input
                id={`userRole-${role}`}
                type="radio"
                name="userRole"
                value={role}
                checked={userInput.userRole === role}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </fieldset>

        <fieldset>
          <legend>Enable Single Sign-on:</legend>
          {["Mail", "Payroll", "Self-service"].map((option) => (
            <div className="input-group" key={option}>
              <label htmlFor={`ssoOptions-${option}`}>{option}</label>
              <input
                id={`ssoOptions-${option}`}
                type="checkbox"
                name="ssoOptions"
                value={option}
                checked={userInput.ssoOptions.includes(option)}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </fieldset>

        <div className="btn-group">
          <button type="submit">Login</button>
          <button type="button" onClick={handleFormReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
