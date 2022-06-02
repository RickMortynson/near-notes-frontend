import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Layout from './Layout'
import './index.css'
import { Inspector } from 'react-dev-inspector'
import { store } from '@store/store'

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <InspectorWrapper keys={['control', 'shift', 'command', 'c']} disableLaunchEditor={false}>
        <Layout />
      </InspectorWrapper>
    </React.StrictMode>
  </Provider>
)
