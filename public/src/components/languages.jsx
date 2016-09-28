import React from 'react';
import Course from './language.jsx';
import Search from './search.jsx';

export default class Languages extends React.Component {
    constructor() {
        super();
        this.state = {courses: [], search: ''}
    }
    
    componentDidMount() {
        $.getJSON( "languages", function( data ) {
            this.setState({courses: data, filtered: data});
        }.bind(this));
    }
    
    findByName(f, text) {
        return f.name.toUpperCase().indexOf(text) != -1;
    }
    
    handleChange(text) {
        this.setState({search: text.toUpperCase()});
    }
     
    render() {
        let {courses, search} = this.state;
        const filtered = courses.filter(f => this.findByName(f, search));
        const result = filtered.map( c => <Course key={c.id} data={c} />);
        return (
                <div>
                    <Search handleChange={this.handleChange.bind(this)} total={courses.length} filtered={filtered} />
                    <div className="row">
                        {result}
                    </div>
                </div>
        );
    }
}