"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const { username } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (username) {
      const fetchProfile = async () => {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setProfileData(data);
      };

      fetchProfile();
    }
  }, [username]);

  if (!profileData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="max-w-[296px]">
        <div>
          <Image
            width={296}
            height={296}
            src={profileData.avatar_url}
            alt={profileData.login}
            className="rounded-full border mx-auto"
          />
        </div>
        <div className="py-4">
          <h2 className="text-2xl font-semibold leading-8 text-[#f3f1f5]">
            {profileData.login}
          </h2>
          {profileData.name && (
            <p className="text-xl font-normal leading-6 text-[#c0c0c0]">
              {profileData.name}
            </p>
          )}
        </div>
        {profileData.bio && (
          <h2 className="text-2xl mb-4 font-semibold leading-8 text-[#f3f1f5]">
            {profileData.bio}
          </h2>
        )}

        <div className="flex my-4 text-sm leading-5 items-center gap-1">
          <div className="flex items-center gap-1 group cursor-pointer">
            <svg
              text="muted"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              fill="#f3f1f5"
            >
              <path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path>
            </svg>
            <span className="text-[#f3f1f5] group-hover:text-[#4493f8]">
              {profileData.followers}
            </span>
            <span className="text-[#c0c0c0] group-hover:text-[#4493f8]">
              Followers
            </span>{" "}
          </div>
          <span className="text-[#f3f1f5]"> · </span>
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="text-[#f3f1f5] group-hover:text-[#4493f8]">
              {profileData.following}{" "}
            </span>
            <span className="text-[#c0c0c0] group-hover:text-[#4493f8]">
              Following
            </span>
          </div>
        </div>

        <ul className="space-y-1">
          <li className="flex items-center gap-2">
            <p className="text-base text-[#f3f1f5]">Member Since:</p>{" "}
            <span className="text-[#c0c0c0]">
              {new Date(profileData.created_at).toLocaleDateString()}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <p className="text-base text-[#f3f1f5]">Last Updated:</p>{" "}
            <span className="text-[#c0c0c0]">
              {new Date(profileData.updated_at).toLocaleDateString()}
            </span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              fill="#f3f1f5"
              aria-hidden="true"
            >
              <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path>
            </svg>
            <span className="text-[#c0c0c0]">
              {profileData.location && <p>{profileData.location}</p>}
            </span>
          </li>
          {profileData.email && (
            <li className="flex items-center gap-2">
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
                fill="#f3f1f5"
              >
                <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path>
              </svg>
              <p className="text-[#c0c0c0]">{profileData.email}</p>
            </li>
          )}
          {profileData.blog && (
            <li className="flex cursor-pointer items-center gap-2">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                fill="#f3f1f5"
              >
                <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
              </svg>
              <p className="text-[#c0c0c0] hover:underline hover:text-[#4493f8]">
                {profileData.blog}
              </p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
