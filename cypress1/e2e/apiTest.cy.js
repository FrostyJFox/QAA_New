describe("httpbin tests", () => {

    const bodyData = {
        bodyKey: "bodyValue"
    }

    const requestPOST = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: bodyData,
        failOnStatusCode: false
    }

    const requestGET = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: {
            "key": "value"
        },
        failOnStatusCode: false
    }

    it('Test API POST', () => {
        cy.request(requestPOST).then(response => {
            const status = response.status
            assert.equal(200, status)
            assert.notStrictEqual(bodyData, response.body.data)
            cy.log(response.body.data)
        })
    })

    it('Test API GET', () => {
        cy.request(requestGET).then(response => {
            const status = response.status
            assert.equal(200, status)
            assert.equal("value", response.body.args.key)
            cy.log(response.body.args)
        })

    })

})
