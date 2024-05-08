describe('Page Test', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
  });

  it('should exist and be clickable', () => {
    cy.visit('http://localhost:5173/');
    cy.get('button.Btn[title="prev"]').click();
    cy.get('button.Btn[title="next"]').should('be.visible').click();

  });

  it('Test Delete an course',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('[title="delete"]').should('be.visible').eq(0).click()
    //cy.get('button.swal2-confirm').click() //Confirmacion del delet
  
  })
  it('Test Change Dark mode',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('span.slider-theme').click()
    cy.get('span.slider-theme').click()
  
  })
  it('Test View Course',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('[title="view"]').should('be.visible').eq(0).click();
    cy.get('button.cancelButton').click();
  })
  it('Test change Limit',()=>{
    cy.visit('http://localhost:5173/');
    cy.get('select.LimitSel').select('10');
    cy.get('select.LimitSel').should('have.value', '10');
  })
  
});

