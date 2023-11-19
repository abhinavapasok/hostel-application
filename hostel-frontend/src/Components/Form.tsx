import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";

function Form() {
  const [name, setname] = useState("");
  const [admi_no, setadmi_no] = useState("");
  const [admi_year, setadmi_year] = useState("");
  const [mobile_no, setmobile_no] = useState("");
  const [email, setemail] = useState("");
  const [income, setincome] = useState("");
  const [parent_name, setparent_name] = useState("");
  const [distance, setdistance] = useState("");
  const [parent_mobile, setparent_mobile] = useState("");
  const [admi_type, setadmi_type] = useState("");
  const [e_grants_category, sete_grants_category] = useState("");
  const [gender, setgender] = useState("");
  const [admi_category, setadmi_category] = useState("");

  const [nullerror, setnullerror] = useState({
    name: false,
    admi_no: false,
    admi_year: false,
    admi_type: false,
    admi_category: false,
    mobile_no: false,
    email: false,
    income: false,
    parent_name: false,
    parent_mobile: false,
    distance: false,
    gender: false,
    e_grants_category: false,
  });

  const handleRadioChange = (e) => {
    setadmi_type(e.target.value);
  };

  const [checked, setChecked] = useState(false);

  const handleDropDownChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    if (name === "gender") {
      setgender(value);
    } else if (name === "category") {
      setadmi_category(value);
    } else if (name === "e-category") {
      sete_grants_category(value);
    }
  };
  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setname(value);
    } else if (name === "admi_no") {
      setadmi_no(value);
    } else if (name === "admi_year") {
      setadmi_year(value);
    } else if (name === "mobile_no") {
      setmobile_no(value);
    } else if (name === "email") {
      setemail(value);
    } else if (name === "income") {
      setincome(value);
    } else if (name === "parent_name") {
      setparent_name(value);
    } else if (name === "distance") {
      setdistance(value);
    } else if (name === "parent_mobile") {
      setparent_mobile(value);
    }
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name,
        admi_no,
        admi_year,
        admi_type,
        admi_category,
        mobile_no,
        email,
        income,
        parent_name,
        parent_mobile,
        distance,
        gender,
        e_grants_category,
      };
      console.log(nullerror);
      const response = await fetch("http://localhost:4000/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  const disabled = "disabled";
  return (
    <div className=" flex items-center justify-center pt-10">
      <form
        className="bg-white border rounded shadow-md p-4"
        // onSubmit={onSubmitForm}
      >
        <div className=" mb-2 flex justify-end ml-2 ">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            className="border border-black  rounded ml-2  justify-end"
            value={name}
            name="name"
            onChange={handleInput}
          ></input>
        </div>
        <div className="mb-2  justify-end flex flex-row ml-2 ">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            College Admission No:
          </label>
          <input
            type="text"
            className="border border-black  rounded ml-2"
            value={admi_no}
            name="admi_no"
            onChange={handleInput}
          ></input>
        </div>

        <div className="mb-2 flex flex-row  justify-end ml-2 ">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            College Admission Admision year:
          </label>
          <input
            type="text"
            className="border border-black px-auto rounded ml-2"
            value={admi_year}
            name="admi_year"
            onChange={handleInput}
          ></input>
        </div>

        <div className=" mb-2 ml-2 flex justify-end mr-10 ">
          <label className="block text-gray-700 m-2 text-sm font-bold mb-2">
            College Admission type:
          </label>
          <div className="flex flex-col items-start">
            <label className="block text-gray-700">
              <input
                type="radio"
                name="option"
                value="option1"
                checked={admi_type === "option1"}
                onChange={handleRadioChange}
                className="mr-2 leading-tight"
              />
              LET
            </label>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="option"
                value="option2"
                checked={admi_type === "option2"}
                onChange={handleRadioChange}
                className="mr-2 leading-tight"
              />
              College transfer
            </label>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="option"
                value="option3"
                checked={admi_type === "option3"}
                onChange={handleRadioChange}
                className="mr-2 leading-tight"
              />
              Other
            </label>
          </div>
        </div>

        <div className="mb-2  flex flex-row ml-2 justify-end ">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            Mobile No:
          </label>
          <input
            type="text"
            className="border border-black  rounded ml-2"
            value={mobile_no}
            name="mobile_no"
            onChange={handleInput}
          ></input>
        </div>

        <div className="mb-2 flex flex-row ml-2 justify-end   ">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            Email.Id:
          </label>
          <input
            type="text"
            className="border border-black  rounded ml-2"
            value={email}
            name="email"
            onChange={handleInput}
          ></input>
        </div>
        {/* 
        <div className="flex justify-end">
          <label
            htmlFor="dropdown"
            className="block text-gray-700 text-sm font-bold mb-2 pr-12"
          >
            {" "}
            Gender:{" "}
          </label>
          <select
            id="dropdown"
            name="dropdown "
            value={dropSelect}
            // onChange={handleDropdown}
            className="border rounded-md "
          >
            <option value="">Select an option </option>
            <option value="option1">Male</option>
            <option value="option2">Female</option>
          </select>
        </div>
        <div className="flex justify-end">
          <label
            htmlFor="dropdown"
            className="block text-gray-700 text-sm font-bold mb-2 pr-12 mt-2"
          >
            {" "}
            Admission category :{" "}
          </label>
          <select
            id="dropdown"
            name="dropdown "
            value={dropSelect}
            // onChange={handleDropdown}
            className="border rounded-md "
          >
            <option value="">Select an option </option>
            <option value="option1">SC</option>
            <option value="option2">ST</option>
            <option value="option2">PH</option>
            <option value="option2">BPL</option>
            <option value="option2">GOIN</option>
            <option value="option2">ohter</option>
          </select>
        </div> */}
        {/* <div className="flex justify-end">
          <label
            htmlFor="dropdown"
            className="block text-gray-700 text-sm font-bold mb-2 pr-12"
          >
            {" "}
            E-Grants Category:{" "}
          </label>
          <select
            id="dropdown"
            name="dropdown "
            value={dropSelect}
            onChange={handleDropdown}
            className="border rounded-md "
          >
            <option value="">Select an option </option>
            <option value="option1">SC</option>
            <option value="option2">ST</option>
            <option value="option3">OBC</option>
            <option value="option4">OEC</option>
            <option value="option5">PH</option>
            <option value="option6">Other</option>
          </select>
        </div> */}
        <div className="flex justify-end">
          <label className="block text-gray-700 text-sm font-bold my-2">
            Gender:
          </label>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleDropDownChange}
              name="gender"
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex justify-end">
          <label className="block text-gray-700 text-sm font-bold my-2">
            Admission Category:
          </label>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={admi_category}
              label="Admission Category:"
              onChange={handleDropDownChange}
              name="category"
            >
              <MenuItem value={"SC"}>SC</MenuItem>
              <MenuItem value={"ST"}>ST</MenuItem>
              <MenuItem value={"OEC"}>OEC</MenuItem>
              <MenuItem value={"PH"}>PH</MenuItem>
              <MenuItem value={"BPL"}>BPL</MenuItem>
              <MenuItem value={"GOIN"}>GOIN</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex justify-end">
          <label className="block text-gray-700 text-sm font-bold my-2">
            E-grants Category:
          </label>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={e_grants_category}
              label="E-Grants Category:"
              onChange={handleDropDownChange}
              name="e-category"
            >
              <MenuItem value={"SC"}>SC</MenuItem>
              <MenuItem value={"ST"}>ST</MenuItem>
              <MenuItem value={"OEC"}>OEC</MenuItem>
              <MenuItem value={"PH"}>PH</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className=" mb-2  flex flex-row ml-2 justify-end ">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            Annual family income:
          </label>
          <input
            type="text"
            className="border border-black  rounded ml-2  justify-end"
            value={income}
            name="income"
            onChange={handleInput}
          ></input>
        </div>
        <div className=" mb-2  flex flex-row ml-2  justify-end ">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            Parents name:
          </label>
          <input
            type="text"
            className="border border-black  rounded ml-2  justify-end"
            value={parent_name}
            name="parent_name"
            onChange={handleInput}
          ></input>
        </div>
        <div className=" mb-2  flex flex-row ml-2  justify-end ">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            Distance between CET and your residence:
          </label>
          <input
            type="text"
            className="border border-black  rounded ml-2  justify-end"
            value={distance}
            name="distance"
            onChange={handleInput}
          ></input>
          {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </div>
        <div className=" mb-2  flex flex-row ml-2 justify-end ">
          <label className=" block text-gray-700 text-sm font-bold mb-2">
            Parents mobile:
          </label>
          <input
            type="text"
            className="border border-black  rounded ml-2  justify-end"
            value={parent_mobile}
            name="parent_mobile"
            onChange={handleInput}
          ></input>
        </div>
        <div className="block text-gray-700 text-sm font-bold mb-2">
          <Checkbox
            checked={checked}
            onChange={handleCheckChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          I hear by declare that the information from the given above are
          <br /> true to the best of knowledge and belief.
        </div>
        <div className="flex items-center justify-center">
          {checked ? (
            <Button variant="contained" onClick={onSubmitForm}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" disabled>
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Form;
