import React, { PropTypes } from 'react';

const MyTable = ({title, items, error})=>(
    <table className="table-container">
        <caption className="table-caption">{title}</caption>
        <thead className="table-head">
        <tr>
            <th>Dependency</th>
            <th>Version</th>
        </tr>
        </thead>
        <tbody className="table-body">
        {items.length ? items.map((item, idx)=> (
            <tr key={`dependency-${idx}`}>
                <td>{item.dependency}</td>
                <td>{item.version}</td>
            </tr>
        )) :
            <tr>
                <td colSpan="2">{error.message}</td>
            </tr>}
        </tbody>
    </table>
);

MyTable.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired
};

export default MyTable;