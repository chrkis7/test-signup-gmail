# test-signup-gmail
This project is automating the tests of creating gmail account on Google Chrome Web Browser.

## Test setup requirements
Testing tool is _Cypress_

Requirements
1. Operating Systems: Mac, Windows or Linux
2. [Node 12.0.0+ (LTS)](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. [Google Chrome web browser](https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DDesktop)

In order to get the code and install dependencies
```
git clone git@github.com:chrkis7/test-signup-gmail.git
cd testing-workshop-cypress
npm install
```

## Test Objectives
To verify sign up component enable creating new accout flawlessly

## Test Scope
Constraints: _Cover `personal use` account only_ & _Test until `phone verification`_

## Test Cases
Prerequisite: _`Sign out` your accout from Google Chrome_

Set up test cases
* Navigate to https://www.google.com
* Click `Sign in` button on the top right cornor.
* Check if the new page has `Use your Google Account` as content of \<span\> under \<h1\>
* Click `Create account` button and choose `For my personal use` list item _(Check the Test Scope section)_
* Check if the new page has `Create a Google Account` as content of \<span\> under \<h1\>

Test cases for Create a Google Account page

  Positive Test Cases
  | Test ID | Description           | First Name | Last Name (Optional) | Expected Result | Actual Result |
  | --------| ----------------------| -----------| ---------------------| ----------------| --------------|
  | 1       | right-aligned         | $1600      |                      |                 |               |
  | 2       | centered              |   $12      |                      |                 |               |
  | 3       | are neat              |    $1      |                      |                 |               |

  Negative Test Cases
  | Test ID | Description           | First Name | Last Name (Optional) | Expected Result | Actual Result |
  | --------| ----------------------| -----------| ---------------------| ----------------| --------------|
  | 1       | right-aligned         | $1600      |                      |                 |               |
  | 2       | centered              |   $12      |                      |                 |               |
  | 3       | are neat              |    $1      |                      |                 |               |

* Click `Next` button.
* Check if the new page has `Basic information` as content of \<span\> under \<h1\>

Test cases for Basic information page

  Positive Test Cases
  | Test ID | Description           | Month | Day | Year | Gender | What's your gender? | Please refer to me as |
  | --------| ----------------------| ------| ----| -----| -------| --------------------| --------------------- |
  | 1       | right-aligned         | $1600 |     |      |        | What's your gender? | Please refer to me as |
  | 2       | centered              |   $12 |     |      |        | What's your gender? | Please refer to me as |
  | 3       | are neat              |    $1 |     |      |        | What's your gender? | Please refer to me as |

  Negative Test Cases
  | Test ID | Description           | Month | Day | Year | Gender | What's your gender? | Please refer to me as |
  | --------| ----------------------| ------| ----| -----| -------| --------------------| --------------------- |
  | 1       | right-aligned         | $1600 |     |      |        | What's your gender? | Please refer to me as |
  | 2       | centered              |   $12 |     |      |        | What's your gender? | Please refer to me as |
  | 3       | are neat              |    $1 |     |      |        | What's your gender? | Please refer to me as |

* Click `Next` button.
* Check if the new page has `How you’ll sign in` as content of \<span\> under \<h1\>

Test cases for How you’ll sign in page

  Positive Test Cases
  | Test ID | Description           | Username | 
  | --------| ----------------------| ---------| 
  | 1       | right-aligned         | $1600    |     
  | 2       | centered              |   $12    |  
  | 3       | are neat              |    $1    |  

  Negative Test Cases
  | Test ID | Description           | Username | 
  | --------| ----------------------| ---------| 
  | 1       | right-aligned         | $1600    |     
  | 2       | centered              |   $12    |  
  | 3       | are neat              |    $1    |

* Click `Next` button.
* Check if the new page has `Create a strong password` as content of \<span\> under \<h1\>  

Test cases for Create a strong password page

  Positive Test Cases
  | Test ID | Description           | Password | Confirm PW | Show PW |
  | --------| ----------------------| ---------| -----------| --------|
  | 1       | right-aligned         | $1600    |            |         |
  | 2       | centered              |   $12    |            |         |
  | 3       | are neat              |    $1    |            |         |

  Negative Test Cases
  | Test ID | Description           | Password | Confirm PW | Show PW |
  | --------| ----------------------| ---------| -----------| --------|
  | 1       | right-aligned         | $1600    |            |         |
  | 2       | centered              |   $12    |            |         |
  | 3       | are neat              |    $1    |            |         |

* Click `Next` button.
* Check if the new page has `Confirm you’re not a robot` as content of \<span\> under \<h1\>  
* Finish testing
