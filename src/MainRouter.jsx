import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DaftarPenyakit from "./pages/DaftarPenyakit";
import Homepage from "./pages/Homepage";
import HomepageAdmin from "./pages/admin/Homepage";
import Penyakit from "./pages/Penyakit";
import DaftarGejala from "./pages/DaftarGejala";
import HasilDiagnosa from "./pages/HasilDiagnosa";
import RiwayatKonsultasi from "./pages/RiwayatKonsultasi";
import Auth from "./pages/admin/Auth";
import PertanyaanPertama from "./pages/PertanyaanPertama";
import Pertanyaan from "./pages/Pertanyaan";
import TambahPenyakit from "./pages/admin/TambahPenyakit";
import TambahGejala from "./pages/admin/TambahGejala";
import Manage from "./pages/admin/Manage";
import EditGejala from "./pages/admin/EditGejala";
import EditPenyakit from "./pages/admin/EditPenyakit";
import { useDispatch, useSelector } from "react-redux";
import { me } from "./redux/userReducers";

const MainRouter = () => {
  const dispatch = useDispatch();
  const { currentUser, isLoading, isSuccess } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    dispatch(me());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/penyakit" element={<DaftarPenyakit />} />
      <Route path="/penyakit/:id" element={<Penyakit />} />
      <Route path="/gejala" element={<DaftarGejala />} />
      <Route path="/gejala/gejala" element={<Penyakit />} />
      <Route path="/konsultasi" element={<PertanyaanPertama />} />
      <Route path="/q/:id" element={<Pertanyaan />} />
      <Route path="/q2/:id" element={<Pertanyaan />} />
      <Route path="/hasil/:id" element={<HasilDiagnosa />} />
      <Route path="/hasil" element={<HasilDiagnosa data={null} />} />
      <Route path="/riwayat" element={<RiwayatKonsultasi />} />

      {/* Admin Pages */}
      <Route
        path="/masuk"
        element={currentUser ? <Navigate to="/" /> : <Auth />}
      />
      <Route
        path="/admin"
        element={currentUser ? <HomepageAdmin /> : <Navigate to={"/masuk"} />}
      />
      <Route
        path="/admin/tambah/penyakit"
        element={currentUser ? <TambahPenyakit /> : <Navigate to={"/masuk"} />}
      />
      <Route
        path="/admin/edit/penyakit/:id"
        element={currentUser ? <EditPenyakit /> : <Navigate to={"/masuk"} />}
      />
      <Route
        path="/admin/tambah/gejala"
        element={currentUser ? <TambahGejala /> : <Navigate to={"/masuk"} />}
      />
      <Route
        path="/admin/edit/gejala/:id"
        element={currentUser ? <EditGejala /> : <Navigate to={"/masuk"} />}
      />
      <Route
        path="/admin/manage"
        element={currentUser ? <Manage /> : <Navigate to={"/masuk"} />}
      />
    </Routes>
  );
};

export default MainRouter;
