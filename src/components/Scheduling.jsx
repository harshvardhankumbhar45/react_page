import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ImCart } from "react-icons/im";
import { IoIosMore } from "react-icons/io";

const Scheduling = ({ schedule }) => {
  return (
    <ScheduleContainer className="card" style={{ width: "17rem", minHeight: "20rem" }}>
      <img
        src={schedule.img}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{schedule.title}</h5>
        <p className="card-text">{schedule.price}</p>
        <div className="card-more">
          <div>
            <NavLink to="/" className="schedule">
              <span>
                <ImCart />
              </span>
              <span>{schedule.linkText}</span>
            </NavLink>
          </div>
          <div>
            <NavLink to="/details" className="details">
              <span>
                <IoIosMore />
              </span>
              <span>Details</span>
            </NavLink>
          </div>
        </div>
      </div>
    </ScheduleContainer>
  );
};

export default Scheduling;

const ScheduleContainer = styled.div`
    img {
      height: 180px;
    }
    .card-title {
      font-family: Georgia, "Times New Roman", Times, serif;
      color: #333338;
      font-size: 22px;
      font-weight: 400;
    }
    .card-more {
      display: flex;
      justify-content: space-between;
      min-height: 40px;
      .schedule,
      .details {
        color: #333338;
        font-size: 12px;
        display: flex;
        gap: 4px;
        text-decoration: none;
      }

      .schedule {
        max-width: 100px;
        min-height: 10px;
        flex-wrap: nowrap;
      }
    }
`;
