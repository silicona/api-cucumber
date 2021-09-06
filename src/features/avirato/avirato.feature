# language: es
Característica: Suite de Avirato.com
  Conjunto de escenarios para comprobar que la web funciona correctamente

  Escenario: Pagina de inicio de Avirato
    Dado que estoy en la web de avirato
    Cuando llego a la pagina de Inicio
    Entonces el menu principal debería todos sus elementos
    Entonces el cuadro del pms esta presente

  Escenario: Pagina de descargas de Avirato
    Dado que estoy en la web de avirato
    Y pulso el boton de Descargas
    Cuando llego a la pagina de Descargas
    Entonces debería ver 5 botones de filtro de productos
    Entonces debería ver 6 cuadros de productos

  Escenario: Pagina de descargas de Avirato
    Dado que estoy en la web de avirato
    Cuando pulso el boton de <idioma>
    Entonces la web se traduce a <idioma>

  Ejemplos:
  | idioma |
  | ingles |
  | frances |
  | español |
