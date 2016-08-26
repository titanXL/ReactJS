var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('./SearchForm.js');
var SearchResults = require('./SearchResults.js');

function getAppState() {
    return {
        results : AppStore.getResults(),
        searchText : AppStore.getSearchText()
    }
}

var App = React.createClass({
    getInitialState: function () {
        return getAppState();
    },
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange)
    },
    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange)
    },
    render: function () {
        return (
            <div>
                <SearchForm />
                <SearchResults results={this.state.results} searchText={this.state.searchText}/>
            </div>
        )
    },
    _onChange: function () {
        this.setState(getAppState())
    }
});

module.exports = App;