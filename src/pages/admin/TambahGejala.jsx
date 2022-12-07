import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authRequest, publicRequest } from "../../AxiosInstances";

const TambahGejala = () => {
  //stored input Value
  const [gejala, setGejala] = useState({});
  const [disease, setDisease] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [err, setErr] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const getAllDisease = async () => {
      const { data } = await authRequest.get("/diseases");
      setDisease(data.data);
    };
    getAllDisease();
  }, []);

  //Send Value Handler
  const submitHandle = (e) => {
    e.preventDefault();
    setIsOpen(false);
    publicRequest
      .post("/symptoms", gejala)
      .then(() => {
        navigate("/admin/manage");
      })
      .catch((error) => {
        setErr(error);
        setIsOpen(true);
      });
  };

  return (
    <>
      {/* <PopupAlert isOpen={openModal}/> */}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h2 className="mb-16 font-bold text-3xl text-indigo-900">
          Tambah Data Gejala
        </h2>
        {isOpen && (
          <h4 className="text-red-500 font-thin mb-16 text-center">
            {err.message}
            <br />
            {err.name}
          </h4>
        )}
        <div className="w-full bg-white rounded-l md:mt-0 sm:max-w-md xl:p-0 ">
          <form action="submit" className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="disease"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Penyakit
              </label>
              <select
                name="disease"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                onChange={(e) =>
                  setGejala({ ...gejala, diseaseId: e.target.value })
                }
              >
                <option value="disable">Pilih Penyakit</option>
                {disease.map((data, i) => (
                  <option value={data.id} key={i}>
                    {data.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="stem"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gejala pada Batang
              </label>
              <input
                type="text"
                name="stem"
                placeholder=""
                onChange={(e) => setGejala({ ...gejala, stem: e.target.value })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="leaf"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gejala pada Daun
              </label>
              <input
                type="text"
                name="leaf"
                placeholder=""
                onChange={(e) => setGejala({ ...gejala, leaf: e.target.value })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="fruit"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gejala pada Buah
              </label>
              <input
                type="text"
                name="fruit"
                placeholder=""
                onChange={(e) =>
                  setGejala({ ...gejala, fruit: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="root"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Gejala pada Akar
              </label>
              <input
                type="text"
                name="root"
                placeholder=""
                onChange={(e) => setGejala({ ...gejala, root: e.target.value })}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              />
            </div>

            <button
              type="submit"
              onClick={submitHandle}
              className="w-full text-white bg-indigo-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Tambah Gejala
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default TambahGejala;
