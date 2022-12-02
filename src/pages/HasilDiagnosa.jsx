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
			<div className="mt-16 mx-20">
				<table className="text-lg text-left text-gray-500">
					<tbody>
						<tr className="bg-white border-b">
							<td className="py-4 px-6 font-bold">Nama Penyakit</td>
							<td className="py-4 px-6 font-bold text-red-500">Bash</td>
						</tr>

						<tr className="bg-white border-b">
							<td className="py-4 px-6 font-bold">Gejala</td>
							<td className="py-4 px-6">
								<li>Daung Menguning</li>
								<li>Batang Rusak</li>
								<li>Akar Membusuk</li>
							</td>
						</tr>

						<tr className="bg-white border-b">
							<td className="py-4 px-6 font-bold">Solusi</td>
							<td className="py-4 px-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, mollitia asperiores quos ipsa velit ea veniam hic delectus voluptatem id suscipit alias cupiditate repellat doloremque eligendi voluptates sapiente vitae quod!</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default HasilDiagnosa;
