describe('Pruebas E2E para GitHub', () => {
  
  beforeEach(() => {
    cy.visit('https://github.com/');
    cy.wait(7000)
  });

  it('Carga inicial', () => {
    cy.title().should('eq', 'GitHub: Let’s build from here · GitHub');
  });

  it('Búsqueda de repositorios', () => {
    cy.get('qbsearch-input.search-input').click({ force: true });
  });

  it('Verificar Funcionalidad de Búsqueda', () => {
    cy.get('input[name="q"]').should('be.visible');
  });
  

  it('Navegación a detalles de repositorio', () => {
    cy.get('.repo-item', { timeout: 10000 }).should('be.visible');
  });

  it('Login Negativo en GitHub', () => {
    cy.visit('https://github.com/login');
    
    cy.get('#login_field').type('usuario_invalido'); 
    cy.get('#password').type('contraseña_invalida'); 
    
    cy.get('input[name="commit"]').click();
    cy.get('.flash-error')
      .should('be.visible')
      .and('contain', 'Incorrect username or password.');
    
    cy.url().should('include', '/login');
  });
  
});
