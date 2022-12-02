import React from 'react';
import { Link } from 'react-router-dom';

const Penyakit = () => {
	return (
		<div className="flex flex-col gap-24 justify-center items-center mt-16">
			{/* Penyakit Thumbnail */}
			<img
				src="https://picsum.photos/600/400/?random"
				alt=""
				className="w-[500px] h-64 rounded-xl object-cover"
			/>

			{/* Judul Penyakit */}
			<h3 className="text-3xl font-bold text-indigo-900">
				Props.disease_title
			</h3>

			{/* Answer */}
			<div className="flex justify-between w-full gap-24">
				<div className='basis-1/2'>
          <h2 className='font-semibold text-2xl mb-8'>Deskripsi</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quod esse tempore? Sunt corporis inventore impedit nulla culpa consequuntur doloribus voluptatibus nobis fugiat voluptate cupiditate, ratione sequi optio ipsam exercitationem.</p>
        </div>

        <div className='basis-1/2'>
          <h2 className='font-semibold text-2xl mb-8'>Gejala</h2>
          <div className='flex flex-col gap-4'>
            <Link to={"/gejala/props.gejala_id"} className='w-full bg-yellow-500 text-white rounded-xl py-2 px-8 hover:bg-yellow-600 transition-all ease-in-out'>props.gejala_1</Link>
            <Link to={"/gejala/props.gejala_id"} className='w-full bg-yellow-500 text-white rounded-xl py-2 px-8 hover:bg-yellow-600 transition-all ease-in-out'>props.gejala_2</Link>
            <Link to={"/gejala/props.gejala_id"} className='w-full bg-yellow-500 text-white rounded-xl py-2 px-8 hover:bg-yellow-600 transition-all ease-in-out'>props.gejala_3</Link>
          </div>
        </div>
			</div>
		</div>
	);
};

export default Penyakit;
