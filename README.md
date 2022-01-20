# _Credit Card Validator_

#### By _**Hayley McVay & Daniel Lindsey**_

#### _A Page designed to validate credit card numbers_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements
---

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

---
## Tests

#### Describe: ccValidator()

Test: "It should return true if only positive numbers are input."
Code:
const text = "28347329874234";
ccValidator(text);
Expected Output: true

Test: "It should return true if the inputted string begins with the numbers 4, 5, 6, 34, or 37"
Code:
const text = "3497912082710";
ccValidator(text);
Expected Output: true

Test: "If input starts with 4, 5, or 6, and length === 16, return true"
Code:
const text = "5497912082710444";
ccValidator(text);
Expected Output: true

Test: "If input starts with 34 or 37, and length === 15, return true"
Code:
const text = "349791208271044";
ccValidator(text);
Expected Output: true

Test: "Returns true if input is valid by running Luhn algorithm and confirming last digit is 0"
Code:
const text = "4102080860435620";
ccValidator(text);
Expected Output: true


## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) _date_ _author name(s)_