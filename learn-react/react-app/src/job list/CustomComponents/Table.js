import React, {Component} from 'react';

// Custom Componment
//--------------------------------
// data is hard coded into this
// This component we created is a custom class component. 
// We capitalize custom components to differentiate them from regular HTML elements.
// A class component must include render(), and the return can only return one parent element.

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>Bouncer</td>
                    </tr>
                    <tr>
                        <td>Dee</td>
                        <td>Aspiring actress</td>
                    </tr>
                    <tr>
                        <td>Dennis</td>
                        <td>Bartender</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;