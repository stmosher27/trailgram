import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.logout().then(
      () => this.props.router.push('/login'));
  }

  render() {
    return(
      <div className='header'>
        <div className="header-details">
          <img className="logo" src="http://www.clker.com/cliparts/1/T/Y/s/X/a/black-and-white-camera-hi.png" alt="logo"/>
        </div>
        <div className="header-details">
          <label className="header-title">Trailgram</label>
        </div>
        <div className="header-details">
          <a id="logout" onClick={this.handleSubmit}><img className="logout-pic" src="http://imageog.flaticon.com/icons/png/512/32/32567.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="logout"/></a>
        </div>

      </div>
    );
  }
}

export default withRouter(Header);
