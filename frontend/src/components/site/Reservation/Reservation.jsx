import React from "react";
import { Formik } from "formik";
import "./Reservation.css";

const Reservation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 reservation pt-5 px-5">
          <div>
            <form action="" className="reserv d-flex justify-content-between pb-5">
                <input className="form-control" type="text" name="name" placeholder="name" />
                <input className="form-control" type="text" name="phone" placeholder="phone number" />
                <input className="form-control" type="date" name="date" placeholder="M/D/YYYY"/>
                <input className="form-control" type="time" name="time" placeholder="time" />
                <select className="form-control" name="person" id="person" >
                    <option value="person">person</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                </select>
                <button className="btn btn-primary search-btn">Book Table</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
