import React from "react";
import { useParams } from "react-router";
import { useRockets } from "../hooks/useRockets";
import "./Rockets.css";

export default function Rockets() {
  const { id } = useParams();
  const { data, loading, error } = useRockets(id);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error something.</p>;

  console.log({ loading, error, data });

  return (
    <div className="card">
      <div className="name">
        <p>{data.launch.mission_name}</p>
      </div>
      <div className="rocket_name">
        <p>Rocket: {data.launch.rocket.rocket_name}</p>
      </div>
      <div className="date">
        <p>Data: {data.launch.launch_date_local}</p>
      </div>
      <div className=" description">
        <p> Description: {data.launch.rocket.rocket.description}</p>
      </div>
      <div className="wikipedia">
        <p>Link: {data.launch.rocket.rocket.wikipedia}</p>
      </div>
      <div className="country">
        <p> Country:{data.launch.rocket.rocket.country}</p>
      </div>
    </div>
  );
}

// export default Rockets;
