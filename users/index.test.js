var func = require('./index');

test('Http trigger with body success', () => {
    let mockContext = {
      done: (err, response) => {
        // As everything is passed to the done function we can do our asserts here.
        expect(err).toBeNull(); // We never call the done function with a Error.
  
        expect(response.status).toBe(200); // When we succeed it should be 200.
      },
      log: () => { }, // We can use a jest mock here if the logs are important to us, but in this case it is not.
    };
  
    // This is the request we will use to test our function.
    const mockRequest = {
      body: '',
      query: {},
      headers: {
          'X-ZUMO-AUTH': 'a;ldkjsf;alksjdf;alksdjf;lajkdf;lkjasd'
      }
    };
  
    // Call the function
    func(mockContext, mockRequest);
  });