// @flow
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';

class SiteMenu extends Component<{}, {expanded: boolean}> {
  state = {
    expanded: false,
  };

  isExpanded = () => this.state.expanded === true;

  toggleExpanded = () => this.setState({expanded: !this.isExpanded()});

  render() {
    return (
      <nav
        className={classnames('top-bar', {expanded: this.isExpanded()})}
        data-topbar
        rol="navigation">
        <ul className="title-area">
          <li className="name">
            <h1>
              <Link to="/">Food</Link>
            </h1>
          </li>
          <li className="toggle-topbar menu-icon">
            <button onClick={this.toggleExpanded}>
              <span>Menu</span>
            </button>
          </li>
        </ul>
        <section className="top-bar-section">
          <ul className="left">
            <li className="divider" />
            <li>
              <Link to="/">Recipe Index</Link>
            </li>
            <li>
              <Link to="/ingredients/">Recipes by Ingredient</Link>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

export default SiteMenu;
