import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import axios from "axios";

const Contact = () => {
  const recaptchaRef = useRef();
  const validationSchema = yup.object({
    name: yup.string().required("Name is required."),
    email: yup.string().required("Email is required."),
    message: yup.string().required("Message is required"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const submitMessage = async (message) => {
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();
    const body = {
      ...message,
      token,
    };

    await axios
      .put("/api/sendMessage", body)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <section
      id="contact"
      className="flex flex-col max-w-7xl mx-auto pt-8 text-white"
    >
      <h3 className="w-fit pl-6 mt-12 md:pl-24 xl:pl-0 text-4xl lg:text-6xl font-bold text-white border-b-8 border-blue-700">
        Contact
      </h3>
      <p className="w-80 mx-auto text-center font-semibold text-xl pt-6 sm:pt-36">
        All feedback and inquiries are much appreciated!
      </p>
      <form
        onSubmit={handleSubmit(submitMessage)}
        className="flex flex-col w-72 sm:w-96 space-y-4 pt-4 pb-20 sm:pb-36 mx-auto"
      >
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
          size="invisible"
          ref={recaptchaRef}
        />
        <div>
          <input
            {...register("name")}
            className="w-full h-8 bg-slate-700 focus:outline-none pl-2"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-xs text-red-500 pt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register("email")}
            className="w-full h-8  bg-slate-700 focus:outline-none pl-2"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-xs text-red-500 pt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <textarea
            {...register("message")}
            className="w-full h-16 bg-slate-700 focus:outline-none pl-2 pt-1"
            placeholder="Message"
          />
          {errors.message && (
            <p className="text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="relative bg-blue-700 rounded py-2 group"
        >
          <span className="absolute top-0 left-0 w-0 h-full transition-all ease-in-out duration-500 bg-indigo-800 rounded group-hover:w-full"></span>
          <span className="relative">Submit</span>
        </button>
      </form>
    </section>
  );
};

export default Contact;
