import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DaftarPenyakit from './pages/DaftarPenyakit';
import Homepage from './pages/Homepage';
import HomepageAdmin from './pages/admin/Homepage';
import Penyakit from './pages/Penyakit';
import DaftarGejala from './pages/DaftarGejala';
import HasilDiagnosa from './pages/HasilDiagnosa';
import RiwayatKonsultasi from './pages/RiwayatKonsultasi';
import Auth from './pages/admin/Auth';
import PertanyaanPertama from './pages/PertanyaanPertama';
import Pertanyaan from './pages/Pertanyaan';
import TambahPenyakit from './pages/admin/TambahPenyakit';
import TambahGejala from './pages/admin/TambahGejala';
import Manage from './pages/admin/Manage';
import EditGejala from './pages/admin/EditGejala';
import EditPenyakit from './pages/admin/EditPenyakit';
import { useSelector } from 'react-redux';

const MainRouter = () => {
	const user = useSelector((state) => state.user.currentUser);
	
	return (
		<Routes>
			<Route exact path="/" element={<Homepage />} />
			<Route path="/penyakit" element={<DaftarPenyakit />} />
			<Route path="/penyakit/:id" element={<Penyakit />} />
			<Route path="/gejala" element={<DaftarGejala />} />
			<Route path="/gejala/gejala" element={<Penyakit />} />
			<Route path="/konsultasi" element={<PertanyaanPertama />} />
			<Route path="/q/:id" element={<Pertanyaan />} />
			<Route path="/hasil" element={<HasilDiagnosa />} />
			<Route path="/riwayat" element={<RiwayatKonsultasi />} />

			{/* Admin Pages */}
			<Route path="/masuk" element={user ? <Navigate to="/" /> : <Auth />} />
			<Route path="/admin" element={user ? <HomepageAdmin /> : <Navigate to={"/masuk"}/>} />
			<Route path="/admin/tambah/penyakit" element={user ? <TambahPenyakit />: <Navigate to={"/masuk"}/>} />
			<Route path="/admin/edit/penyakit/:id" element={user ? <EditPenyakit /> : <Navigate to={"/masuk"}/>} />
			<Route path="/admin/tambah/gejala" element={user ? <TambahGejala /> : <Navigate to={"/masuk"}/>} />
			<Route path="/admin/edit/gejala/:id" element={user ? <EditGejala /> : <Navigate to={"/masuk"}/>} />
			<Route path="/admin/manage" element={user ? <Manage /> : <Navigate to={"/masuk"}/>} />
		</Routes>
	);
};

export default MainRouter;
