import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [firstName, setFIrstName] = useState("");
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      setFIrstName(value);
    } else {
      setAge(value);
    }
  };

  useEffect(() => {
    setFIrstName(taskObj.Name);
    setAge(taskObj.age);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = firstName;
    tempObj["age"] = age;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={handleChange}
            name="firstName"
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
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditPopup;
