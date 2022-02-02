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



app.post('/customer', (req, res) => {
    var customer = req.body;
    customer.id = Date.now() + 'r';
    customers.push(customer);
    res.send({ result: 'success', msg: 'customer added ok' });
});



// update customer by id => put
// app.put('/customer/:id', (req, res) => {
//     var id = req.params.id;
//     var customer = req.body;
//     var index = customers.findIndex(c => c.id === id);
//     if (index > -1) {
//         customers[index] = customer;
//         res.send({ result: 'success', msg: 'customer updated ok' });
//     } else {
//         res.send({ result: 'error', msg: 'customer not found' });
//     }
// });



// delete customer by id => delete
// app.delete('/customer/:id', (req, res) => {
//     var id = req.params.id;
//     var customer = req.body;
//     var index = customers.findIndex(c => c.id === id);
//     if (index > -1) {
//         customers[index] = customer;
//         res.send({ result: 'success', msg: 'customer deleted ' });
//     } else {
//         res.send({ result: 'error', msg: 'customer not found' });
//     }
// });



// update customer without id => put
app.put('/customer', function(req, res) { //update
    var customer = req.body;
    for (var i = 0; i < customers.length; i++) {
        if (customer.id == customers[i].id) {
            customers[i] = customer;
            break;
        }
    }
    res.send({ result: "ok", msg: "record updated successfully" });
});


// delete customer without id => delete
app.delete('/customer', function(req, res) {
    var id = req.body.id;
    customers = customers.filter((item) => (item.id != id));
    res.send({ result: "ok", msg: "record deleted successfully" });
});

app.listen(4000);