import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addServiceData } from "../utils/serviceDataSlice";
import axios from "axios";
import Counter from "./Counter";
import { BACKEND_URL } from "../utils/constant";

const ServicePage = () => {
  const serviceData = useSelector((store) => store.serviceData) || [];
  const dispatch = useDispatch();

  const getServiceData = async () => {
    try {
      const res = await axios.get(BACKEND_URL + "/getServices");
      dispatch(addServiceData(res?.data || []));
    } catch (err) {
      console.error("Error fetching service data:", err.message);
    }
  };

  useEffect(() => {
    getServiceData();
  }, []);

  return (
    <div className="px-6 pt-18 mb-20">
      <h1 className="text-center bg-base-200  p-20 rounded-b-2xl font-bold text-5xl uppercase mb-8">
        Our Services
      </h1>
      <div className="pb-7">
        <p className="text-2xl font-bold text-center  mt-4 max-w-3xl mx-auto">
          "Bringing your<span className="text-[#00638F]"> vision</span> to life
          with precision and<span className="text-[#00638F]"> creativity</span>{" "}
          ."
        </p>
      </div>

      <ul className="space-y-12 flex flex-col items-center">
        {serviceData.map((data, index) => {
          const { serviceName, serviceDiscription, imageUrl } = data;
          return (
            <li
              key={index}
              className={`flex items-center w-[90%]  gap-12 p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "bg-base-200 " : "bg-base-300 "
              } flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                className="w-full md:w-[30rem] h-[18rem] object-cover rounded-lg"
                src={
                  imageUrl ||
                  "https://vfxpick.com/wp-content/uploads/2022/09/rotoscope-out-1.jpg"
                }
                alt={serviceName}
              />

              <div className="max-w-xl">
                <h2 className="text-3xl font-bold uppercase  mb-4">
                  {serviceName}
                </h2>
                <p className="textarea-md  leading-relaxed">
                  {serviceDiscription}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <Counter />
    </div>
  );
};

export default ServicePage;
