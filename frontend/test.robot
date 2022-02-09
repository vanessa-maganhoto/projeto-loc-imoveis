*** Settings ***
Library         SeleniumLibrary
Resource        ./test.resource
Test Setup      Abrir o site 
Test Teardown   Close Browser

*** Test Case ***
Teste cadastro
    Abrir a página Loc Imoveis
    Clicar em cadastrar