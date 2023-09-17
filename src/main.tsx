import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app/App'
import './services/i18next.ts'
import { ButtonLoader } from './shared/components'

import './app/styles/index.css'
import './app/styles/mixins.css'
import './app/styles/zero.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<ButtonLoader className="loader red" />}>
    <App />
  </Suspense>
)
