
import singup from '../pages/SingupPage'
import singupFactory from '../factories/SignupFactory'

describe("signup", () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {
    //         this.deliver = d
    //     })
    // })

    //it.skip para pular o caso de teste

    it("User should be deliver", function () {

        var deliver = singupFactory.deliver()

        singup.go()
        singup.fillForm(deliver)
        singup.submit()
        const messageText = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        singup.modalContentShouldBe(messageText)

    })

    it("incorrect document  ", function () {

        var deliver = singupFactory.deliver()
        deliver.cpf = '900090909wss'

        singup.go()
        singup.fillForm(deliver)
        singup.submit()
        singup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it("incorrect email", function () {

        var deliver = singupFactory.deliver()
        deliver.email = 'nilay.com'
        singup.go()
        singup.fillForm(deliver)
        singup.submit()
        singup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('required fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'deliver_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            singup.go()
            singup.submit()
        })
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                singup.alertMessageShouldBe(msg.output)
            })
        })
    })
   })