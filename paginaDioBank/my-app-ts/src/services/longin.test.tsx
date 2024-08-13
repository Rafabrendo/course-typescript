import { login } from "./login"


describe('login', () =>{
    //Criando um mock
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', ()=>{
        login()
        // expect(mockAlert).toBeCalled()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })
})