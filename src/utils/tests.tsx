import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { PreloadedState } from '@reduxjs/toolkit'
import { PropsWithChildren } from 'react'

import { AppStore, RootState, configuraStore } from '../store'

interface extendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store = configuraStore(preloadedState),
    ...opcoesAdicionais
  }: extendedRenderOptions = {}
) {
  function Encapsulador({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    store,
    ...render(elemento, {
      wrapper: Encapsulador,
      ...opcoesAdicionais
    })
  }
}
