const FormSection = () => {
  return (
    <div className="md:w-full md:max-w-sm mt-10 max-w-sm flex flex-col m-auto md:mb-10 mb-20 pb-8">
      <form className="flex flex-col shadow-xl rounded-lg p-4 bg-[#ffffff]">
        <div className="mb-3">
          <input
            className="border rounded-md w-full py-3 px-3 focus:outline-none focus:border-blue-600 focus:shadow-md"
            type="text"
            placeholder="Email or phone number"
            id="name"
            name="name"
            autoComplete="on"
          />
        </div>
        <div className="mb-3">
          <input
            className="border rounded-md w-full py-3 px-3 focus:outline-none focus:border-blue-600 focus:shadow-md"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </div>
        <div className="flex flex-col mb-3">
          <button className="w-full py-3 px-3 border rounded-md font-bold bg-[#1877F2] text-white text-xl">
            Log In
          </button>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            className="text-[#1877F2] flex justify-center text-sm m-3 hover:underline"
          >
            Forgot password?
          </a>
        </div>
        <hr />
        <div className="flex mt-3 items-center justify-center mb-3">
          <button className="bg-[#42B72A] hover:bg-[#36a420] py-3 px-4 mt-3 font-bold text-white rounded-md transition">
            Create new account
          </button>
        </div>
      </form>
      <p className="text-center mt-6 text-sm">
        {/* eslint-disable-next-line */}
        <a href="#" className="cursor-pointer hover:underline">
          <strong>Create a Page</strong>
        </a>{" "}
        for a celebrity, brand or business.
      </p>
    </div>
  );
};

export default FormSection;
