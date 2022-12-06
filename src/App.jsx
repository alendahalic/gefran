import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Table from './components/table/Table';

const data = [
  {
    name: '2021',
    pv: 160.232
  },
  {
    name: '2020',
    pv: 129.645
  },
  {
    name: '2019',
    pv: 140.535
  },
  {
    name: '2018',
    pv: 120
  },  
  {
    name: '2017',
    pv: 50
  },
];


function App() {
  return (
      <div className='App'>
        <Table />
        <ResponsiveContainer width='100%' height={360}>
          <LineChart
            data={data}
            margin={{
              top: 25,
              right: 30,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" padding={{ left: 60, right: 60 }} />
            <YAxis padding={{ top: 50, bottom: 50 }} />
            <Tooltip itemStyle={{'color':'white'}} labelStyle={{'display': 'none'}} wrapperStyle={{'border': '0', 'outline': '0'}} contentStyle={{'background': '#1D1D1D', 'padding': '.35rem .75rem', 'border': '0', 'borderRadius': '2rem', 'outline': '0'}} />
            <Line type="linear" dataKey="pv" stroke="#005FB6" strokeWidth={2} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
}

export default App;
