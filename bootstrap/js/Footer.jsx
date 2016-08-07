var Footer = React.createClass({
    getDefaultProps: function () {
        return {
            website: 'My website',
            copy_year: 2016
        }
    },
    render: function () {
        return (
            <div className="container">
                <hr/>
                <footer>
                    <p>&copy; {this.props.copy_year} {this.props.website}</p>
                </footer>
            </div>
        )
    }
})