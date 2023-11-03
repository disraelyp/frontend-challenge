# Task1 - Reverse The Array Keeping Special Characters 

This is a simple Node.js program for reversing an array while keeping special characters in their original position. The algorithm handles dynamic changes in the array and special character positions.

## Project Structure

```
.
├── .vscode                    # VSCode settings
├── node_modules               # All dependencies for the project are installed here by npm/yarn
├── src                        # Source directory containing the TypeScript source code
│   └── index.ts               # The main application code
├── test                       # Test directory containing test scripts
│   └── index.test.ts          # The main application unit tests
├── jest.config.js             # Configuration of Jest for running tests
├── package.json               # Contains scripts and list of dependencies to install with npm/yarn
├── tsconfig.json              # TypeScript compilation configuration
├── yarn.lock                  # Specific versions of the dependencies installed by yarn
└── README.md                  # Readme file
```

- `src/index.ts`: This is the main application file where the function `specialReverseArray` is defined. This function takes an array, reverses it while keeping special characters in their original positions.
- `test/index.test.ts`: This file contains the unit tests for the function `specialReverseArray` using Jest.


## Problem Statement

You need to write a function to reverse the elements of a given array while keeping special characters in their original positions. 

## Solution Approach

We traverse the array from both ends  using two pointers named left and right. When we encounter a special character, we skip it and move our pointer. When both of the pointers point to a non-special character, we swap these characters. 

## Installation

Before running the program, make sure that you have Node and Yarn installed on your computer.

- Run `yarn install` to install all the dependencies.
- Run `yarn dev` to run the code in development mode.
- Run `yarn build` to compile to JavaScript.
- Run `yarn start` to start the application.
- Run `yarn test` to perform the tests.

## Technologies Used

- JavaScript (TypeScript)
- Node.js
- Jest
