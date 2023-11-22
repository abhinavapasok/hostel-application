import { useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Dialog from "./Dialog";

function MasterTable() {
  const [genderfields, setGenderFields] = useState([]);
  const [admifields, setAdmiFields] = useState([]);
  const [e_grantsfields, setE_grantsFields] = useState([]);
  const getData = async () => {
    console.log("hi ms table getfields");
    try {
      const response = await fetch(`${baseUrl}/get-fields`);
      const jsondata = await response.json();
      setGenderFields(jsondata[0]);
      setAdmiFields(jsondata[1]);
      setE_grantsFields(jsondata[2]);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const deleteUser = async (e: any, id: any, field: string) => {
    console.log("ms table del field");
    e.stopPropagation();
    try {
      const res = await fetch(
        `${baseUrl}/remove-field?id=${id}&&field=${field}`,
        {
          method: "DELETE",
        }
      );
      console.log(res);
      getData();
    } catch (err: any) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-1  sm:grid-cols-3 gap-5 ">
      <div className="relative overflow-x-auto">
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
            {genderfields.map((item: any) => {
              return (
                <tr>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">
                    <button
                      className="flex "
                      onClick={(e) =>
                        deleteUser(e, item.type, "gender")
                      }
                    >
                      <DeleteOutlineIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Dialog field="e_grants_category" getData={getData} />
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-l  text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            {admifields.map((item: any) => {
              return (
                <tr>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={(e) => deleteUser(e, item.type, "admi_category")}
                    >
                      <DeleteOutlineIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <button>Add</button> */}
        <Dialog field="admi_category" getData={getData} />
      </div>
      <div className="relative overflow-x-auto">
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
            {e_grantsfields.map((item: any) => {
              return (
                <tr>
                  <td className="px-6 py-4">{item.type}</td>
                  <td className="px-6 py-4">
                    <button
                      className="flex "
                      onClick={(e) =>
                        deleteUser(e, item.type, "e_grants_category")
                      }
                    >
                      <DeleteOutlineIcon />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Dialog field="e_grants_category" getData={getData} />
      </div>
    </div>
  );
}

export default MasterTable;
