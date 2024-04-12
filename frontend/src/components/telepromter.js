import React from "react";
import PropTypes from 'prop-types';

export default function Teleprompter(props) {
  // Use props.TitleNews if provided, otherwise use a default title
  const title = props.TitleNews || "Default Title";
  const news1 = props.comingNews || "Default coming news";

  return (
    <>
      <div className="ps-0">
        <div className="row justify-content-center align-items-center">
          <div
            className="col-md-7 text-center text-white text-break"
            style={{
              height: "100vh",
              backgroundColor: "#1E1B18",
              borderRadius: "24px",
            }}
          >
            Column
          </div>

          <div
            className="col-md-3 col-7 mt-2 top-0 ms-2 text-left text-lg font-bold text-red-700 text-break"
            style={{
              paddingLeft: "2%",
              padding: "2%",
              backgroundColor: "#1E1B18",
              borderRadius: "24px",
            }}
          >
            {title}
            <div
              className="custom-scrollbar text-left text-white text-break overflow-scroll mt-3"
              style={{ height: "50vh", paddingLeft: "1em" }}
            >
              <ul className="list-group list-group">
              <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
                <li className="list-group list-group-flush">
                  {news1}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Define PropTypes
Teleprompter.propTypes = {
  TitleNews: PropTypes.string, // Define the prop type for TitleNews
  news1: PropTypes.string
};
