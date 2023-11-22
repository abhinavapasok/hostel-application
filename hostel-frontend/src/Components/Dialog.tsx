import { useState } from "react";
import { baseUrl } from "../baseUrl";

function Dialog({field,getData}:any) {


  const [clickState, setclickState] = useState(false)
  const [type, setType] = useState("")



  const handleClick = () => {
    if (clickState) {
      setclickState(false);
    } else {
      setclickState(true);
    }
    console.log(clickState);
  };
  
  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    try {
      console.log(field)
      const response = await fetch(`${baseUrl}/create-field`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({field,type})
      });
      console.log(response);
    } catch (err: any) {
      console.error(err.message);
    }
    getData()

  }

  return (

    <div className="w-[inherit]">
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="ml-2 block text-white bg-blue-700 h-10 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={handleClick}
      >
        Add
      </button>

      <div
        id="authentication-modal"
        // tabindex="-1"
        aria-hidden="true"
        className= {clickState ? "overflow-y-auto overflow-x-hidden relative top-0 right-0 left z-50 justify-center ml-3 items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full" : "hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#">
                <div>
                  <label

                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter Type :
                  </label>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={type}
                    onChange={(e)=>setType(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={handleSubmit} 
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
