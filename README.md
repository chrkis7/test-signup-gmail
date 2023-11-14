# test-signup-gmail
This project is automating the tests of creating gmail account on Google Chrome Web Browser.

## Test Objectives
To verify sign up component enable creating new accout flawlessly.

## Test Scope
Constraints: _Cover `personal use` account only_ & _Test until `phone verification`_

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
cd test-signup-gmail
npm install
```

In order to run the test headless mode
```
npm start
```

## Test Limitations
Using automation, `Sign in` page and all the succeeding pages are not allowed to access, 403 Forbidden Error

Unable to obtain the actual results for test cases.

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
  | Test ID | First Name | Last Name (Optional) | Expected Result | Actual Result |
  | --------| -----------| ---------------------| ----------------| --------------|
  | 1       | Jane       |                      | Pass            |               |
  | 2       | Jane       | Doe                  | Pass            |               |
  | 3       | jane       | Doe                  | Pass            |               |

  Negative Test Cases
  | Test ID | First Name | Last Name (Optional) | Expected Result | Actual Result |
  | --------| -----------| ---------------------| ----------------| --------------|
  | 1       |            |                      | Fail            |               |
  | 2       |            | Doe                  | Fail            |               |
  | 3       | a          |                      | Fail            |               |

* Click `Next` button.
* Check if the new page has `Basic information` as content of \<span\> under \<h1\>

Test cases for Basic information page

  Positive Test Cases
  | Test ID | Month | Day | Year | Gender        | What's your gender? | Please refer to me as | Expected Result | Actual Result |
  | --------| ------| ----| -----| --------------| --------------------| --------------------- | ----------------| --------------|
  | 1       | May   | 5   | 1894 | Male          |                     |                       | Pass            |               |
  | 2       | May   | 5   | 2023 | Female        |                     |                       | Pass            |               |
  | 3       | May   | 5   | 2000 | Rather not say |                     |                       | Pass            |               |
  | 4       | May   | 5   | 1990 | Custom        | Non-binary          | Other                 | Pass            |               |

  Negative Test Cases
  | Test ID | Month | Day | Year | Gender        | What's your gender? | Please refer to me as | Expected Result | Actual Result |
  | --------| ------| ----| -----| --------------| --------------------| --------------------- | ----------------|---------------|
  | 1       | May   | 5   | 1893 | Male          |                     |                       | Fail            |               |
  | 2       | May   | 5   | 2024 | Male          |                     |                       | Fail            |               |
  | 3       | May   | 0   | 2023 | Female        |                     |                       | Fail            |               |
  | 4       | May   | 33  | 2000 | Rater not say |                     |                       | Fail            |               |
  | 5       | May   | fi  | 1990 | Custom        | Non-binary          | Other                 | Fail            |               |
  | 6       | May   | 5   | 1980 | Custom        |                     |                       | Fail            |               |
  | 7       | May   | 5   | 1970 | Custom        | 3                   | Other                 | Fail            |               |

* Click `Next` button.
* Check if the new page has `How you’ll sign in` as content of \<span\> under \<h1\>

Test cases for How you’ll sign in page

  Positive Test Cases
  | Test ID | Create a Gmail Address | Existing Email Address | Expected Result         | Actual Result |
  | --------| -----------------------| -----------------------| ------------------------|---------------|
  | 1       | chrkiss777             |                        | Pass                    |               |
  | 2       |                        | chrkiss777@naver.com   | Enter verification Code |               |
  | 3       |                        | chrkiss777@gmail.com   | Enter verification Code |               |

  Negative Test Cases
  | Test ID | Create a Gmail Address | Existing Email Address | Expected Result         | Actual Result |
  | --------| -----------------------| -----------------------| ------------------------|---------------|
  | 1       | chrkiss777@gmail.com   |                        | Fail                    |               |
  | 2       | chrkiss-777@gmail.com  |                        | Fail                    |               |
  | 3       |                        | chrkiss-777@gmail.com  | Fail                    |               |

* Click `Next` button.
* Check if the new page has `Create a strong password` as content of \<span\> under \<h1\>  

Test cases for Create a strong password page

  Positive Test Cases
  | Test ID | Password | Confirm PW | Show PW | Expected Result | Actual Result |
  | --------| ---------| -----------| --------| ----------------| --------------|
  | 1       | L0v32t3st| L0v32t3st  |         | Pass            |               |
  | 2       | L0v32t3s!| L0v32t3s!  |         | Pass            |               |
  | 3       | L0v32t3s!| L0v32t3s!  | ✅      | Pass            |               |

  Negative Test Cases
  | Test ID | Password | Confirm PW | Show PW | Expected Result | Actual Result |
  | --------| ---------| -----------| --------| ----------------| --------------|
  | 1       |          |            |         | Fail            |               |
  | 2       | L0v32t3s!|            |         | Fail            |               |
  | 3       | L0v32t3  | L0v32t3    | ✅      | Fail            |               |

* Click `Next` button.
* Check if the new page has `Confirm you’re not a robot` as content of \<span\> under \<h1\>  
* Finish testing
