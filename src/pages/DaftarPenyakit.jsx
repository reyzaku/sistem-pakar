import React, { useEffect, useState } from 'react';
import { publicRequest } from '../AxiosInstances';
import PenyakitCard from '../component/PenyakitCard';

const DaftarPenyakit = () => {
	//Storing Data Penyakit
	const [penyakit, setPenyakit] = useState([]);

    //Storing Fetching Error
	const [err, setErr] = useState(null);

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
	return (
		<div className="container my-12">
			<div className="flex flex-wrap -mx-1 lg:-mx-4">
				{penyakit?.map((item, index) => (
					<PenyakitCard data={item} key={index}/>
				))}
			</div>
		</div>
	);
};

export default DaftarPenyakit;
