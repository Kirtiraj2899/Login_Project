import { useState } from "react";
import "./Employeesty.css";

const Employee = () => {
    const [inputArr, setInputArr] = useState([]);
    const [inputData, setInputData] = useState({
        name: "",
        id: "",
        phoneno: "",
        gender: ""
    });
    const [errors, setErrors] = useState({}); // State to store validation errors

    function changeHandle(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    function validate() {
        const validationErrors = {};
        
        if (!inputData.name.trim()) {
            validationErrors.name = "Name is required.";
        }
        if (!inputData.id.trim()) {
            validationErrors.id = "Employee ID is required.";
        }
        if (!inputData.phoneno.trim()) {
            validationErrors.phoneno = "Phone number is required.";
        } else if (inputData.phoneno.length !== 10) {
            validationErrors.phoneno = "Phone number must be a 10-digit number.";
        }
        if (!inputData.gender.trim()) {
            validationErrors.gender = "Gender is required.";
        }

        return validationErrors;
    }

    function submit(e) {
        e.preventDefault();  

        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0) {
            setInputArr([...inputArr, inputData]);

            setInputData({
                name: "",
                id: "",
                phoneno: "",
                gender: ""
            });

            setErrors({}); 
        } else {
            setErrors(validationErrors); 
        }

        console.log(inputArr);
        console.log(inputData);
    }

    return (
        <>
            <div className="EmpContainer">
                <h1>Employee Details</h1>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Name: </label></td>
                                    <td>
                                        <input type="text" name="name" placeholder="Enter Employee Name" value={inputData.name}  onChange={changeHandle}  />
                                            <br />
                                        {errors.name && <span className="error">{errors.name}</span>}
                                    </td> 
                                </tr>
                                <tr>
                                    <td><label>ID: </label></td>
                                    <td>
                                        <input type="text" name="id" placeholder="Enter Employee ID" value={inputData.id} onChange={changeHandle} />
                                        <br />
                                        {errors.id && <span className="error">{errors.id}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Phone No.: </label></td>
                                    <td>
                                        <input type="number" name="phoneno" placeholder="Enter phone number" value={inputData.phoneno} onChange={changeHandle} />
                                        <br />
                                        {errors.phoneno && <span className="error">{errors.phoneno}</span>}
                                    </td> 
                                </tr>
                                <tr>
                                    <td><label>Gender: </label></td>
                                    <td>
                                        <select 
                                            name="gender" 
                                            value={inputData.gender} 
                                            onChange={changeHandle}
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select><br />
                                        {errors.gender && <span className="error">{errors.gender}</span>}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button type="submit" onClick={submit}>Submit</button>
                
                <div className="EmployeeList">
                    <h1>Employee List</h1>
                    <table className="displaydata" border={1} >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Phone No.</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inputArr.map((emp, index) => (
                                <tr key={index}>
                                    <td>{emp.name}</td>
                                    <td>{emp.id}</td>
                                    <td>{emp.phoneno}</td>
                                    <td>{emp.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Employee;
