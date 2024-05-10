describe('CRUD test', () => {
    it('Add course', () => {
      cy.visit('http://localhost:5173/');
      cy.get('button#create-btn').click();
      cy.get('input#name').type('Curso de Prueba')
      cy.get('input#professor').type('Akion Vargas')
      cy.get('input#course_code').type('PDS123')
      cy.get('input#classroom_number').type('321')
      cy.get('span.slider').click()
      cy.get('input#maximun_quota').type('2')
      cy.get('button.sendButton').click();
      cy.get('button.swal2-confirm').click();
     cy.wait(1000);
    });
    
    it('Search Course and delete akion', () => {
        cy.visit('http://localhost:5173/');
        cy.get('input.Search-input').type('Curso de Prueba')
        cy.get('button.search-icon').click();
        cy.wait(1000)
        cy.get('[title="delete"]').should('be.visible').eq(0).click()
        cy.get('button.swal2-confirm').click()
    })
  
  
  
  
  });