*** Variables ***
${SITE}                      http://localhost:3000
${NAVEGADOR}                  Chrome
${BTN_CADASTRAR}

*** Keywords ***
Abrir a página Loc Imoveis
    Open Browser                        ${SITE}                   ${NAVEGADOR}
    Maximize Browser Window
    Set Selenium Speed                  0.05

Clicar em cadastrar
    Wait and Click                      ${BTN_CADASTRAR}            
