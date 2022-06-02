import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Layout from './Layout'
import './index.css'
import { Inspector, InspectParams } from 'react-dev-inspector'
import { store } from '@store/store'

const InspectorWrapper = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <InspectorWrapper
        keys={['control', 'shift', 'command', 'c']}
        disableLaunchEditor={false}
        onHoverElement={(params: InspectParams) => {}}
        onClickElement={(params: InspectParams) => {}}
      >
        <Layout />
      </InspectorWrapper>
    </React.StrictMode>
  </Provider>
)
