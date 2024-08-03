import * as echarts from "echarts";
import { useEffect, useRef } from "react";
// 柱状图组件
const BarChart = ({ title }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: title,
      },
      xAxis: {
        type: "category",
        data: ["Vue", "React", "Angular"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [10, 40, 20],
          type: "bar",
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);
  return (
    <>
      {/* 必须要有宽高 */}
      <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>
    </>
  );
};

export default BarChart;
