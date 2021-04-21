import express from 'express';

const app = express();

/**
 * GET = Find
 * POST = Create
 * PUT = Change
 * DELETE = Delete
 * PATCH = Change a specific information
 */

/*
first parameter the url route, the second a function that receives a request(everything that is coming to my request)
and the response (everything that will be returned to the user)
*/
app.get('/', (request, response) => {
    return response.json({
        message: 'Hey NLW 05',
    });
});

app.post('/users', (request, responde) => {
    return responde.json({
        message: 'User saved successfully',
    });
});

app.listen(8080, () => console.log('Server is running on port 8080'));
