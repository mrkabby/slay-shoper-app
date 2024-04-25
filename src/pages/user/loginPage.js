import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router v6
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const data = await response.json();
      if (response.ok) {
        handleSuccess("Login successful!");
        // Perform any necessary actions upon successful login
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(data.message || "Failed to login");
      }
    } catch (error) {
      console.log(error);
      handleError("An error occurred while logging in");
    }
  };

  return (
    <div className="bg-black dark:bg-gray-900 flex justify-center px-6 py-12 ">
      <div className="flex justify-center w-full xl:w-3/4 lg:w-11/12 ">
        <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg "
              style={{ backgroundImage: "url('https://scontent.facc5-2.fna.fbcdn.net/v/t1.6435-9/165396220_4163447457008350_6246237197794301767_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFTocmDIF7Co44R1Ng9PHayQUQQpohqkgNBRBCmiGqSA7fFYGCZ4AD1BLXz0LYMwt_eWgqtQsoa2aKF8-rp3R1A&_nc_ohc=uCL_3z-9k3QAb7n5uTC&_nc_ht=scontent.facc5-2.fna&oh=00_AfAFFDWvw86P8JMEqKIUKlSttMIvyughJ-u_RU68PWOZyA&oe=664A4928')" }}></div>
        <div className="w-full lg:w-4/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
          <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white font-bold">Login to Your Account</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="username">
                username
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="userName"
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleOnChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                value={password}
                onChange={handleOnChange}
              />
              <p className="text-xs italic text-red-500">Please enter your password.</p>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 dark:bg-blue-700 dark:text-white dark:hover:bg-black focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a className="inline-block text-sm text-black dark:text-black-500 align-baseline" href="/register">
                Don't have an account? Sign Up
              </a>
              <a href="/" className="flex font-semibold text-black text-sm mt-10">
            <svg className="fill-current mr-2 text-black w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Go back to Homepage
          </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
