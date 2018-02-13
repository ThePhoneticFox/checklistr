import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
        <div class="navbar navbar-expand-lg navbar-dark bg-primary">
          <Link to='/'><a class="navbar-brand" href="#">Checklistr</a></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
              <Link to='/'><a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a></Link>
              </li>
              <li class="nav-item">
              <Link to='/lists'><a class="nav-link" href="#">Lists</a></Link>
              </li>
              <li class="nav-item">
                <Link to='/settings'><a class="nav-link" href="#">Settings</a></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" placeholder="Search" type="text" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Navbar;
