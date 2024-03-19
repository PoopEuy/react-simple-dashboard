import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const EChartsExample = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize ECharts instance
    const chart = echarts.init(chartRef.current);

    // Specify chart configuration
    // const options = {
    //   title: {
    //     text: "Example Chart",
    //   },
    //   xAxis: {
    //     type: "category",
    //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    //   },
    //   yAxis: {
    //     type: "value",
    //   },
    //   series: [
    //     {
    //       data: [120, 200, 150, 80, 70, 110, 130],
    //       type: "line",
    //     },
    //   ],
    // };

    const options = {
      title: {
        text: "Stacked Line",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "Search Engine",
          type: "line",
          stack: "Total",
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };

    // Set options
    chart.setOption(options);

    // Clean up
    return () => {
      chart.dispose();
    };
  }, []); // Empty dependency array means this effect runs once after the first render

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default EChartsExample;