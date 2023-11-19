describe("Test API: ", () => {
//test1
    it('GET request without parameters', () => {
        cy.request('GET', 'https://httpbin.org/get')
          .its('status')
          .should('eq', 200);
      });

//test2
      it('POST request with custom headers', () => {
        const headers = { 'Custom-Header': 'Custom-Value' };
        cy.request('POST', 'https://httpbin.org/post', { headers })
          .its('status')
          .should('eq', 200);
      });
//test3
      it('PUT request with query parameters', () => {
        const params = { param1: 'value1', param2: 'value2' };
        cy.request('PUT', 'https://httpbin.org/put', { qs: params })
          .its('status')
          .should('eq', 200);
      });
//test4      
      it('DELETE request with random query parameters', () => {
        const randomParams = { param1: Cypress._.random(1, 100), param2: Cypress._.random(1, 100) };
        cy.request('DELETE', 'https://httpbin.org/delete', { qs: randomParams })
          .its('status')
          .should('eq', 200);
      });
//test5      
it('PATCH request with JSON content', () => {
    const jsonData = { key: 'value' };
    cy.request('PATCH', 'https://httpbin.org/patch', { body: jsonData })
      .its('status')
      .should('eq', 200);
  });
//test6
it('GET request with User-Agent header', () => {
    const headers = { 'User-Agent': 'MyCustomUserAgent' };
    cy.request('GET', 'https://httpbin.org/get', { headers })
      .its('status')
      .should('eq', 200);
  });
//test7
it('POST request with form data and custom headers', () => {
    const formData = { key1: 'value1', key2: 'value2' };
    const headers = { 'Custom-Header': 'Custom-Value' };
    cy.request('POST', 'https://httpbin.org/post', { form: true, body: formData, headers })
      .its('status')
      .should('eq', 200);
  });
//test8
it('GET request with random query parameters', () => {
    const randomQueryParams = { param1: Cypress._.random(1, 100), param2: Cypress._.random(1, 100) };
    cy.request('GET', 'https://httpbin.org/get', { qs: randomQueryParams })
      .its('status')
      .should('eq', 200);
  });
//test9
it('GET request to check response content', () => {
    cy.request('GET', 'https://httpbin.org/json')
      .its('body')
      .should('have.property', 'slideshow');
  });
//test10
it('GET request to check application duration', () => {
    cy.request('GET', 'https://httpbin.org/delay/3')
      .its('duration')
      .should('be.greaterThan', 3000);
  });
//test11
it('GET request with Basic Authentication', () => {
    const username = 'user';
    const password = 'passwd';
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/basic-auth/user/passwd',
      auth: { username, password },
      failOnStatusCode: false, // Allow non-2xx status codes
    })
      .its('status')
      .should('eq', 200);
  });
//test12   
it('POST request with XML content', () => {
    const xmlData = '<root><element1>value1</element1><element2>value2</element2></root>';
    cy.request('POST', 'https://httpbin.org/post', { body: xmlData, headers: { 'Content-Type': 'application/xml' } })
      .its('status')
      .should('eq', 200);
  });
//test13
it('GET request with cookies', () => {
    cy.request('GET', 'https://httpbin.org/cookies/set?cookie1=value1&cookie2=value2')
      .its('status')
      .should('eq', 200);
  });
//test14
it('PUT request with JSON content and delay', () => {
    const jsonData = { key: 'value' };
    cy.request('PUT', 'https://httpbin.org/delay/2', { body: jsonData })
      .its('status')
      .should('eq', 200);
  });
//test15
it('GET request with custom timeout', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/delay/3',
      timeout: 4000, // Setting a custom timeout of 4 seconds
    })
      .its('status')
      .should('eq', 200);
  });
  
  
  


})