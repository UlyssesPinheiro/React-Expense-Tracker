import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointsArray = props.dataPoints.map((e) => e.value);
  const maximumValue = Math.max(...dataPointsArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
}
export default Chart;
