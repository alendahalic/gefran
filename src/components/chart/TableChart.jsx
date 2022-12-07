import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Tooltip,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Legend,
    Tooltip,
);

function TableChart({tData}) {
  
  const htmlLegendPlugin = {
    id: 'htmlLegend',
    afterUpdate(chart) {

      const items = document.querySelectorAll('.tableData__row');
      items.forEach( (item) => {
        item.onclick = () => {
          let x = item.classList.contains('active');
          let y = item.getAttribute('data-index');
          chart.setDatasetVisibility(y, !x);
          chart.update();
        };
      });
    }
  };

    const options = {
        responsive: true,
        plugins: {
            htmlLegend: {
              containerID: 'tableData',
            },
            legend: {
              display: false,
            }
        },
    };
      
    const labels = ['2019', '2020', '2021'];
    const data = {
        labels,
        datasets: [],
    };

    tData.forEach(x => {
        let arr = [];
        x.data.forEach( y => {
            arr.push(y['Value']);      
        })
        data.datasets.push({
            label: x.title,
            data: arr,
            borderColor: x.color,
            backgroundColor: x.color,
        });
    });

    return (
        <div id='TableChart'>
          <Line options={options} data={data} plugins={[htmlLegendPlugin]}  />
        </div>
    );
}
  
export default TableChart;