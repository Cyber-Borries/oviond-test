import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Reports({ selectedReport }) {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    console.log("Reports.jsx mounted");
    console.log("selectedReport reports", selectedReport);
    if (selectedReport) {
      const data = selectedReport.apiData.map((item) => [
        new Date(item.date).getTime(),
        item.likes,
      ]);

      setChartOptions({
        title: {
          text: selectedReport.reportTitle,
        },
        xAxis: {
          type: "datetime",
          title: {
            text: "Date",
          },
        },
        yAxis: {
          title: {
            text: "Likes",
          },
        },
        series: [
          {
            name: selectedReport.clientName,
            data: selectedReport.apiData,
          },
        ],
      });
    }
  }, [selectedReport]);

  return (
    <div>
      {selectedReport && (
        <div className="mt-4">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
      )}
    </div>
  );
}
