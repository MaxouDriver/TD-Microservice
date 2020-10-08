# Mailer microservice

### with nodejs, express and nodemailer.

+ Configuration
    
    <code>config.smtp*</code> has to be configure in a <code>config.js</code> file

    like this:
```js
module.exports = {
  smtp: {
    host: 'smtp.host.com',
    port: 'smtp port',
    user: 'your username',
    password: 'your password'
  }
};
```
    you can create an account in https://smtp2go.com for a free smtp server.


+ Example usage

    send a JSON format body message with POST method to <code>localhost:3000/mail**</code>
    
    like this:
 ```js
    {
        body: "this is a email body message."
    }
   ``` 
    * watch the code in services/mailer.js for reference
    ** can be any host where you deploy this app