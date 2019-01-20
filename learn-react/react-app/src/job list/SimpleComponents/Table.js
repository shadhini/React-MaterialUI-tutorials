import React, {Component} from 'react';


// table header
const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

// body -- data hard coded
// const TableBody = () => {
//     return(
//         <tbody>
//             <tr>
//                 <td>Charlie</td>
//                 <td>Janitor</td>
//             </tr>
//             <tr>
//                 <td>Mac</td>
//                 <td>Bouncer</td>
//             </tr>
//             <tr>
//                 <td>Dee</td>
//                 <td>Aspiring actress</td>
//             </tr>
//             <tr>
//                 <td>Dennis</td>
//                 <td>Bartender</td>
//             </tr>
//         </tbody>
//     );
// }

// body --> move all data to an array of objects, as if we were bringing in a JSON-based API. 
// We’ll have to create this array inside our render(). [in App.js]
const TableBody = props => {
    const rows = props.characterData.map((row, index)=> {
        return(
            //  I’ve added a key index to each table row. You should always use keys when making lists in React, as they help identify each list item.
            // The onClick function must pass through a function that returns the removeCharacter() method, otherwise it will try to run automatically
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
   });
    return <tbody>{rows}</tbody>;
}

class Table extends Component{
    render(){

        const { characterData, removeCharacter } = this.props;

        return(
            <table>
                <TableHeader />
                <TableBody 
                characterData={characterData}
                removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;