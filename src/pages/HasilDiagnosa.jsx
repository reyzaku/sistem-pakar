import React from 'react';

const HasilDiagnosa = () => {
	return (
		<div className="mt-16">
			<h1 className="text-4xl font-bold text-indigo-900 text-center mb-4">
				Hasil Diagnosa
			</h1>
			<h1 className="text-sm text-indigo-900 text-center">
				Dibuat pada: props.created_at
			</h1>
			<div className="overflow-x-auto relative mt-16">
				<div className="flex justify-start text-xl border-r border-t border-l border-gray-500 h-16 items-center">
					<p className="basis-1/4 border-r ml-8 border-gray-500 text-indigo-900">
						Nama Penyakit
					</p>
					<div>
						<p className="w-full text-gray-500 ml-16">props.disease_name</p>
					</div>
				</div>
				<div className="flex justify-start text-xl border-r border-t border-l border-gray-500 py-4">
					<p className="basis-1/4 border-r ml-8 border-gray-500 text-indigo-900">
						Gejala
					</p>
					<div>
						<p className="w-full text-gray-500 ml-16">props.disease_name</p>
						<p className="w-full text-gray-500 ml-16">props.disease_name</p>
						<p className="w-full text-gray-500 ml-16">props.disease_name</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HasilDiagnosa;
