import React from "react";

const Herosection = () => {
  return (
    <>
      <div>
        <div className="flex mt-12 flex-col items-center justify-center text-center">
          <h2 className="text-[60px] text-[#f3f1f5] font-extrabold leading-[60px]">
            Github Profile Viewer
          </h2>
          <p className="max-w-[600px] mt-3 text-base leading-7 font-medium text-[#c0c0c0]">
            Discover detailed GitHub profiles seamlessly, leveraging the power
            of the GitHub REST API for in-depth insights.
          </p>
        </div>
        <div className="mt-20">
          <h2 className="text-[30px] text-[#f3f1f5] font-bold leading-9 flex items-center justify-center text-center">
            Features
          </h2>

          <div className="grid grid-cols-3 mt-10 px-5 gap-5">
            <div className="p-4 border border-[#f3f1f5] bg-[#444] rounded-xl">
              <h3 className="text-xl text-[#f3f1f5] font-bold">
                Effortless Navigation
              </h3>
              <p className="text-[#c0c0c0] text-[15px] leading-6 mt-2">
                The GitHub Profile Viewer offers seamless navigation with a
                user-friendly interface, making it easy for both seasoned
                open-source enthusiasts and curious observers to explore GitHub
                profiles.
              </p>
            </div>
            <div className="p-4 border border-[#f3f1f5] bg-[#444] rounded-xl">
              <h3 className="text-xl text-[#f3f1f5] font-bold">
                Search Functionality
              </h3>
              <p className="text-[#c0c0c0] text-[15px] leading-6 mt-2">
                A dynamic search modal allows users to search GitHub usernames
                and view results. It uses the GET method to fetch user profiles
                from the GitHub REST API.
              </p>
            </div>
            <div className="p-4 border border-[#f3f1f5] bg-[#444] rounded-xl">
              <h3 className="text-xl text-[#f3f1f5] font-bold">
                Profile Overview
              </h3>
              <p className="text-[#c0c0c0] text-[15px] leading-6 mt-2">
                Users can view detailed profiles for any GitHub username,
                including popular repositories, avatar, overview section, and
                links to repositories and other features.
              </p>
            </div>
            <div className="p-4 border border-[#f3f1f5] bg-[#444] rounded-xl">
              <h3 className="text-xl text-[#f3f1f5] font-bold">
                Popular Repositories
              </h3>
              <p className="text-[#c0c0c0] text-[15px] leading-6 mt-2">
                The profile page features the user's popular repositories sorted
                by star count. Each repository card displays the name,
                description, language, star count, and fork count.
              </p>
            </div>
            <div className="p-4 border border-[#f3f1f5] bg-[#444] rounded-xl">
              <h3 className="text-xl text-[#f3f1f5] font-bold">
                Paginated Repository
              </h3>
              <p className="text-[#c0c0c0] text-[15px] leading-6 mt-2">
                The repositories page shows a paginated list of a user's
                repositories, allowing navigation through pages to view more,
                with each page displaying a limited number.
              </p>
            </div>
            <div className="p-4 border border-[#f3f1f5] bg-[#444] rounded-xl">
              <h3 className="text-xl text-[#f3f1f5] font-bold">
                Interactive UI Elements
              </h3>
              <p className="text-[#c0c0c0] text-[15px] leading-6 mt-2">
                The application features interactive elements like clickable
                repository names that open their GitHub pages, hover effects,
                and responsive design to enhance the user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
