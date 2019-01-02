/**
 *  Author: harry.lang
 *  Date: 2017/11/28
 *  Description: Created by harrylang on 2017/11/28.
 */
import React, { PureComponent } from 'react';

class Table extends PureComponent {
    render() {
        let list = [];
        this.props.list.forEach(function (item, index) {
            list.push(<tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
            </tr>);
        });

        return <table>
            <tbody>{list}</tbody>
        </table>;
    }
}

export default Table;