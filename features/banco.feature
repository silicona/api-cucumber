# language: es
Característica: Bank Account
  En order to do save money
  As a responsible adult
  I want to store by money in a bank account

  Escenario: Stores money
    Dado A bank account with starting balance of $100
    Cuando $100 is deposited
    Entonces The bank account balance should be $200
