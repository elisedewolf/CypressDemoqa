/// <reference types="cypress"/>

import { cheksubmit } from "./pageObject/formSubmit.page";
import { fillInPracticeForm, PracticeForm } from "./pageObject/practiceForm.page";

context('First stand-up task Cypress', () => {
    describe('Demoqa', () => {
      beforeEach(() => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.on('uncaught:exception', (err, runnable)=> {
            expect(err.message).to.include('.setup is not a function')
            return false;
          });
      });

      it('fill in Practice Form', () => {
        fillInPracticeForm()
        cheksubmit()

      });
    });
  });
  