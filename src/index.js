import React from 'react'
import {render} from 'react-dom'

import App from './views/App'

render(
  <App />,
  document.querySelector('#app')
)

module.hot.accept();