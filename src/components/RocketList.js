import React from "react";
import {  useRocketsList } from "../hooks/useRocketsList";
import "./Rockets.css";
import { Link } from 'react-router-dom';

function RocketList() {
  // console.log(data);
  const { error, loading, data } = useRocketsList();
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error something.</p>;

  return (
    <div className="RocketList">
      {data.launchesPast.map((item) => {
        console.log(data);
        return (
      <Link to={`/${item.id}`}>
          <div className="firstcard">
            <img
              className="image"
              src={
                item.ships[0]?.image
                  ? item.ships[0]?.image
                  : "https://i.imgur.com/IpYJWUW.jpg"
              }
              alt=""
            />
            {/* <p>{item.id}</p> */}
            <p className="firstname">Mission: {item.mission_name}</p>
            <p className="firstname"> Racket: {item.rocket.rocket_name}</p>

            {/* <p>{item.ships[0]?.name}</p> */}
          </div></Link>
        );
      })}
    </div>
  );
}

export default RocketList;
