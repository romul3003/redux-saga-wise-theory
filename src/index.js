import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'

import store from './redux'
import { history } from './redux/reducers'
import App from './pages/App'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>
)
