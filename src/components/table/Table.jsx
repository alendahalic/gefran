import TableMarker from '../TableMarker/TableMarker';
import './Table.css';

function Table({tData}) {

    const handleClick = event => {
        /* for (var item of document.querySelectorAll('.tableData__row.active')) {
            item.classList.remove('active');
        } */
        event.currentTarget.classList.toggle('active');
    };

    
    return (
        <table id='tableData'>
            <tbody>
                {tData.map( (x) => {
                    return (
                    <tr key={x.marker} data-index={tData.indexOf(x)} className={'tableData__row box active'} onClick={handleClick}>
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
  