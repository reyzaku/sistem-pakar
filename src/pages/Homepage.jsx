import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../component/Card';
import { consultReset } from '../redux/consultReduces';

const Homepage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(consultReset())
	},[])
	
	return (
		<div className="">
			<div className="flex flex-col justify-center items-center mt-32 gap-4">
				<h1 className="font-bold text-3xl text-center text-indigo-900">
					SISTEM PAKAR UNTUK MENDIAGNOSA PENYAKIT PADA TANAMAN PADI MENGGUNAKAN
					METODE FORWARD CHAINING
				</h1>
				<div className='flex gap-4 items-center'>
					<img
						src="https://picsum.photos/600/400/?random"
						alt=""
						className="w-12 h-12 rounded-full"
					/>

					{/* =========================================================================== */}
					{/* ==========================[ AUTHOR NAME HERE ]============================== */}
					{/* =========================================================================== */}
					<h4>BY : AUTHOR_NAME</h4>
				</div>
			</div>
			<div className="flex justify-between gap-4 items-center mt-32">
				<Card
					title="Daftar Penyakit"
					link="penyakit"
					text="white"
					color="bg-red-500"
					hover="hover:bg-red-600"
				/>
				<Card
					title="Daftar Gejala"
					link="gejala"
					text="white"
					color="bg-yellow-500"
					hover="hover:bg-yellow-600"
				/>
				<Card
					title="Konsultasi"
					link="konsultasi"
					text="white"
					color="bg-blue-500"
					hover="hover:bg-blue-600"
				/>
				<Card
					title="Riwayat Konsultasi"
					link="riwayat"
					text="white"
					color="bg-green-500"
					hover="hover:bg-green-600"
				/>
			</div>
		</div>
	);
};

export default Homepage;
