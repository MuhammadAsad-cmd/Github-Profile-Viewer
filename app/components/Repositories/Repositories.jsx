"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { FaCodeFork, FaRegStar } from "react-icons/fa6";

const Repositories = () => {
  const { username } = useParams();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
          setRepos(response.data);
        })
        .catch((error) => {
          console.error("Error fetching repositories:", error);
        });
    }
  }, [username]);

  return (
    <div className="max-w-[896px] w-full space-y-5">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="p-4 border min-h-[176px] flex-col flex justify-between border-[#f3f1f5] bg-[#444] rounded-lg"
        >
          <div>
            <h3
              className="text-2xl text-[#f3f1f5] font-bold cursor-pointer hover:underline"
              onClick={() => window.open(repo.html_url, "_blank")}
            >
              {repo.name}
            </h3>
            {repo.description && (
              <p className="text-[#c0c0c0] text-base leading-6">
                {repo.description}
              </p>
            )}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <p className=" h-3 w-3 rounded-full bg-[#E34C26]"></p>
              <span className="text-[#f3f1f5]">{repo.language || "N/A"}</span>
            </div>
            <div className="flex text-[#c0c0c0] hover:text-[#4493f8] cursor-pointer items-center text-base gap-2">
              <FaRegStar />
              <span className="">{repo.stargazers_count}</span>
            </div>
            <div className="flex text-[#c0c0c0] hover:text-[#4493f8] cursor-pointer text-base items-center gap-2">
              <FaCodeFork />
              <span className="">{repo.forks_count}</span>
            </div>
            <div className="flex items-center text-[#c0c0c0]  text-sm gap-2">
              <p className="leading-6">updated on</p>
              <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repositories;
