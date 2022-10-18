export const PracticeForm ={
    fieldform: 'form[id="userForm"]',
    inputFirstName: 'input[id="firstName"]',
    inputLastName: 'input[id="lastName"]',
    inputGenderMale: 'input[id="gender-radio-1"]',
    inputGenderFemale: 'input[id="gender-radio-2"]',
    inputGenderOther: 'input[id="gender-radio-3"]',
    inputEmail: 'input[id="userEmail"]',
    inputMobile: 'input[id="userNumber"]',
    inputDateOfBirth: 'div[id="dateOfBirth"]',
    inputCurrentAddress: 'textarea[id="currentAddress"]',
    submitButton: 'button[id="submit"]'
    
};

export const inputDataform ={
    FirstName: "Jef",
    LastName: "Janssens",
    Email: "jefjanssens@gmail.com",
    Mobile: "0474262977",
    CurrentAddress: "hoogstraat 4  1930 Zaventem",
    
};
export function fillInPracticeForm() {
    cy.get(PracticeForm.fieldform).within(() => {
        FillinFirstname()
        FillinLastname()
        FillinDateOfBirth()
        FillinEmail()
        FillinGenderMale() 
        FillinMobile()
        FillinCurrentAddress()
        SubmitForm()
    });
}
function FillinFirstname() {
    cy.get(PracticeForm.inputFirstName)
        .type(inputDataform.FirstName)
}
function FillinLastname(){
    cy.get(PracticeForm.inputLastName)
       .type(inputDataform.LastName)
    }
function FillinEmail(){
    cy.get(PracticeForm.inputEmail)
        .type(inputDataform.Email) 
        }
function FillinGenderMale(){
    cy.get(PracticeForm.inputGenderMale).check({force: true})
}
function FillinGenderFemale(){
    cy.get(PracticeForm.inputGenderFemale).check({force: true})
}
function FillinGenderOther(){
    cy.get(PracticeForm.inputGenderOther).check({force: true})
}
function FillinMobile(){
    cy.get(PracticeForm.inputMobile)
        .type(inputDataform.Mobile)
}
function FillinCurrentAddress(){
    cy.get(PracticeForm.inputCurrentAddress)
        .type(inputDataform.CurrentAddress)
}
function SubmitForm(){
    cy.get(PracticeForm.submitButton)
        .click({force: true})
}
function FillinDateOfBirth(){
    cy.get(PracticeForm.inputDateOfBirth).click()
    cy.get('div[class="react-datepicker"]').within(()=>{
        cy.get('select[class="react-datepicker__month-select"]').select('April')
        cy.get('select[class="react-datepicker__year-select"]').select('1990')
        cy.get('div[class="react-datepicker__day react-datepicker__day--004"]').click()
    });
        
}