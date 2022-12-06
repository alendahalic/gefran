import TableMarker from '../TableMarker/TableMarker';
import './Table.css';

function Table() {

    const handleClick = event => {
        for (var item of document.querySelectorAll('.tableData__row.active')) {
            item.classList.remove('active');
        }
        event.currentTarget.classList.toggle('active');
    };

    const tableData = [
        {
            'title' : 'Ricavi',
            'marker' : 'blu',
            'data'  :   [
                {
                    'Year': 2019,
                    'Value': 140.535
                },
                {
                    'Year': 2020,
                    'Value': 129.645
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
            'data'  :   [
                {
                    'Year': 2019,
                    'Value': 140.535
                },
                {
                    'Year': 2020,
                    'Value': 129.645
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
            'data'  :   [
                {
                    'Year': 2019,
                    'Value': 140.535
                },
                {
                    'Year': 2020,
                    'Value': 129.645
                },
                {
                    'Year': 2021,
                    'Value': 160.232
                }
            ]
        },
        {
            'title' : 'Risultato ante imposte',
            'marker' : 'gre',
            'data'  :   [
                {
                    'Year': 2019,
                    'Value': 140.535
                },
                {
                    'Year': 2020,
                    'Value': 129.645
                },
                {
                    'Year': 2021,
                    'Value': 160.232
                }
            ]
        },
        {
            'title' : 'Risultato netto del Gruppo',
            'marker' : 'ora',
            'data'  :   [
                {
                    'Year': 2019,
                    'Value': 140.535
                },
                {
                    'Year': 2020,
                    'Value': 129.645
                },
                {
                    'Year': 2021,
                    'Value': 160.232
                }
            ]
        }
    ]
    return (
        <table id='tableData'>
            <tbody>
                {tableData.map( (x) => {
                    return (
                    <tr key={x.marker} className='tableData__row' onClick={handleClick}>
                        <td><TableMarker type={x.marker} /></td>
                        <td className='tableData__row__title'>
                            <p>{x.title}</p>
                            <div className='tableData__row__content'>
                            {x.data.map( (y) => {
                                return (
                                    <div key={y.Year}>
                                        <div className='tableData__row__content__year'>{y.Year}</div>
                                        <div className='tableData__row__content__value'>{y.Value}</div>
                                    </div>
                                )
                            })}
                            </div>
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
  }
  
export default Table;
  