import React from 'react';

const Search = (props) =>
        <div style={{marginTop: '14px'}}>
            <input 
                type="text" 
                placeholder="Search for a programming language..."
                onChange={(e) => props.handleChange(e.target.value)}
                className="form-control"
            />
            <div>
                <span>
                    {
                        props.total == 0 
                            ? 'Loading...' 
                            : `Total: ${props.filtered.length} of ${props.total}`
                        
                    }
                </span>
            </div>
            <hr />
        </div>
        
export default Search;