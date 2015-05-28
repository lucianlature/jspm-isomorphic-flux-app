import React from 'react'

// Import non-js files like this, with the extension and an exclamation point:
import App from './App.jsx!'

(() => {
  React.render(
    <App name="Lucian" />,
    document.getElementById('react-app')
  )
})();
