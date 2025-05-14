import { fireEvent, screen } from '@testing-library/react'

import { renderizaComProvider } from '../../../utils/tests'
import Produto from '..'

const jogo = {
    id: 2,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows', 'PS5', 'XBOX Series S/X'],
    preco: 199.9,
    precoAntigo: 299.9,
    titulo: 'Hogwarts Legacy'
  }

describe('Testes para o componente produto', () => {
  test('Deve rendenizar corretamente', () => {
    
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwads Legacy')).toBeInTheDocument()
  })
//esse \/ é uma cópia desse /\
  test('Deve Adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(botao) //pode fazer criando uma const, ou simplesmente colocando toda a linha

    expect(store.getState().carrinho.itens).toHaveLength(1) //lê se tem 1 produto no carrinho, caso não, aponta erro
  })
})
