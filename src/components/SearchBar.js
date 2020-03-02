import React, { Component } from 'react'
import { Paper, TextField } from '@material-ui/core'

class SearchBar extends Component {
    state = {
        SearchTerm: '',
    }
    handleChange = (e) => {
        this.setState({
            SearchTerm: e.target.value
        })
    }
    handleSubmit = (e) => {
        const { SearchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(SearchBar);

        //prevent full page refresh
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Paper elevation={6} style={{ padding: '25px' }}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField fullWidth label='Search...' onchange={this.handleChange} />
                    </form>
                </Paper>
            </div>
        )
    }
}

export default SearchBar
