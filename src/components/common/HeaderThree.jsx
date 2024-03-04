const HeaderThree = () => {
    return (
        <header className="header">
        {/*begin nav */}
        <nav className="navbar navbar-default navbar-fixed-top">
          {/*begin container */}
          <div className="container">
            {/*begin navbar */}
            <div className="navbar-header">
              <button data-target="#navbar-collapse-02" data-toggle="collapse" className="navbar-toggle" type="button">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="index.html" className="navbar-brand brand scrool"><span className="blue">Bé</span>Smart</a>
            </div>
            <div id="navbar-collapse-02" className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">			      
                <li><a href="#home_wrapper">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#register">Register</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact" className="purchase scrool">Contact Us</a></li>
              </ul>
            </div>
            {/*end navbar */}
          </div>
          {/*end container */}
        </nav>
        {/*end nav */}
      </header>
    );
};

export default HeaderThree;