import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const universityData = [
  { location: "Lahore", university: "University of the Punjab" },
  { location: "Islamabad", university: "Quaid-i-Azam University" },
  { location: "DIKhan", university: "Gomal-University" },
  { location: "Multan", university: "Multan-University" },
  { location: "Karachi", university: "University of Karachi" },
  { location: "Peshawar", university: "University of Peshawar" },
];

const locationSchema = Yup.object().shape({
  location: Yup.string().required("Location is required"),
});

const FrontEndValidation = () => (
  <>
    <div className="flex justify-center bg-slate-800 h-screen items-center  ">
      <div className=" overflow-hidden  rounded-xl  bg-cyan-700 w-96  h-52   p-16">
        <h1 className="text-center pb-3 font-bold italic hover:not-italic text-white  text-lg  ">
          Current University
        </h1>
        <Formik
          initialValues={{
            location: "",
          }}
          validationSchema={locationSchema}
          onSubmit={(values) => {
            const university = universityData.find(
              (data) => data.location === values.location
            ).university;
            alert(`Current university for ${values.location} is ${university}`);
          }}
        >
          {({ errors, touched }) => (
            <Form className=" flex justify-center">
              <label htmlFor="location">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="hover:bg-white  border-solid  bg-green-800  bg-white rounded-l-lg p-2  "
                />
              </label>
              <Field className="mx-2  p-1 px-2" name="location" as="select">
                <option value="">Select a location</option>
                <option value="Lahore">Lahore</option>
                <option value="DIKhan">Dera ismail Khan</option>
                <option value="Multan">Multan</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
                <option value="Peshawar">Peshawar</option>
              </Field>
              {errors.location && touched.location ? (
                <div>{errors.location}</div>
              ) : null}
              <button
                className="rounded-r-lg px-2 text-white hover:bg-blue-600 bg-red-600"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </>
);

export default FrontEndValidation;
