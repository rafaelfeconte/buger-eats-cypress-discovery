
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

//firstName() chamado de função ()
export default {

    deliver: function() {

        var fristName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
        name: `${fristName} ${lastName}`,
        cpf: cpf.generate(),
        email: faker.internet.email(fristName),
        whatsapp: '11999999999',
        address: {
            postalcode: '05001000',
            street: 'Avenida Francisco Matarazzo',
            number: '1001',
            details: 'shopping',
            district: 'Água Branca',
            city_state: 'São Paulo/SP'
        },
        deliver_method: 'Moto',
        cnh: 'cnh-digital.jpg'
        }
        return data
    }
}
