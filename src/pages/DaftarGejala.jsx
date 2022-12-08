import React, { useEffect, useState } from "react";
import { publicRequest } from "../AxiosInstances";

const DaftarGejala = () => {
  //Storing Data Penyakit
  const [gejala, setGejala] = useState([]);

  //Storing Fetching Error
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getAllDisease = async () => {
      try {
        const res = await publicRequest.get(`/symptoms`);
        setGejala(res.data.data);
      } catch (err) {
        setErr("Err");
      }
    };
    getAllDisease();
  }, []);
  return (
    <div>
      <div className="overflow-x-auto relative mt-16">
        <h3 className="font-bold text-3xl text-indigo-900 mb-8">
          Daftar Gejala
        </h3>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-md text-gray-50 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                Kode Penyakit
              </th>
              <th scope="col" className="py-3 px-6">
                Batang
              </th>
              <th scope="col" className="py-3 px-6">
                Daun
              </th>
              <th scope="col" className="py-3 px-6">
                Buah
              </th>
              <th scope="col" className="py-3 px-6">
                Akar
              </th>
            </tr>
          </thead>
          <tbody>
            {gejala?.map((item, index) => (
              <tr className="bg-white border-b" key={index + 1}>
                <td className="py-4 px-6">P000{item.diseaseId}</td>
                <td className="py-4 px-6">
                  {item.stem !== null ? item.stem : "-"}
                </td>
                <td className="py-4 px-6">
                  {item.leaf !== null ? item.leaf : "-"}
                </td>
                <td className="py-4 px-6">
                  {item.fruit !== null ? item.fruit : "-"}
                </td>
                <td className="py-4 px-6">
                  {item.root !== null ? item.root : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DaftarGejala;
