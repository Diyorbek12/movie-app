import React from "react"

export default class Header extends React.Component {
    render () {
    return (
        <div>
   <nav>
    <div className="nav-wrapper #00838f cyan darken-3">
      <a href="#" className="brand-logo">React</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Home</a></li>
        <li><a href="#">Components</a></li>
        <li><a href="#">JavaScript</a></li>
      </ul>
    </div>
  </nav>
        </div>
    )}
}