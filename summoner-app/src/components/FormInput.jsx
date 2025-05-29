import { React, useRef } from "react";
import { useNavigate, Form } from "react-router-dom";

export const FormInput = () => {
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/player/${inputRef.current.value}`);
  };
  return (
    <div>
      <Form
        method="get"
        action="/player/"
        onSubmit={handleSubmit}
        className="mt-4 px-6 text-center"
      >
        <input
          ref={inputRef}
          name="q"
          placeholder="Summoner Name"
          className=" text-center w-full md:w-4/5 border-2 bordercolor-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5 dark:text-black md:hover:bg-gray-300 3xl:w-full"
        ></input>
        <button
          className="bg-red-500 dark:bg-sky-700 rounded w-full md:w-4/5 3xl:w-full  text-white py-3 md:px-4 mt-3 hover:bg-slate-700 dark:hover:bg-sky-500"
          type="submit"
        >
          Search
        </button>
      </Form>
    </div>
  );
};
