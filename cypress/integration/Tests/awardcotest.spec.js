/// <reference types="cypress" />

describe('Awardco', () => {
    
    it('Move to Different pages', () => {
        cy.visit('www.award.co');

        cy.wait(500);
        //Hovers the platform tab so it can show the links
        cy.get('#w-dropdown-toggle-0')
        .trigger('mouseover');

        cy.wait(500);
        
        //Selects the text Below the manage button and clicks, 
        cy.get('.text-block-9')
        .contains('Simple, powerful, transparent program administration.')
        .click();

        //Assert the Url is now the manage page
        cy.url().should('eq', 'https://www.award.co/manage')

        cy.wait(1000);

        //Hover the Resources Page
        cy.get('#w-dropdown-toggle-1')
        .trigger('mouseover');

        cy.wait(500);

        cy.get('.menu-title')
        .contains('Why Awardco')
        .click();

        cy.url().should('eq', 'https://www.award.co/why-awardco');

        cy.wait(1000);

        cy.get('#w-dropdown-toggle-2')
        .trigger('mouseover');
        cy.wait(500);
        //Spelling error in the text that contains the div is the cause for me to have to put in "ABout"
        cy.get('.menu-title')
        .contains('ABout')
        .click();

        cy.url().should('eq', 'https://www.award.co/about');

        cy.scrollTo('bottom', {duration: 2000});

        cy.wait(500);

        cy.get('.footer-link')
        .contains('Celebrate')
        .click()

        cy.url().should('eq', 'https://www.award.co/celebrate');
    })



 it('Get a Demo via Footer and Fill out Form (but dont send it)', () => {
        cy.visit('www.award.co');

        //Scroll to the bottom and select the get a demo footer link
        cy.scrollTo('bottom', {duration: 1500});
        cy.wait(500);

        //Go to Demo Page
        cy.get('.footer-link')
        .contains("Get a Demo")
        .click();

        cy.wait(500);
        
        cy.url().should('eq', 'https://www.award.co/demo')

        //Fill in first and last name
        cy.get('[data-reactid=".hbspt-forms-0.1:$0.1:$firstname.$firstname.0"]')
        .click({force: true})
        .type('Bojark')
        .should('have.value', 'Bojark')
        .type('{del}{selectall}{backspace}')
        .type('Bojack', { delay: 100 });

        cy.wait(300);

        cy.get('[data-reactid=".hbspt-forms-0.1:$0.1:$lastname.$lastname.0"]')
        .click({force: true})
        .type('Fakenamington')
        .should('have.value', 'Fakenamington')
        .type('{del}{selectall}{backspace}')
        .type('Horseman', { delay: 100 });
    })

    it('Scroll Click Link Speed Test', () => {
        cy.visit('www.award.co');

        //Scroll up and down
        cy.scrollTo('bottom', {duration: 1500});
        cy.scrollTo('top', {duration: 1500});

        //Hover
        cy.get('#w-dropdown-toggle-1')
        .trigger('mouseover');
        cy.wait(500);
        cy.get('#w-dropdown-toggle-0')
        .trigger('mouseover');
        cy.wait(500);
        cy.get('#w-dropdown-toggle-2')
        .trigger('mouseover');

        //Go to contacts page
        cy.get('.menu-title').contains('Contact').click();
        cy.url().should('eq', 'https://www.award.co/contact')

        //Scroll only a bit
        cy.scrollTo(0, 800, {duration: 900});

        //click on the cookies dismiss button
        cy.get('div').contains('Dismiss').click();
        cy.get('div').contains('Dismiss').should('not.exist');

        //scroll back up
        cy.scrollTo('top', {duration: 900});

        //Hover
        cy.get('#w-dropdown-toggle-0')
        .trigger('mouseover');
        cy.wait(500);
        cy.get('#w-dropdown-toggle-1')
        .trigger('mouseover');
        cy.wait(500);
        cy.get('#w-dropdown-toggle-2')
        .trigger('mouseover');
        cy.wait(500);
        cy.get('#w-dropdown-toggle-1')
        .trigger('mouseover');

        //go to resources
        cy.get('.menu-title').contains('Resource Library').click();
        cy.url().should('eq', 'https://www.award.co/resources')

        //Scrool down and up
        cy.scrollTo('bottom', {duration: 1000});
        cy.scrollTo('top', {duration: 1000});

        //Go back to home
        cy.get('[src="https://uploads-ssl.webflow.com/5fa874b3f9ced09e0026328c/5fa88e3f7606afb191a63c00_awardco-horizontal-black.svg"]')
        .click();

        cy.url().should('eq', 'https://www.award.co/');
    })
})



