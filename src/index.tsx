// import _ from 'lodash';
// import './style.css';
// import Icon from './icon.jpg'

// function component() {
//     const element = document.createElement('div');
  
//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     element.classList.add('hello');

//     // Add the image to the existing div
//     const myIcon = new Image();
//     myIcon.src = Icon;

//     element.append(myIcon);
  
//     return element;
//   }
  
//   document.body.appendChild(component());

// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//     <h1>Hello World</h1>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
    return (
        <h1>
            Hello World.
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));