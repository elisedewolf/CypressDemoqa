import { inputDataform } from "./practiceForm.page"

export const submitpage ={
    
}

export function cheksubmit() {
    cy.get('.table-responsive')
        .contains(inputDataform.FirstName)
        .contains(inputDataform.LastName)
        
}