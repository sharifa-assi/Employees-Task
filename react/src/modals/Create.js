import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreatePopup = ({ modal, toggle, save }) => {
  const [FirstName, setFirstName] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "FirstName") {
      setFirstName(value);
    } else {
      setAge(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let employeeObj = {};
    employeeObj["Name"] = FirstName;
    employeeObj["age"] = age;
    save(employeeObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Employee</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            className="form-control"
            value={FirstName}
            onChange={handleChange}
            name="FirstName"
          />
        </div>
        <div className="form-group">
          <label>age</label>
          <textarea
            className="form-control"
            value={age}
            onChange={handleChange}
            name="age"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreatePopup;
