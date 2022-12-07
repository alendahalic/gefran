import './App.css';

import Table from './components/table/Table';
import TableChart from './components/chart/TableChart';

const tableData = [
  {
      'title' : 'Ricavi',
      'marker' : 'blu',
      'color' : '#005fb6',
      'data'  :   [
          {
              'Year': 2019,
              'Value': 140.535
          },
          {
              'Year': 2020,
              'Value': 110.645
          },
          {
              'Year': 2021,
              'Value': 160.232
          }
      ]
  },
  {
      'title' : 'EBITDA',
      'marker' : 'pin',
      'color' : '#F765A3',
      'data'  :   [
          {
              'Year': 2019,
              'Value': 90.535
          },
          {
              'Year': 2020,
              'Value': 130.645
          },
          {
              'Year': 2021,
              'Value': 160.232
          }
      ]
  },
  {
      'title' : 'EBIT',
      'marker' : 'pur',
      'color' : '#A155B9',
      'data'  :   [
          {
              'Year': 2019,
              'Value': 49.535
          },
          {
              'Year': 2020,
              'Value': 70.645
          },
          {
              'Year': 2021,
              'Value': 60.232
          }
      ]
  },
  {
      'title' : 'Risultato ante imposte',
      'marker' : 'gre',
      'color' : '#1DDD8D',
      'data'  :   [
          {
              'Year': 2019,
              'Value': 33.535
          },
          {
              'Year': 2020,
              'Value': 70.645
          },
          {
              'Year': 2021,
              'Value': 180.232
          }
      ]
  },
  {
      'title' : 'Risultato netto del Gruppo',
      'marker' : 'ora',
      'color' : '#FCA626',
      'data'  :   [
          {
              'Year': 2019,
              'Value': 140.535
          },
          {
              'Year': 2020,
              'Value': 182.645
          },
          {
              'Year': 2021,
              'Value': 160.232
          }
      ]
  }
]

function App() {
  return (
      <div className='App'>
        <Table tData={tableData} />
        <TableChart tData={tableData} />
      </div>
  );
}

export default App;
