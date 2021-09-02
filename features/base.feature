# language: es
Característica: Asegura el end-point
  En orden a conseguir llegar a un end-point
  probamos a llamar a la puerta
  y esperar que abran

  Escenario: Pruebo el ping de la API
    Dado que preparo la api
    Cuando hago ping con resultado OK
    Entonces debería recibir statusText OK

  Escenario: Pruebo un end-point
    Dado que preparo la api
    Y hago get a "http://localhost:8888/github_page/index.html"
    Entonces debería recibir statusText OK