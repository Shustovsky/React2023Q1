describe('Test open Home page', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('/about');

    cy.contains('Home').click();

    cy.url().should('include', '/');
  });

  it('The loading should be displayed', () => {
    cy.visit('/');
    cy.get('input.search-form_input').type('test{enter}');
    cy.get('span').should('have.class', 'loader');
  });

  it('The items should be displayed', () => {
    cy.visit('/');
    cy.get('input.search-form_input').type('test{enter}');
    cy.get('div.character_item').should('have.length', 1);
  });

  it('The modal item should be displayed', () => {
    cy.visit('/');
    cy.get('div.character_item').first().click();
    cy.get('div').should('have.class', 'modal');
    cy.get('span.close').click();
  });

  it('The error should be displayed', () => {
    cy.visit('/');
    cy.get('input.search-form_input').type('test123{enter}');
    cy.get('h2').should('have.text', 'Oops nothing found, try changing the search parameter!');
  });
});

describe('Test open Form page', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('/');

    cy.contains('Form').click();

    cy.url().should('include', '/form');

    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Submit');
  });

  it('check input validation', () => {
    cy.visit('/form');
    cy.get('input[name="name"]').type('1');
    cy.get('input[name="birthday"]').type('2222-04-25');
    cy.get('input[name="profilePicture"]').selectFile('./src/assets/style/normalize.min.css');
    cy.get('textarea[name="text"]').type('1');
    cy.get('button[type="submit"]').type('{enter}');
    cy.get('span.input_error').should('have.length', 7);
    cy.get('input[name="name"]').type('test1');
    cy.get('input[name="birthday"]').type('1993-04-25');
    cy.get('select[name="rate"]').select('5');
    cy.get('label.labelSwitcher').click();
    cy.get('input[name="gender"]').first().check();
    cy.get('input[name="profilePicture"]').selectFile('./src/assets/icons/favicon.png');
    cy.get('textarea[name="text"]').type('test text test text test text');
    cy.get('input[name="checkbox"]').check();
    cy.get('form').submit();
    cy.get('div.modal-confirm').should('have.text', 'Review successfully added×');
  });
});

describe('Test open About page', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('/');

    cy.contains('About us').click();

    cy.url().should('include', '/about');
    cy.get('main').should('have.text', 'About');
  });
});

describe('Test open Not found page', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('/test');

    cy.get('h1').should('have.text', 'Page not found');
    cy.get('main').should('have.text', 'Not found');
  });
  it('Just a test to remove page load on coverage saving', () => {
    expect(true).to.equal(true);
  });
});
