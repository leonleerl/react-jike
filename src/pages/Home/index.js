import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import BarChart from "./components/BarChart";

const Home = () => {
  return (
    <>
      <BarChart title={"三大框架满意度"} />
      <BarChart title={"三大框架使用度"} />
    </>
  );
};

export default Home;
