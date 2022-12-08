import React from 'react'
import Card from '../../component/Card';


const HomepageAdmin = () => {
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
					<h4>BY : AUTHOR_NAME</h4>
				</div>
			</div>
			<div className="flex justify-between gap-4 items-center mt-32">
				<Card
					title="Tambah Penyakit"
					link="admin/tambah/penyakit"
					text="white"
					color="bg-blue-500"
					hover="hover:bg-blue-600"
				/>
				<Card
					title="Tambah Gejala"
					link="admin/tambah/gejala"
					text="white"
					color="bg-green-500"
					hover="hover:bg-green-600"
				/>
				<Card
					title="Manage Penyakit"
					link="admin/manage"
					text="white"
					color="bg-yellow-500"
					hover="hover:bg-yellow-600"
				/>
			</div>
		</div>
    )
}

export default HomepageAdmin