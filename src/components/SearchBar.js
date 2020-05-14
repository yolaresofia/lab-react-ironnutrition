
    import React, { Component } from 'react'
    
    export default class SearchBar extends Component {
        render() {
            return (
                <div>
                    <input className="input" type="text" value={this.props.inputValue}
                    onChange={this.props.filterOnChange} placeholder="search for food.."/>
                </div>
            )
        }
    }