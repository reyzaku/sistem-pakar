import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const RiwayatKonsultasi = () => {
	const consult = useSelector((state) => state.consult);

	const [data, setData] = useState({})

	const SaveData = (event) => {
		event.prevenDefault()
		
	}
	return (
		<div>
			<div className="overflow-x-auto relative mt-16">
				<h3 className="font-bold text-3xl text-indigo-900 mb-8">Riwayat Konsultasi</h3>
				<table className="w-full text-sm text-left text-gray-500">
					<tbody>
						<tr className="bg-white border-b">
							<td className="py-4 px-6">G0001</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">Apakah Daun padi menguning?</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">-</td>
						</tr>

						<tr className="bg-white border-b">
							<td className="py-4 px-6">G0002</td>
							<td className="py-4 px-6">
								Apakah terdapat batang yang patah pada tanaman padi?
							</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">-</td>
						</tr>

						<tr className="bg-white border-b">
							<td className="py-4 px-6">G0003</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">
								Apakah daun padi mengalami kerusakan?
							</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">-</td>
						</tr>

						<tr className="bg-white border-b">
							<td className="py-4 px-6">G0004</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">Apakah tanaman padi tidak berbuah?</td>
							<td className="py-4 px-6">-</td>
						</tr>

						<tr className="bg-white border-b">
							<td className="py-4 px-6">G0004</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">-</td>
							<td className="py-4 px-6">Apakah Akar padi membusuk?</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default RiwayatKonsultasi;
