var express = require('express');
var app = express();
app.use(express.json());

var customers = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: 'MD Zaid',
        email: 'zaid@yahoo.com',
        phone: '9035486843',
        address: "India",
        city: "Bangalore"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        name: 'Abd Villers',
        email: 'abd360@mial.con',
        phone: '9379525772',
        address: "South Africa",
        city: "Cape Town"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: 'B Stokes',
        email: 'bs@abc.com',
        phone: '877779333',
        address: "England",
        city: "London"
    }
];


app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/person', (req, res) => {
    res.send(customers);
});

app.get('/customer', (req, res) => {
    res.send(customers);
});


// post request
app.post('/customer', (req, res) => {
    var customer = req.body;
    customer.id = Date.now() + 'r';
    customers.push(customer);
    res.send({ result: 'success', msg: 'customer added ok' });
});



app.listen(4000);