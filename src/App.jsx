// import { useFormik, ErrorMessage, FormikProvider, Field } from "formik";
// import React, { useEffect } from "react";
// import { object, string } from "yup";
import FrontEndValidation from "./Components/FrontEndValidation";
import React from "react";

const App = () => {
  // let userSchema = object({
  //   name: string().required().min(6).max(50),
  //   email: string().email(),
  // });
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //   },
  //   onSubmit: (values) => console.log("this is formik data", values),
  //   validationSchema: userSchema,
  // });

  // const { errors, touched, values, resetForm, setValues } = formik;

  // useEffect(() => console.log(errors), [errors]);

  return (
    <>
      {/* <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Field name="name" className="border-2" />
          {/* {errors.name && touched.name ? <div>{errors.name}</div> : null} */}
      {/* <ErrorMessage name="name" />

          <Field name="email" className="border-2" />
          <ErrorMessage name="email" />

          <button
            type="submit"
            className="bg-slate-800 text-cyan-700 px-3 py-2 rounded "
          >
            Submit
            
          </button>
        </form>
      </FormikProvider> */}

      <FrontEndValidation />
    </>
  );
};

export default App;
