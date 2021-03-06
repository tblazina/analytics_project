/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styles from './styles.css';
import {Nav, MenuItem, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node, 
    };

  render() {
    const logoSrc = require('../../images/felfel_typeface.png');

    return (
        <div className={styles.container}   >
            <Navbar className={styles.navBar} fluid >
                <Navbar.Header >
                    <Navbar.Brand pullRight>
                        <Link to='/'> <img src={logoSrc} width={65} />  </Link>
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav className={styles.nav} pullRight>
                    <LinkContainer to='maindash'>
                        <NavItem eventKey={1}> MainDash </NavItem>
                    </LinkContainer>
                    
                    {/* Operations drop down menu */}
                    <NavDropdown eventKey={3} title="Operations" id="basic-nav-dropdown">
                        <LinkContainer to='/'>
                            <MenuItem eventKey={3.1}> Dashboard </MenuItem>
                        </LinkContainer>
                            <MenuItem eventKey={3.2}> FELFEL Chart 1 </MenuItem>
                            <MenuItem eventKey={3.3}> FELFEL Chart 2 </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated Chart 1</MenuItem>
                    </NavDropdown>

                {/* Coorporate Partnerships drop down menu */}
                    <NavDropdown eventKey={3} title="Corporate Partnerships" id="basic-nav-dropdown">
                        <LinkContainer to={'/corporate'}>
                            <MenuItem eventKey={3.1}> Dashboard </MenuItem>
                        </LinkContainer>
                        <LinkContainer to={'/corporate/sites'}>
                            <MenuItem eventKey={3.2}> Sites </MenuItem>
                        </LinkContainer>
                        <LinkContainer to={'/corporate/siteprofit'}>
                            <MenuItem eventKey={3.3}> Site Profitability </MenuItem>
                        </LinkContainer>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}> Separated Chart 1 </MenuItem>
                    </NavDropdown>

                {/* Customer Excellence drop down menu */}
                    <NavDropdown eventKey={3} title="Customer Excellence" id="basic-nav-dropdown">
                        <LinkContainer to='/'>
                            <MenuItem eventKey={3.1}> Dashboard </MenuItem>
                        </LinkContainer>
                            <MenuItem eventKey={3.2}> FELFEL Chart 1 </MenuItem>
                            <MenuItem eventKey={3.3}> FELFEL Chart 2 </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}> Separated Chart 1 </MenuItem>
                    </NavDropdown>

                {/* Product Excellence drop down menu */}
                    <NavDropdown eventKey={3} title="Product Excellence" id="basic-nav-dropdown">
                        <LinkContainer to='/'>
                            <MenuItem eventKey={3.1}> Dashboard </MenuItem>
                        </LinkContainer>
                            <MenuItem eventKey={3.2}> FELFEL Chart 1 </MenuItem>
                            <MenuItem eventKey={3.3}> FELFEL Chart 2 </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}> Separated Chart 1 </MenuItem>
                    </NavDropdown>
                

                </Nav>
            </Navbar>
            {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}
