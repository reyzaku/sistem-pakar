import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { publicRequest } from '../AxiosInstances';

const RiwayatKonsultasi = () => {
	const [result, setResult] = useState([]);

	const [err, setErr] = useState(null);

	useEffect(() => {
		const getResult = async () => {
			try {
				const res = await publicRequest.get(`/results`);
				setResult(res.data.data);
			} catch (error) {
				setErr({ ...error, result: error });
			}
		};
		getResult();
	}, []);


	console.log(result)

	return (
		<div>
			<div className="overflow-x-auto relative mt-16">
				<h3 className="font-bold text-3xl text-indigo-900 mb-8">
					Riwayat Konsultasi
				</h3>
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-md text-gray-50 uppercase bg-gray-700">
						<tr>
							<th scope="col" className="py-3 px-6">
								Kode Penyakit
							</th>
							<th scope="col" className="py-3 px-6">
								Tanggal Konsultasi
							</th>
							<th scope="col" className="py-3 px-6">
								Presentasi
							</th>
						</tr>
					</thead>
					{result.length <= 0 ? (
						<></>
					) : (
						<tbody>
							{result.map((item, index) => (
								<tr className="bg-white border-b" key={index + 1}>
									<td className="py-4 px-6">{item.disease}</td>
									<td className="py-4 px-6">{item.createdAt}</td>
									<td className="py-4 px-6">{item.presentage}%</td>
								</tr>
							))}
						</tbody>
					)}
				</table>
			</div>
		</div>
	);
};

export default RiwayatKonsultasi;
