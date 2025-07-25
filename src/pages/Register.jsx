import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-dvh items-center bg-gradient-to-br from-cyan-500 to-cyan-800">
      <form className="w-2xl bg-white p-4 rounded-xl shadow-xl flex flex-col items-center gap-4">
        <h1 className="text-4xl">Registration</h1>
        <div className="flex w-full gap-2 items-center">
          <label htmlFor="name">Name</label>
          <input
            className="flex-1 border border-gray-500 rounded-md px-2 py-2"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </div>
        <div className="flex w-full gap-2 items-center">
          <label htmlFor="phone">Mobile</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your mobile number"
            className="flex-1 border border-gray-500 rounded-md px-2 py-2"
          />
        </div>
        <div className="flex w-full gap-2 items-center">
          <label htmlFor="dob">Date of Birth</label>
          <input
            className="flex-1 border border-gray-500 rounded-md px-2 py-2"
            type="date"
            name="dob"
          />
        </div>
        <div className="flex w-full gap-2 items-center">
          <label htmlFor="email">Email ID</label>
          <input
            className="flex-1 border border-gray-500 rounded-md px-2 py-2"
            type="email"
            name="email"
            placeholder="Enter your email id"
          />
        </div>
        <div className="flex w-full gap-2 items-center">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            className="flex-1 border border-gray-500 rounded-md px-2 py-2"
          />
        </div>
        <div>
          <button
            className="border-2 border-green-600 px-2 py-2 rounded-xl text-green-600 hover:bg-green-600 hover:text-white hover:cursor-pointer transition"
            type="submit"
          >
            Register
          </button>
        </div>
        <div>
          <Link to="/">Back to home</Link>
          <Link to="/login">Already have an account?</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
