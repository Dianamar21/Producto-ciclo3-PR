async function userLogin(req, res, next) {
    res.send({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNlc2FyIFF1aXJveiIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImlhdCI6MTUxNjIzOTAyMn0.KVPR3kg4XDBXCNY3nNTFi1QXQ2ZmOCE-4SZuKJXkrg0'
    }).status(200);
    next();
};

module.exports.userLogin = userLogin;
