import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addServiceData } from "../utils/serviceDataSlice";
import { addServiceQuote } from "../utils/serviceQuoteSlice";

const ServiceMain = () => {
  const dispatch = useDispatch();
  const serviceData = useSelector((store) => store.serviceData) || [];
  const serviceQuote = useSelector((store) => store.serviceQuote || "");
  const getServiceData = async () => {
    try {
      const res = await axios.get("http://localhost:1111/getServices");
      dispatch(addServiceData(res?.data || []));
    } catch (err) {
      console.error(err.message);
    }
  };
  const getServiceQuote = async () => {
    try {
      const data = await axios.get("http://localhost:1111/get/serviceQuote");
      console.log(data?.data[0]?.serviceQuote);
      dispatch(addServiceQuote(data?.data[0]?.serviceQuote));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getServiceData();
    getServiceQuote();
  }, []);
  return (
    <div className="flex flex-col justify-center my-6 items-center md:min-h-screen text-center">
      <h3 className="text-xl font-bold uppercase mb-4 font-[Roboto Condensed]">
        Our Services
      </h3>
      <h2 className="md:text-3xl text-lg px-1 font-bold mb-8 uppercase">
        "{serviceQuote}"
      </h2>
      <div className=" w-[90%]  grid md:grid-cols-4">
        {Array.isArray(serviceData) && serviceData.length > 0
          ? serviceData.map((data) => (
              <ServiceCard
                key={data?._id}
                header={data?.serviceName}
                content={data?.serviceDiscription}
              />
            ))
          : ""}
      </div>
    </div>
  );
};

export default ServiceMain;
