import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { authRequest, publicRequest } from '../../AxiosInstances';

const Manage = () => {
	//Storing Data Penyakit
	const [penyakit, setPenyakit] = useState([]);

	//Storing Fetching Error
	const [err, setErr] = useState(null);

	const [popUp, setPopUp] = useState(false);

	useEffect(() => {
		const getData = async () => {
			try {
				const res = await publicRequest.get(`/diseases`);
				setPenyakit(res.data.data);
			} catch (err) {
				setErr('Err');
			}
		};
		getData();
	}, []);

	const clickHandle = (e) => {
		authRequest
			.delete(`/diseases/${e.target.name}`)
			.then(() => {
				setPopUp(true)
			})
			.catch((err) => {
				setErr(err);
			});
	};

	return (
		<div>
			<div className="overflow-x-auto relative mt-16">
				<h3 className="font-bold text-3xl text-indigo-900 mb-8">
					Manage Penyakit
				</h3>
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-md text-gray-50 uppercase bg-gray-700">
						<tr>
							<th scope="col" className="py-3 px-6">
								Kode Penyakit
							</th>
							<th scope="col" className="py-3 px-6">
								Nama Penyakit
							</th>
							<th scope="col" className="py-3 px-6">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{penyakit?.map((item, index) => (
							<tr className="bg-white border-b" key={index + 1}>
								<td className="py-4 px-6">P000{item.id}</td>
								<td className="py-4 px-6">{item.name}</td>
								<td className="py-4 px-6 flex gap-4">
									<Link
										to={`/admin/edit/penyakit/${item.id}`}
										className="bg-blue-500 px-8 py-2 text-white text-sm rounded-md"
									>
										Edit Penyakit
									</Link>
									<Link
										to={`/admin/edit/gejala/${item.id}`}
										className="bg-yellow-500 px-8 py-2 text-white text-sm rounded-md"
									>
										Edit Gejala
									</Link>
									<button
										onClick={clickHandle}
										name={item.id}
										className="bg-red-500 px-8 py-2 text-white text-sm rounded-md"
									>
										Hapus
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Manage;
