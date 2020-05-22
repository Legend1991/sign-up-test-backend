const yup = require('yup');

const credentialsSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

module.exports = async function(credentials) {
  await credentialsSchema.validate(credentials);
  const { email, password } = credentials;
  if (email === 'test@test.com' && password === 'test1234')
    return 'test token';
  throw new Error('Wrong email or password');
}