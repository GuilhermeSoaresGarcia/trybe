import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('testes de testes', () => {
  it('deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('deve testar a rota e renderizar o componente ao clicar no link correspondente ao "sobre"', () => {
    //renderização com a gambiarra do history
    const { history } = renderWithRouter(<App />);

    //captura do elemento a ser testado e verificação se ele está na tela
    const about = screen.getByRole('link', { name: 'Sobre' });
    expect(about).toBeInTheDocument();

    // interação (click no link "sobre")
    userEvent.click(about);

    // verificação do path após o click
    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    // verifica se a renderização está correta
    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Sobre',
    });
    expect(homeTitle).toBeInTheDocument();

  });
  it('deve testar uma rota inválida', () => {
    //renderização com a gambiarra do history
    const { history } = renderWithRouter(<App />);

    // diferente do conteúdo do course é necessário usar esse act. Documentação: https://reactjs.org/docs/test-utils.html#act
    act(() => {
      history.push('pagina-inexistente');
    })

    // testa se a url inválida é a que está no history.push
    const { pathname } = history.location;
    expect(pathname).toBe('/pagina-inexistente');

    const homeTitle = screen.getByRole('heading', {
      name: 'Página não encontrada',
    });
    expect(homeTitle).toBeInTheDocument();
  });
});
