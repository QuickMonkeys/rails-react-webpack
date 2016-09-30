import React from 'react';
import Language from './language.jsx';
import Search from './search.jsx';

export default class Languages extends React.Component {
    constructor() {
        super();
        this.state = {languages: [], search: ''}
    }
    
    componentDidMount() {
        $.getJSON( "languages", function( data ) {
            this.setState({languages: data, filtered: data});
        }.bind(this));
    }
    
    findByName(f, text) {
        return f.name.toUpperCase().indexOf(text) != -1 || 
               f.developer_company.toUpperCase().indexOf(text) != -1 ||
               f.year.toString().indexOf(text) != -1;
    }
    
    handleChange(text) {
        this.setState({search: text.toUpperCase()});
    }
    
    setupRender() {
        let {languages, search} = this.state;
        const filtered = languages.filter(f => this.findByName(f, search)).map( c => <Language key={c.id} data={c} />);
        
        return {
            result: filtered,
            searchProps: {
                handleChange: this.handleChange.bind(this),
                total: languages.length,
                filtered: filtered.length
            }
        }
    }
     
    render() {

        let r = this.setupRender();
        
        return (
                <div>
                    <Search  {...r.searchProps}/>
                    <div className="row">
                        {r.result}
                    </div>
                </div>
        );
    }
}