import Link from "../components/Link/Link";
import List from "../components/List/List";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

 const ProfileWrapper = styled.div`
 width: 50%;
 margin: 10px auto;
 `;
 const Avatar = styled.img`
 width: 150px;
 `;

const Profile = () => {
  const [data, setData] = useState();

  const getData = () => {
    fetch("https://api.github.com/users/sabadevs20")
      .then((response) => response.json())
      .then((datajson) => {
        setData(datajson);
      });
  };

  useEffect(getData, []);
  const destructData = { ...data };
  const items = [
    {
      label: "html_url",
      value: <Link url={destructData.html_url} title="Github URL" />,
    },

    { label: "repos_url", value: destructData.repos_url },

    { label: "name", value: destructData.name },

    { label: "company", value: destructData.company },

    { label: "location", value: destructData.location },

    { label: "email", value: destructData.email },

    { label: "bio", value: destructData.bio },
  ];

  


  return (
    <ProfileWrapper className="Profile-container">
      <Avatar
        className="Profile-avatar"
        src={destructData.avatar_url}
        alt="avatar"
      />

      <List items={items} />
      {console.log({ ...data })}
    </ProfileWrapper>
  );
};
export default Profile;
