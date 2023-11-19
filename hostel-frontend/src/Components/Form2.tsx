import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FormLabel } from "react-bootstrap";
import { LocalizationProvider } from "@mui/x-date-pickers";

// type FormValues = {
//   name: string;
//   admi_no: string;
//   admi_year: number;
//   admi_type: string;
//   admi_category: string;
//   mobile_no: string;
//   email: string;
//   income: number;
//   parent_name: string;
//   parent_mobile: string;
//   distance: string;
//   gender: string;
//   e_grants_category: string;
//   value: string;
// };

function Form2() {
  // const handleRadioChange = (e) => {
  //   setadmi_type(e.target.value);
  // };

  const [checked, setChecked] = useState(false);

  const handleCheckChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;
  const onSubmit = async (data: FormValues) => {
    console.log("form submited", data);
    try {
      const response = await fetch("http://localhost:4000/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log(response);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const [genderfields, setGenderFields] = useState([]);
  const [admifields, setAdmiFields] = useState([]);
  const [e_grantsfields, setE_grantsFields] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:4000/get-fields");
      const jsondata = await response.json();
      setGenderFields(jsondata[0]);
      setAdmiFields(jsondata[1]);
      setE_grantsFields(jsondata[2]);
      console.log(admifields);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex justify-center ">
      <form
        className="bg-white px-4 gap-x-[200px]"
        // onSubmit={onSubmitForm}
        noValidate
      >
        <div className="flex flex-col m-1 ">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            Enter Your Name:
          </label>
          <input
            type="text"
            className="border border-[#c4c4c4] rounded-md h-9 p-1 "
            id="name"
            {...register("name", {
              required: "This field is requried",
            })}
          ></input>
          <p className="text-red-600 text-left ">{errors.name?.message}</p>
        </div>
        <div className="flex flex-col m-1 ">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            Enter College Admission No:
          </label>
          <input
            type="text"
            className="border border-[#c4c4c4] rounded-md h-9 p-1 "
            {...register("admi_no", {
              required: "This field is requried",
            })}
          ></input>
          <p className="text-red-600 text-left ">{errors.admi_no?.message}</p>
        </div>
        <div className="flex flex-col m-1">
          <FormControl>
            <FormLabel
              id="demo-controlled-radio-buttons-group"
              className="block text-gray-700 text-m font-semibold mb-2"
            >
              College Admission type:
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="LET"
                control={<Radio />}
                label="LET"
                {...register("admi_type", {
                  required: "This field is requried",
                })}
              />
              <FormControlLabel
                value="CT"
                control={<Radio />}
                label="College Transfer"
                {...register("admi_type", {
                  required: "This field is requried",
                })}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                {...register("admi_type", {
                  required: "This field is requried",
                })}
              />
            </RadioGroup>
          </FormControl>
          <p className="text-red-600 text-left ">{errors.admi_no?.message}</p>
        </div>
        {/* <div className="flex flex-col m-1 ">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            Enter College Admission Admision year :
          </label>
          <input
            type="text"
            className="border border-[#c4c4c4] rounded-md h-9 p-1 px-auto"
            {...register("admi_year", {
              required: "This field is required.",
              pattern: {
                value: /^[0-9]{4}/,
                message: "Enter a Valid Year",
              },
            })}
          ></input>
          <p className="text-red-600 text-left ">{errors.admi_year?.message}</p>
        </div> */}
        <div className="flex flex-row justify-between p-1">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            College Admission Admision year :
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={'"Year"'}
              {...register("admi_year", {
                required: "This field is required.",
              })}
              openTo="year"
              views={["year"]}
            />
          </LocalizationProvider>
        </div>

        <div className="flex flex-col ">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            Mobile No:
          </label>
          <input
            type="text"
            className="border border-[#c4c4c4] rounded-md h-9 p-1 "
            {...register("mobile_no", {
              required: "This field is required",
              pattern: {
                value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                message: "Enter a valid Mobile No",
              },
            })}
          ></input>
          <p className="text-red-600 text-left ">{errors.mobile_no?.message}</p>
        </div>

        <div className="flex flex-col m-1  ">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            Email.Id:
          </label>
          <input
            type="text"
            className="border border-[#c4c4c4] rounded-md h-9 p-1 "
            {...register("email", {
              required: "This field is required.",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid Email Format",
              },
            })}
          ></input>
          <p className="text-red-600 text-left ">{errors.email?.message}</p>
        </div>
        <div className="flex justify-between">
          <label className="block text-gray-700 text-m font-semibold my-2">
            Gender:
          </label>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-simple-select-label">Select...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={gender}
              // label="Gender"
              // onChange={handleDropDownChange}
              // name="gender"
              {...register("gender")}
            >
              {genderfields.map((item: any) => {
                return <MenuItem value={`${item.type}`}>{item.type}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <div className="flex justify-between">
          <label className="block text-gray-700 text-m font-semibold my-2">
            Admission Category:
          </label>
          <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="demo-simple-select-label">Select...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={admi_category}
              // label="Admission Category:"
              // onChange={handleDropDownChange}
              // name="category"
              {...register("admi_category")}
            >
              {admifields.map((item: any) => {
                return <MenuItem value={`${item.type}`}>{item.type}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <div className="flex justify-between">
          <label className="block text-gray-700 text-m font-semibold my-2">
            E-grants Category:
          </label>
          <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="demo-simple-select-label">Select...</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // label="E-Grants Category:"
              // value={e_grants_category}
              // onChange={handleDropDownChange}
              // name="e-category"
              {...register("e_grants_category")}
            >
              {e_grantsfields.map((item: any) => {
                return <MenuItem value={`${item.type}`}>{item.type}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>

        <div className="flex flex-col m-1 justify-end">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            Annual family income:
          </label>
          <input
            type="text"
            className="border border-[#c4c4c4] rounded-md h-9 p-1"
            {...register("income", {
              required: "This field is requried",
            })}
          ></input>
          <p className="text-red-600 text-left ">{errors.income?.message}</p>
        </div>
        <div className="flex flex-col m-1 justify-end ">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            Parents name:
          </label>
          <input
            type="text"
            className="border border-[#c4c4c4] rounded-md h-9 p-1"
            {...register("parent_name", {
              required: "This field is requried",
            })}
          ></input>
          <p className="text-red-600 text-left ">
            {errors.parent_name?.message}
          </p>
        </div>
        <div className=" flex flex-col m-1 justify-end">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            Distance between CET and your residence (Km):
          </label>
          <input
            type="text"
            className="border border-[#c4c4c4] rounded-md h-9 p-1"
            {...register("distance", {
              required: "This field is requried",
            })}
          ></input>
          <p className="text-red-600 text-left ">{errors.distance?.message}</p>
        </div>
        <div className="flex flex-col m-1 justify-end ">
          <label className=" block text-gray-700 text-m font-semibold mb-2">
            Parents mobile:
          </label>
          <input
            type="text"
            className="border border-[#c4c4c4]  rounded-md h-9"
            {...register("parent_mobile", {
              required: "This field is requried",
              pattern: {
                value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                message: "Enter a valid Mobile No",
              },
            })}
          ></input>
          <p className="text-red-600 text-left ">
            {errors.parent_mobile?.message}
          </p>
        </div>
        <div className="block text-gray-700 text-m font-semibold mb-2">
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
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" disabled>
              Submit
            </Button>
          )}
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default Form2;
