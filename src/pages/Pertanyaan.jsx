import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { publicRequest } from "../AxiosInstances";
import { consultReset, consultYes } from "../redux/consultReduces";

const Pertanyaan = () => {
  //Storing Data
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [question, setQuestion] = useState(id);

  const consult = useSelector((state) => state.consult);

  const location = useLocation();
  const currentLocation = location.pathname.split("/")[1];

  //Storing Fetching Error
  const [err, setErr] = useState(null);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await publicRequest.get(`/symptoms/${question}`);
        setData(res.data.data);
        console.log(res.data);
      } catch (err) {
        setErr(err);
      }
    };
    getData();
  }, [question, setQuestion]);

  const Answer = (event) => {
    let answer = event.target.name;
    let nextQuestion = "";

    //Jika User Klik Iya
    if (answer === "yes") {
      switch (consult.nextQuestion) {
        //Kalau Next Question Kosong, maka Pertanyaan selanjutnya leaf
        case "":
          dispatch(consultYes({ disease: id.charAt(0), nextQuestion: "leaf" }));
          nextQuestion = question.charAt(0);
          setQuestion(nextQuestion);
          break;

        //Kalau Next Question leaf, maka Pertanyaan selanjutnya fruit
        case "leaf":
          //Kalau Gejala pada fruit kosong
          if (data[0].fruit === null) {
            // dispatch(consultReset())
            navigate(`/hasil/${consult.disease}`);

            //Kalau Gejala pada fruit & root kosong
          } else if (data[0].fruit === null && data[0].root === null) {
            // dispatch(consultReset())
            navigate(`/hasil/${consult.disease}`);
          } else {
            dispatch(
              consultYes({ disease: id.charAt(0), nextQuestion: "fruit" })
            );
            nextQuestion = question.charAt(0);
            setQuestion(nextQuestion);
          }

          break;

        //Kalau Next Question fruit, maka Pertanyaan selanjutnya root
        case "fruit":
          //Kalau Gejala pada root kosong
          if (data[0].root === null) {
            // dispatch(consultReset())
            navigate(`/hasil/${consult.disease}`);
          } else {
            dispatch(
              consultYes({ disease: id.charAt(0), nextQuestion: "root" })
            );
            nextQuestion = question.charAt(0);
            setQuestion(nextQuestion);
          }
          break;

        //Kalau Next Question root, maka Pertanyaan konsultasi selesai dan pindah halaman riwayat
        case "root":
          dispatch(consultYes({ disease: id.charAt(0), nextQuestion: "end" }));
          nextQuestion = question.charAt(0);
          navigate(`/hasil/${consult.disease}`);
          break;
        default:
          break;
      }

      //Jika User Menjawab Tidak
    } else if (answer === "no") {
      //Jika Sudah Menjawab Iya pada Pertanyaan Batang lalu menjawab tidak
      if (consult.nextQuestion !== "") {
        switch (consult.nextQuestion) {
          //Kalau Next Question Kosong, maka Pertanyaan selanjutnya leaf
          case "":
            dispatch(
              consultYes({ disease: id.charAt(0), nextQuestion: "leaf" })
            );
            nextQuestion = question.charAt(0);
            setQuestion(nextQuestion);
            break;

          //Kalau Next Question leaf, maka Pertanyaan selanjutnya fruit
          case "leaf":
            //Kalau Gejala pada fruit kosong
            if (data[0].fruit === null) {
              // dispatch(consultReset())
              navigate(`/hasil/${consult.disease}`);

              //Kalau Gejala pada fruit & root kosong
            } else if (data[0].fruit === null && data[0].root === null) {
              // dispatch(consultReset())
              navigate(`/hasil/${consult.disease}`);
            } else {
              dispatch(
                consultYes({ disease: id.charAt(0), nextQuestion: "fruit" })
              );
              nextQuestion = question.charAt(0);
              setQuestion(nextQuestion);
            }

            break;

          //Kalau Next Question fruit, maka Pertanyaan selanjutnya root
          case "fruit":
            //Kalau Gejala pada root kosong
            if (data[0].root === null) {
              // dispatch(consultReset())
              navigate(`/hasil/${consult.disease}`);
            } else {
              dispatch(
                consultYes({ disease: id.charAt(0), nextQuestion: "root" })
              );
              nextQuestion = question.charAt(0);
              setQuestion(nextQuestion);
            }
            break;

          //Kalau Next Question root, maka Pertanyaan konsultasi selesai dan pindah halaman riwayat
          case "root":
            dispatch(
              consultYes({ disease: id.charAt(0), nextQuestion: "end" })
            );
            nextQuestion = question.charAt(0);
            navigate(`/hasil/${consult.disease}`);
            break;
          default:
            break;
        }
      } else {
        //Jika Belum menjawab iya sebelumnya
        nextQuestion = question.substring(1);

        //Jika User menjawab Tidak dan pilihan penyakit sudah habis
        if (nextQuestion === "") {
          navigate(`/hasil/${consult.disease}`);
        } else {
          //Jika User menjawab Tidak dan pilihan penyakit masih ada
          setQuestion(nextQuestion);
        }
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-24 justify-center items-center">
        {/* Questions */}
        {data.length <= 0 ? (
          <></>
        ) : (
          <h3 className="text-4xl font-bold text-indigo-900">
            Apakah{" "}
            {consult.nextQuestion === ""
              ? data[0].stem
              : consult.nextQuestion === "leaf"
              ? data[0].leaf
              : consult.nextQuestion === "fruit"
              ? data[0].fruit
              : consult.nextQuestion === "root"
              ? data[0].root
              : ""}{" "}
            ?
          </h3>
        )}

        {/* Answer */}
        <div className="flex justify-center items-center gap-24">
          <button
            className="bg-green-500 text-white w-32 h-16 rounded-xl font-semibold hover:bg-green-600"
            name="yes"
            onClick={Answer}
          >
            Iya
          </button>
          <button
            className="bg-red-500 text-white w-32 h-16 rounded-xl font-semibold hover:bg-red-600"
            name="no"
            onClick={Answer}
          >
            Tidak
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pertanyaan;
