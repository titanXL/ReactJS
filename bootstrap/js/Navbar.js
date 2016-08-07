var Navbar = React.createClass({
  propTypes: {
    brand: React.PropTypes.string.isRequired
  },
  getDefaultProps: function () {
    return {
      brand: 'My website',
      color: 'light'
    }
  },
  render: function () {
    if (this.props.color == 'dark') {
      var navClass = 'navbar navbar-inverse'
    } else {
      var navClass = 'navbar navbar-default'
    }

    var homeActive = '';
    var aboutActive = '';

    if (this.props.page == 'home') {
      homeActive = 'active'
    } else if (this.props.page == 'about') {
      aboutActive = 'active'
    }
    return (
      <div>
        <nav className={navClass}>
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">{this.props.brand}</a>
            </div>


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className={homeActive} ><a onClick={this.props.homeClick} href="#">Home </a></li>
                <li className = {aboutActive}><a onClick={this.props.aboutClick} href="#">About</a></li>

              </ul>


            </div>
          </div>
        </nav>
      </div>
    )
  }
});