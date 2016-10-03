import React from 'react';

// The search component is created as a stateless component.
// In this example we only need to update the parent state
export default (props) =>
        <div style={{marginTop: '14px'}}>
            <input 
                type="text" 
                placeholder="Search for a programming language (from the 90's until today)..."
                onChange={(e) => props.handleChange(e.target.value)}
                className="form-control"
            />
            <div>
                <span>
                    {
                        props.total == 0 
                            ? 'Loading...' 
                            : `Total: ${props.filtered} of ${props.total}`
                    }
                </span>
            </div>
            <hr />
        </div>
        
