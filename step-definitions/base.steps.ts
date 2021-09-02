import { assert } from "chai";
import expect from 'expect';
import { before, binding, given, then, when } from "cucumber-tsflow/dist";
import { api } from "../helpers/Api.helper";

@binding()
export class BaseSteps {

    private resultado: any;
    @before()
    public beforeAllScenarios(): void {
        console.log("Before los escenarios!!")
    }

    @given('que preparo la api')
    public preparoLaApi() {
        //return true;
    };

    @when('hago ping con resultado OK')
    public async hagoPingConResultadoOk() {
        this.resultado = await api.checkPing()
        assert.equal(this.resultado.status, 200, "La llamada debería tener status 200")
    };

    @when(/hago ([^\s]*) a "([^"]*)"$/)
    public async hagoMetodoARuta(metodo: string, ruta: string) {
        switch(metodo.toLowerCase()) {
            case "post": 
                this.resultado = await api.post(ruta)
                break
            case "get":
            default: 
                this.resultado = await api.post(ruta)
                break
        }
        assert.equal(this.resultado.status, 200, "La llamada debería tener status 200")
        expect(this.resultado.status).toBe(200)
    };

    @then('debería recibir statusText OK')
    public deberiaRecibirStatusTextOk() {
        assert.equal(this.resultado.statusText, "OK");
    }
}