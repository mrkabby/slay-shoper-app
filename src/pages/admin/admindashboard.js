import Footer from "../../component/footer";
import Navbar from "../../component/navbar";


export default function AdminDasboard() {
  return (
    <>
      <Navbar/>

      <div className="border h-screen flex mt-2 p-5 gap-4">
        <div className="">
          <div className="profile-card border rounded w-72 pt-2 bg-slate-200">
            <img
              src="https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/278567383_5396373797049037_1926003296313635329_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGb3r5rbWfeWxN252lSr4rVUj4t-OzvXEdSPi347O9cR1GRn8he3bmXJGLgsGl0F-uevX2S8zjrZHdbTvPqq5D6&_nc_ohc=HuDkONHq51AAb7pDQOB&_nc_ht=scontent-mad2-1.xx&oh=00_AfBOPOf63kRdQ5oF4XhWF795szi8-z7H2OlZKQ7cvPyH0Q&oe=662DA9C4"
              className="object-cover h-40 w-40 rounded-full mx-auto"
            />
            <h3 className="text-center font-bold">Customer 1</h3>
            <div className="money text-center mb-2">
              
            </div>
          </div>
          <div className="adverts border mt-2 text-center cursor-pointer rounded bg-slate-200">
            My adverts
          </div>
          <div className="account-info text-center bg-slate-200 mt-3 rounded cursor-pointer">
            Account information
          </div>
          <div className="feedback text-center bg-slate-200 mt-3 cursor-pointer">
            My feedback
          </div>
        </div>
        <div className=" flex-1 mr-2 border bg-slate-200 rounded">
          <h3 className="text-center font-bold flex justify-center items-center h-12">
            My Orders{" "}
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 ml-2"
                fill="black"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
          </h3>
          <hr border-black />
        </div>
      </div>

      <Footer />
    </>
  );
}