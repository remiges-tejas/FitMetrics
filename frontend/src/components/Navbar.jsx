import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-teal-600 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg
            fill="#ffffff"
             className="w-14 mx-2 mr-4"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier"></g>
         
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M490.667,382.485h-21.333V139.669c13.12-15.019,21.333-34.411,21.333-55.851c0-39.637-27.285-72.768-64-82.304v60.971 c0,11.776-9.536,21.333-21.333,21.333c-11.797,0-21.333-9.557-21.333-21.333V1.515c-36.715,9.536-64,42.667-64,82.304 c0,21.44,8.213,40.832,21.333,55.851v242.816h-42.667V147.819c0-11.776-9.536-21.333-21.333-21.333h-42.667v149.333 c0,8.619-5.184,16.405-13.163,19.712c-2.645,1.088-5.419,1.621-8.171,1.621c-5.547,0-11.008-2.176-15.083-6.251l-27.584-27.584 l-27.584,27.584c-6.101,6.101-15.275,7.936-23.253,4.629c-7.979-3.307-13.163-11.093-13.163-19.712V126.485H64 c-11.797,0-21.333,9.557-21.333,21.333v234.667H21.333C9.536,382.485,0,392.043,0,403.819 c0,58.816,47.851,106.667,106.667,106.667h298.667c58.816,0,106.667-47.851,106.667-106.667 C512,392.043,502.464,382.485,490.667,382.485z M405.333,467.819H106.667c-27.819,0-51.541-17.835-60.352-42.667H64h213.333 h85.333c11.797,0,21.333-9.557,21.333-21.333V166.4c0.747,0.192,1.536,0.256,2.304,0.448c1.387,0.299,2.773,0.555,4.181,0.811 c4.672,0.832,9.387,1.387,14.165,1.429c0.235,0,0.448,0.064,0.683,0.064c0.235,0,0.448-0.064,0.683-0.064 c4.779-0.043,9.493-0.597,14.165-1.429c1.408-0.256,2.795-0.512,4.181-0.811c0.768-0.192,1.557-0.256,2.304-0.448v237.419 c0,11.776,9.536,21.333,21.333,21.333h17.685C456.875,449.984,433.152,467.819,405.333,467.819z"></path>{" "}
                    <path d="M185.749,218.069L192,224.32v-97.835h-42.667v97.835l6.251-6.251C163.925,209.728,177.408,209.728,185.749,218.069z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>

          <Link to="/" className="text-white -tracking-tighter text-xl font-logo-popins">
            FitMetrics
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-coral font-bold font-sans">
              Home{" "}
            </Link>
          </li>
          <li>
            <Link to="/upload" className="text-white hover:text-coral font-bold font-sans">
              Upload File
            </Link>
          </li>
          <li>
            <Link to="/bmidata" className="text-white hover:text-coral font-bold font-sans">
              View BMI Data
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
