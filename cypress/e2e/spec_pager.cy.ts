describe('Page Test', () => {
  it('Page Load', () => {
    cy.visit('http://localhost:5173/');
  });

  it('Prev and Next Page', () => {
    cy.visit('http://localhost:5173/');
    cy.get('button.Btn[title="prev"]').click();
    cy.get('button.Btn[title="next"]').should('be.visible').click();

  });


  it('Change Dark mode',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('span.slider-theme').click()
    cy.get('span.slider-theme').click()
  
  })
  it('View Course',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('[title="view"]').should('be.visible').eq(0).click();
    cy.get('button.cancelButton').click();
  })
  it('Change Limit',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('select.LimitSel').select('10');
    cy.get('select.LimitSel').should('have.value', '10');
  })
  

});

