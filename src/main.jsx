import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@appwrite.io/pink'

import {Client,Account} from "appwrite"
import { AppwriteAuthUIProvider } from 'react-appwrite-auth-ui'
const endpoint = "http://localhost:4321/v1"
const projectId = "63ff40968cfee425c0ac"

const client  = new Client().setProject(projectId).setEndpoint(endpoint)
const account = new Account(client)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppwriteAuthUIProvider client={client} account={account}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
</AppwriteAuthUIProvider>
)
