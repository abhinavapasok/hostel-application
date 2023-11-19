import React , {useState} from 'react'



function Form1() {

  const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');
const [input3, setInput3] = useState('');
const [input4, setInput4] = useState('');
const [input5, setInput5] = useState('');
const [input6, setInput6] = useState('');
const [input7, setInput7] = useState('');
const [input8, setInput8] = useState('');
const [input9, setInput9] = useState('');
const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

    const [dropSelect, setDropSelect] = useState('');
  
    const handleDropdown = (e) => {
      setDropSelect(e.target.value);
    };

const handleInput =(e)=>{
  const {name, value}=e.target;
  if(name==='input1'){
    setInput1(value);
  }
  else if(name==='input2'){
    setInput2(value);
  }
  else if(name==='input3'){
    setInput3(value);
  }
  else if(name==='input4'){
    setInput4(value);
  }
  else if(name==='input5'){
    setInput5(value);
  }
  else if(name==='input6'){
    setInput6(value);
  }
  else if(name==='input7'){
    setInput7(value);
  }
  else if(name==='input8'){
    setInput8(value);
  }
  else if(name==='input9'){
    setInput9(value);
  }
}
  return (
    <div className=" flex items-center justify-center">

      <form className="bg-white border rounded shadow-md p-4"> 
      
      <div className=" mb-2  flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Name:</label>
         <input type ="text" className="border border-black  rounded ml-2  justify-end"  value={input1} name="input1" onChange={handleInput}   >
         </input>      
         </div>
         <div className="mb-2  flex flex-row ml-2 ">
        <label  className=" block text-gray-700 text-sm font-bold mb-2">College Admission No:</label>
         <input type ="text" className="border border-black  rounded ml-2" value={input2} name="input2"   onChange={handleInput}>
         </input>      
         </div>
         
         <div className="mb-2  flex flex-row ml-2 ">
        <label  className=" block text-gray-700 text-sm font-bold mb-2">College Admission year:</label>
         <input type ="text" className="border border-black  rounded ml-2" value={input3} name="input3"   onChange={handleInput}>
         </input>      
         </div>

         <div className=" mb-2 ml-2">
          <label className="block text-gray-700  text-sm font-bold mb-2">College Admission type:</label>
          <label className="block text-gray-700">
            <input
              type="radio"
              name="option"
              value="option1"
              checked={selectedOption === 'option1'}
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
              checked={selectedOption === 'option2'}
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
              checked={selectedOption === 'option3'}
              onChange={handleRadioChange}
              className="mr-2 leading-tight"
            />
            Other
          </label>


        </div>

         <div className="mb-2   flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Mobile No:</label>
         <input type ="text" className="border border-black  rounded ml-2" value={input4} name="input4"   onChange={handleInput}>
         </input>      
         </div>

         <div className="mb-2  flex flex-row ml-2 ">
        <label  className=" block text-gray-700 text-sm font-bold mb-2">Email.Id:</label>
         <input type ="text" className="border border-black  rounded ml-2" value={input5} name="input5"   onChange={handleInput}>
         </input>      
         </div>

        

        <div>
          <label htmlFor="dropdown" className="block text-gray-700 text-sm font-bold mb-2"> Gender: </label>
        <select id="dropdown"  name="dropdown " value={dropSelect} onChange={handleDropdown} className="border rounded-md ">
        <option value="">Select an option </option>
        <option value="option1" >Male</option>
        <option value="option2" >Female</option>

        </select>
        </div>
        <div>
          <label htmlFor="dropdown" className="block text-gray-700 text-sm font-bold mb-2"> Admission category : </label>
        <select id="dropdown"  name="dropdown " value={dropSelect} onChange={handleDropdown} className="border rounded-md ">
        <option value="">Select an option </option>
        <option value="option1" >SC</option>
        <option value="option2" >ST</option>
        <option value="option2" >PH</option>
        <option value="option2" >BPL</option>
        <option value="option2" >GOIN</option>
        <option value="option2" >ohter</option>

        </select>
        </div>
        <div>
          <label htmlFor="dropdown" className="block text-gray-700 text-sm font-bold mb-2"> E-Grants Category: </label>
        <select id="dropdown"  name="dropdown " value={dropSelect} onChange={handleDropdown} className="border rounded-md ">
        <option value="">Select an option </option>
        <option value="option1" >SC</option>
        <option value="option2" >ST</option>
        <option value="option2" >OBC</option>
        <option value="option2" >OEC</option>
        <option value="option2" >PH</option>
        <option value="option2" >Other</option>

        </select>
        </div>
        <div className=" mb-2  flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Annual family income:</label>
         <input type ="text" className="border border-black  rounded ml-2  justify-end"  value={input6} name="input6" onChange={handleInput}   >
         </input>      
         </div>
         <div className=" mb-2  flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Parents name:</label>
         <input type ="text" className="border border-black  rounded ml-2  justify-end"  value={input7} name="input7" onChange={handleInput}   >
         </input>      
         </div>
         <div className=" mb-2  flex flex-row ml-2 ">
        <label className=" block text-gray-700 text-sm font-bold mb-2">Parents mobile:</label>
         <input type ="text" className="border border-black  rounded ml-2  justify-end"  value={input8} name="input8" onChange={handleInput}   >
         </input>      
         </div>
         <div className="flex items-center justify-center">
         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          Submit

        </button>
        </div>

        
        
      </form>
      
    </div>
  )
}

export default Form1