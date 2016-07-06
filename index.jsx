import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { routerShape } from 'react-router/lib/PropTypes';

import Dropdown, { DropdownMenu, DropdownToggle } from '../Dropdown';
import NavLink from '../NavLink';


class Header extends Component {

  static propTypes = {
    fixed: PropTypes.bool,
    inverse: PropTypes.bool,
  };

  static defaultProps = {
    fixed: false,
    inverse: false,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      collapsed: true,
    };
  }

  render() {
    const { fixed, inverse } = this.props;
    const { collapsed } = this.state;
    const navbarClasses = ['navbar', `navbar-${ inverse ? 'inverse' : 'default' }`];
    if (fixed) navbarClasses.push('navbar-fixed-top');
    return (
      <header id='site-header' className={fixed ? 'fixed' : ''}>

        <div className={navbarClasses.join(' ')}>

          <div className='container'>

            <div id='site-nav' className='navbar-header'>

              <button
                type='button'
                className={`navbar-toggle${ collapsed ? ' collapsed' : '' }`}
                onClick={(e) => this.setState({collapsed: !collapsed})}
                aria-expanded={ collapsed ? 'false' : 'true' }>
                  <span className='sr-only'>Toggle navigation</span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
                  <span className='icon-bar'></span>
              </button>

              <div className='navbar-brand'>
                <Link to={'/'} className='logo'>Brand</Link>
              </div>

            </div>

            <div className={`collapse navbar-collapse${ collapsed ? '' : ' in' }`} id="navbar-collapse">

              <ul className='nav navbar-nav navbar-right'>

                <NavLink to='/'>Home</NavLink>

              </ul>

            </div>

          </div>

        </div>

      </header>
    );
  }
}

export default Header;
