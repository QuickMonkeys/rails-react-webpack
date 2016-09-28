import React from 'react';

export default class Language extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        let {data} = this.props;
        return (<div className="col-md-6">
                    <div className="language" onClick={() => alert('Some action...')}>
                        <div className="name">
                            {data.name}
                        </div>
                        <div className="year">
                            {data.year}
                        </div>
                        <hr />
                        {data.developer_company}
                    </div>
                </div>);
    }
}