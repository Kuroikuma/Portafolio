import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoutes } from './routes/index.routes'
import { Provider } from 'react-redux'
import store from './redux/store/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <IndexRoutes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
