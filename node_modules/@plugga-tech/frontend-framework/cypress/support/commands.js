/// <reference types="cypress" />
import { frameworks } from '../../data';

// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('clickLinkInFooterAndAssertItsHighlighted', (regexp) => {
  cy.get('footer')
    .find('a')
    .contains(regexp)
    .then(($link) => {
      const linkBGColorBefore = $link.css('background-color');
      cy.wrap($link)
        .click()
        .then(($link) => {
          const linkBgColorAfter = $link.css('background-color');
          expect(linkBGColorBefore).to.not.equal(linkBgColorAfter);
        });
    });
});

Cypress.Commands.add('shouldDisplayChartHeader', () => {
  const { surveys } = frameworks[0];
  cy.get('[data-cy="chart-header-cell"]')
    .should('have.lengthOf', surveys.length + 2) // +2 because of empty cells on each side
    .each(($cell, index) => {
      if (index === 0 || index > surveys.length) {
        // empty cells above the framework name on each side
        expect($cell).to.be.empty;
      } else {
        // otherwise each cell should display the survey year
        const { year } = surveys[index - 1];
        expect($cell).to.have.text(year);
      }
    });
});

Cypress.Commands.add('shouldDisplayChartData', (category) => {
  // N = Framework Name
  // V = Survey Value
  // N, V, V, V, N
  // 0, 1, 2, 3, 4
  // 5, 6, 7, 8, 9

  cy.get('[data-cy="chart-data-cell"]').each(($cell, index, $list) => {
    const surveysCount = frameworks[0].surveys.length;
    const cellRowCount = surveysCount + 2; // +2 because of the first and last cell in each row
    const frameworkIndex = Math.floor(index / cellRowCount);
    const frameworkColumnIndex = index % cellRowCount;

    const framework = frameworks[frameworkIndex];
    const missingSurveysCount = framework.surveys[0].year - 2016;

    if (frameworkColumnIndex === 0 || frameworkColumnIndex > surveysCount) {
      // first and last cell should display the framework name with the frameworks color
      cy.wrap($cell)
        .scrollIntoView()
        .should('be.visible')
        .and('have.text', framework.name)
        .and('have.css', 'color')
        .and('be.colored', framework.color);
    } else if (frameworkColumnIndex - 1 < missingSurveysCount) {
      // if there are missing surveys, the cells should be empty
      cy.wrap($cell).scrollIntoView().should('be.visible').and('be.empty');
    } else {
      // otherwise the cells should display the survey value with a colored circle
      const surveyIndex = frameworkColumnIndex - 1 - missingSurveysCount;
      const survey = framework.surveys[surveyIndex];

      cy.wrap($cell)
        .find('[data-cy="chart-circle"]')
        .scrollIntoView()
        .should('be.visible')
        .and('have.text', survey[category] + '%')
        .and('have.css', 'border-color')
        .and('be.colored', framework.color);
    }

    // Try clicking on some elements to ensure they dont cover each other
    if (frameworkIndex === frameworkColumnIndex) {
      cy.wrap($cell).click();
    }
  });
});

Cypress.Commands.add('assertLayoutHasHeaderMainFooter', () => {
  cy.get('header')
    .should('exist')
    .should('be.visible')
    .find('h1')
    .should('have.text', 'State of Javascript');
  cy.get('main').should('exist').should('be.visible');
  cy.get('footer')
    .should('exist')
    .should('be.visible')
    .should('include', /retention/i);
});

Cypress.Commands.add('ensureNoHorizontalScroll', () => {
  cy.viewport('samsung-s10');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('iphone-xr');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('ipad-2');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('ipad-2', 'landscape');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('macbook-13');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);
  cy.viewport('macbook-16');
  cy.window().scrollTo('right', { ensureScrollable: false }).its('scrollX').should('equal', 0);

  cy.get('body')
    .should('not.have.css', 'overflow', 'hidden')
    .should('not.have.css', 'overflow-x', 'hidden');
  cy.get('header')
    .should('not.have.css', 'overflow', 'hidden')
    .should('not.have.css', 'overflow-x', 'hidden');
  cy.get('main')
    .should('not.have.css', 'overflow', 'hidden')
    .should('not.have.css', 'overflow-x', 'hidden');
  cy.get('footer')
    .should('not.have.css', 'overflow', 'hidden')
    .should('not.have.css', 'overflow-x', 'hidden');
});

Cypress.Commands.add('shouldScrollChartHorizontally', (shouldScroll) => {
  cy.get('[data-cy="chart"]')
    .scrollTo('right', { ensureScrollable: false })
    .then(($chart) => {
      const scrollX = $chart[0].scrollLeft;
      if (shouldScroll) {
        expect(scrollX).to.be.greaterThan(0);
      } else {
        expect(scrollX).to.equal(0);
      }
    });
});
