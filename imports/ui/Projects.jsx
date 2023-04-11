import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import ReportsList from "./ReportsList";
import Reports from "./Reports";
import { ReactiveVar } from "meteor/reactive-var";

export default function Projects() {
  const [companyName, setCompanyName] = useState("");
  const [reportTitle, setReportTitle] = useState("");
  const [selectedReport, setSelectedReport] = useState(null);
  const reportsData = new ReactiveVar(null); // create reactive var

  const handleSelectReport = (report) => {
    setSelectedReport(report);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleReportTitleChange = (event) => {
    setReportTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Meteor.call("getPageFansData", (error, result) => {
      if (error) {
        console.log(error);
      } else {
        const values = result[0]?.values;
        console.log("values", values);
        const fbData = values.map((value) => [
          new Date(value.end_time).getTime(),
          value.value,
        ]);
        const reportData = {
          companyName: companyName,
          reportTitle: reportTitle,
          apiData: fbData,
        };
        Meteor.call("insertReportData", reportData, (error, result) => {
          if (error) {
            console.log(error);
          } else {
            // further instructions can go here
          }
        });
      }
    });
    console.log("getPageFansData");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="companyName"
          >
            Company Name:
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded-md"
            type="text"
            id="companyName"
            value={companyName}
            onChange={handleCompanyNameChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="reportTitle"
          >
            Report Title:
          </label>
          <input
            className="border border-gray-400 p-2 w-full rounded-md"
            type="text"
            id="reportTitle"
            value={reportTitle}
            onChange={handleReportTitleChange}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
      <ReportsList onSelectReport={handleSelectReport} />
      {selectedReport && <Reports selectedReport={selectedReport} />}
    </div>
  );
}
