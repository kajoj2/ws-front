// @ts-nocheck
import React from "react";
import axios from "axios";
import styled from "styled-components";
import 'chartjs-adapter-moment';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  TimeSeriesScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  TimeSeriesScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
)

export const Container = styled.div`
  display: flex;
`;

class Chart extends React.Component<{}, { data: object, options:object }> {
  constructor(props: {} ) {
    super(props);
    this.state = { data: {
      datasets: [
        {
          data: [],
        },
      ],
    }, options: this.options };
  }

  options = {
    responsive: true,
    parsing: {
      xAxisKey: "time",
      yAxisKey: "data",
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    scales: {
      x: {
          type: 'time',
      }
  }
  };

  componentDidMount() {
    axios.get(`http://s0.kajoj.com:8080/Data`).then((res) => {
      const data = res.data;
      console.log(data);
      this.setState({
        data: {
          datasets: [
            {
              backgroundColor: "#ffb703"	,
              borderColor: "#fb8500",
              data: data,
            },
          ],
        },
        options : this.options
      });
    });
  }
  render() {
    return <Container>test
      <Line options={this.state.options} data={this.state.data} />
    </Container>;
  }
}

export default Chart;
