
//docker run  --network="host" -it -v "$($PWD.Path):/e2e" -w /e2e cypress/included:9.2.0

describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
        // abre o site
        cy.visit('http://localhost:5000/')
    })
    it('Teste 2: Verifica item na página', () => {
        // Verifica se existe o livro desejado
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })    
    it('Teste 3: Calcula Frete', () => {    
        // Calcula o frete
        cy.get('[data-id=3]').within(() => {
           cy.get('input').type('10000-000')
           cy.contains('Calcular Frete').click().then
           cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')

        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })
    it('Teste 4: Compra Livro', () => {
        // clica no botão comprar
        cy.contains('Comprar').click().then

        // espera o pop up
        cy.wait(2000)

        // Confere se apareer o popup com o texto
        cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')
    
        // Fecha o pop-up 
        cy.get('.swal-button').click()
    
    })
  })