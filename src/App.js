import React, { useState } from 'react';
import './App.css';

function Tabs() {
  function MyComponent() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonTitle) => {
      // Toggle the active button state
      setActiveButton((prevActiveButton) => (prevActiveButton === buttonTitle ? null : buttonTitle));
    };

    const buttons = [
      {
        title: 'Button 1',
        name: 'HTML',
        content: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.'
      },
      {
        title: 'Button 2',
        name: 'CSS',
        content: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
      },
      {
        title: 'Button 3',
        name: 'Javascript',
        content: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
      }
    ];

    return (
      <div className='tabs-container'>
        {/* Render buttons */}
        {buttons.map((button, index) => (
          <div className='button-container' key={index}>
            <button onClick={() => handleButtonClick(button.title)}>
              {button.name}
            </button>
          </div>
        ))}

        {/* Render active button's content */}
        {activeButton && (
          <div className='text-container'>
            {/* Find the button with matching title and display its content */}
            <p>{buttons.find((button) => button.title === activeButton).content}</p>
          </div>
        )}
      </div>
    );
  }

  return <MyComponent />;
}

export default Tabs;