import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValues=props.datapoints.map(datapoint=>datapoint.value);
   const totalMaximum=Math.max(...dataPointValues);



  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.lable}
          value={datapoint.value}
          maxValue={totalMaximum}
          lable={datapoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
