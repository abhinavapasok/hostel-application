import { useEffect, useState } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { baseUrl } from "../baseUrl";


function MasterTable() {
  const [genderfields, setGenderFields] = useState([]);
  const [admifields, setAdmiFields] = useState([]);
  const [e_grantsfields, setE_grantsFields] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch(`${baseUrl}/get-fields`);
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
    <div className="flex">
      <div className="relative overflow-x-auto m-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-l text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {genderfields.map((item:any) => {
              return (
                <tr>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">
                    <button>
                      <ModeEditIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="relative overflow-x-auto m-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-l text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {admifields.map((item:any) => {
              return (
                <tr>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">
                    <ModeEditIcon />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="relative overflow-x-auto m-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-l text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {e_grantsfields.map((item:any) => {
              return (
                <tr>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">
                    <ModeEditIcon />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MasterTable;
