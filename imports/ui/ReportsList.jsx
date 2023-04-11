import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ReportsCollection } from "../api/ReportsCollection";
export default function ReportsList({ onSelectReport }) {
  const [myReportsData, setMyReportsData] = useState();
  // const reports = useTracker(() => ReportsCollection.find().fetch());

  const handleDeleteReport = (e) => {
    let id = e.target.dataset.report;
    console.log(id);
    Meteor.call("removeReportData", id, (error, result) => {
      console.log("in Meteor.call newCLient", id);
      if (error) {
        console.log(error);
      } else {
        console.log("Client removed successfully!");
      }
    });
  };

  const handleReportsFind = () => {
    Meteor.call("fetchReportData", (error, result) => {
      if (error) {
        console.log(error);
      } else {
        setMyReportsData(result);
      }
    });
  };

  useEffect(() => {
    handleReportsFind();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Reports List</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="text-left py-3 px-4">Report Name</th>
            <th className="text-left py-3 px-4">Company Name</th>
          </tr>
        </thead>
        <tbody>
          {myReportsData &&
            myReportsData.map((report) => (
              <tr
                key={report._id}
                className="border-b hover:bg-gray-100 cursor-pointer"
                onClick={() => onSelectReport(report)}
              >
                <td className="py-3 px-4">{report.reportTitle}</td>
                <td className="py-3 px-4">{report.companyName}</td>
                <td className="py-3 px-4">
                  <span onClick={handleDeleteReport} data-report={report._id}>
                    Delete
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
