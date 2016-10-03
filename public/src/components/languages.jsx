import React from 'react';
import Language from './language.jsx';
import Search from './search.jsx';

export default class Languages extends React.Component {
    constructor() {
        super();
        // The initial setup of state.
        this.state = {languages: [], search: ''}
    }
    
    // Once the component is mounted, an ajax call is executed to get all data
    componentDidMount() {
        $.getJSON( "languages", function( data ) {
            this.setState({languages: data, filtered: data});
        }.bind(this));
    }
    
    findText(f, text) {
        return f.name.toUpperCase().indexOf(text) != -1 || 
               f.developer_company.toUpperCase().indexOf(text) != -1 ||
               f.year.toString().indexOf(text) != -1;
    }
    
    // Function that will be used by search component to give access to the parent state
    handleChange(text) {
        this.setState({search: text.toUpperCase()});
    }
    
    // This function is used to prepare the content that will be rendered by the component
    setupRender() {
        let {languages, search} = this.state;
        const filtered = languages.filter(f => this.findText(f, search)).map( c => <Language key={c.id} data={c} />);
        
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