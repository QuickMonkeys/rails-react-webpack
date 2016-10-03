import React from 'react';

// Stateless component that will render all data.

export default ({data}) =>
    <div className="col-md-6">
        <div className="language" onClick={() => alert('Some action...')}>
            <div className="name">
                {data.name}
            </div>
            <div className="year">
                {data.year}
            </div>
            <hr />
            <div className="developer-company">
                {data.developer_company}
            </div>
        </div>
    </div>