let chakram = require('chakram'),
  expect = chakram.expect;

/**
 * The json data does not come from secure servers. So I did schema and accessibility tests.
 */
describe('HTTP assertions', () => {
  it('posts endpoint test', () => {
    const response = chakram.get('https://jsonplaceholder.typicode.com/posts');
    expect(response).to.have.status(200);
    expect(response).to.have.header('server');
    expect(response).to.have.header('content-type', 'application/json; charset=utf-8');
    expect(response).not.to.be.encoded.with.gzip;
    return chakram.wait();
  });

  it('users endpoint test', () => {
    const response = chakram.get('https://jsonplaceholder.typicode.com/users');
    expect(response).to.have.status(200);
    expect(response).to.have.header('server');
    expect(response).to.have.header('content-type', 'application/json; charset=utf-8');
    expect(response).not.to.be.encoded.with.gzip;
    return chakram.wait();
  });

  it('posts schema', () => {
    const response = chakram.get('https://jsonplaceholder.typicode.com/posts');
    expect(response).to.have.status(200);
    expect(response).to.have.schema('[0]', {
      required: ['userId', 'id', 'title', 'body'],
    });
    return chakram.wait();
  });

  it('posts schema', () => {
    const response = chakram.get('https://jsonplaceholder.typicode.com/users');
    expect(response).to.have.status(200);
    expect(response).to.have.schema('[0]', {
      required: ['id', 'name', 'username', 'address', 'phone', 'website', 'company'],
    });
    return chakram.wait();
  });
});
