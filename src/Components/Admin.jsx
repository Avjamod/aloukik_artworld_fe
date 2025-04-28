// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { addData } from "../utils/homeDataSlice";
// import { addServiceQuote } from "../utils/serviceQuoteSlice";

// const Admin = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { homeData } = useSelector((store) => store) || {};
//   const { serviceQuote } = useSelector((store) => store) || {};

//   const [heroQuote, setHeroQuote] = useState(homeData?.heroQuotes || "");
//   const [heroDesc, setHeroDescription] = useState(
//     homeData?.heroDescription || ""
//   );
//   const [serviceQ, setServiceQ] = useState(serviceQuote);

//   const getData = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/getData");
//       dispatch(addData(res?.data));
//     } catch (err) {
//       console.error("Error fetching data:", err.message);
//     }
//   };

//   const checkAuth = async () => {
//     try {
//       await axios.get("http://localhost:1111/admin/verify", {
//         withCredentials: true,
//       });
//     } catch (err) {
//       navigate("/");
//       console.error("Auth Error:", err.message);
//     }
//   };
//   const getServiceQuote = async () => {
//     try {
//       const res = await axios.get("http://localhost:1111/get/serviceQuote");

//       dispatch(addServiceQuote(res?.data[0]?.serviceQuote));
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
//   useEffect(() => {
//     if (homeData) {
//       setHeroQuote(homeData.heroQuotes || "");
//       setHeroDescription(homeData.heroDescription || "");
//       setServiceQ(serviceQ || "");
//     }
//   }, [homeData]);

//   useEffect(() => {
//     checkAuth();
//     getData();
//     getServiceQuote();
//   }, []);

//   const handleUpdate = async () => {
//     try {
//       const res = await axios.put(
//         "http://localhost:1111/admin/update",
//         { heroQuotes: heroQuote, heroDescription: heroDesc },
//         { withCredentials: true }
//       );

//       dispatch(addData(res?.data?.data));
//     } catch (err) {
//       console.error("Update Error:", err.message);
//     }
//   };
//   const updateServiceQuote = async () => {
//     try {
//       const res = await axios.put(
//         "http://localhost:1111/update/serviceQuote",
//         { serviceQ },
//         { withCredentials: true }
//       );
//       console.log(res?.data?.data);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <fieldset className="fieldset flex flex-col bg-base-300 border border-base-300 p-4 rounded-box w-[80%]">
//         <legend className="fieldset-legend">Page Update</legend>

//         <fieldset className="fieldset">
//           <legend className="fieldset-legend">Main Quote</legend>
//           <textarea
//             className="textarea h-24 w-[80%]"
//             value={heroQuote}
//             onChange={(e) => setHeroQuote(e.target.value)}
//           />
//         </fieldset>

//         <fieldset className="fieldset">
//           <legend className="fieldset-legend">Hero Description</legend>
//           <textarea
//             className="textarea h-24 w-[80%]"
//             value={heroDesc}
//             onChange={(e) => setHeroDescription(e.target.value)}
//           />
//         </fieldset>

//         <button className="btn btn-success w-[20%]" onClick={handleUpdate}>
//           Update
//         </button>
//       </fieldset>

//       <fieldset className="fieldset flex flex-col bg-base-300 border border-base-300 p-4 rounded-box w-[80%]">
//         <legend className="fieldset-legend">Services Update</legend>

//         <fieldset className="fieldset">
//           <legend className="fieldset-legend">Service Quote</legend>
//           <textarea
//             className="textarea h-24 w-[80%]"
//             value={serviceQ}
//             onChange={(e) => setServiceQ(e.target.value)}
//           />
//         </fieldset>

//         <button
//           className="btn btn-success w-[20%]"
//           onClick={updateServiceQuote}
//         >
//           Update
//         </button>
//       </fieldset>
//     </div>
//   );
// };

// export default Admin;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../utils/homeDataSlice";
import { addServiceQuote } from "../utils/serviceQuoteSlice";
import { BACKEND_URL } from "../utils/constant";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { homeData } = useSelector((store) => store) || {};
  const { serviceQuote } = useSelector((store) => store) || {};

  const [heroQuote, setHeroQuote] = useState("");
  const [heroDesc, setHeroDescription] = useState("");
  const [serviceQ, setServiceQ] = useState("");
  const [bgImage, setBgImage] = useState({ myFile: "" });
  const [showToast, setShowToast] = useState(false);

  // Fetch home data
  const getData = async () => {
    try {
      const res = await axios.get(BACKEND_URL + "/getData");
      dispatch(addData(res?.data));
    } catch (err) {
      console.error("Error fetching data:", err.message);
    }
  };

  // Fetch service quote
  const getServiceQuote = async () => {
    try {
      const res = await axios.get(BACKEND_URL + "/get/serviceQuote");
      dispatch(addServiceQuote(res?.data[0]?.serviceQuote));
    } catch (err) {
      console.error("Error fetching service quote:", err.message);
    }
  };

  // Check admin authentication
  const checkAuth = async () => {
    try {
      await axios.get(BACKEND_URL + "/admin/verify", {
        withCredentials: true,
      });
    } catch (err) {
      navigate("/");
      console.error("Auth Error:", err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        BACKEND_URL + "/post/bgimage",
        { bgImage: bgImage.myFile },
        { withCredentials: true }
      );
      console.log("Uploaded");
    } catch (err) {
      console.error("Image Upload Error:", err.message);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setBgImage({ ...bgImage, myFile: base64 });
  };

  // Synchronize local states when store updates
  useEffect(() => {
    if (homeData) {
      setHeroQuote(homeData.heroQuotes || "");
      setHeroDescription(homeData.heroDescription || "");
    }
  }, [homeData]);

  useEffect(() => {
    if (serviceQuote) {
      setServiceQ(serviceQuote);
    }
  }, [serviceQuote]);

  // Initial data fetch and auth check
  useEffect(() => {
    checkAuth();
    getData();
    getServiceQuote();
  }, []);

  // Update home data
  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        BACKEND_URL + "/admin/update",
        { heroQuotes: heroQuote, heroDescription: heroDesc },
        { withCredentials: true }
      );

      dispatch(addData(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error("Update Error:", err.message);
    }
  };

  // Update service quote
  const updateServiceQuote = async () => {
    try {
      const res = await axios.put(
        BACKEND_URL + "/update/serviceQuote",
        { serviceQ },
        { withCredentials: true }
      );
      dispatch(addServiceQuote(res?.data?.data?.serviceQuote));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.error("Service Quote Update Error:", err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="px-4 md:pt-18 pt-16"></div>
      {/* Page Update Section */}
      <fieldset className="fieldset flex flex-col bg-base-300 border border-base-300 p-4 rounded-box w-[80%]">
        <legend className="fieldset-legend">Page Update</legend>

        {/* Main Quote */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Main Quote</legend>
          <textarea
            className="textarea h-24 w-[80%]"
            value={heroQuote}
            onChange={(e) => setHeroQuote(e.target.value)}
          />
        </fieldset>

        {/* Hero Description */}
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Hero Description</legend>
          <textarea
            className="textarea h-24 w-[80%]"
            value={heroDesc}
            onChange={(e) => setHeroDescription(e.target.value)}
          />
        </fieldset>

        <button className="btn btn-success w-[20%]" onClick={handleUpdate}>
          Update
        </button>
      </fieldset>

      {/* Services Update Section */}

      {showToast && (
        <div className="toast">
          <div className="alert alert-info">
            <span>Data Updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
