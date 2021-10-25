const express = require('express');
const router = express.Router();
const knex = require('../../models/dbHelpers')


router.get('/', async (req, res) => {
    console.log('data');
    await knex('user').select().then(d => {//table name here in knex() having database sign_up in knex.js file
        res.status(200).json({
            d,
            message: "handling GET requests to /signup",
        });
    }).catch(e => console.log('error' + e));
    //const db = await knex(connection)

    // // var data = await

    //console.log(req.body);
    // const db = await knex(connection)

    // var data = await db('sign_up').select()
    // console.log(data);
    //  res.status(200).json({
    //      data,
    //     message: "handling GET requests to /signup",
    // });

});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "handling POST requests to /products"
    });
});

// router.get('/:productId', (req, res, next) => {
//     const id = req.params.productId;
//     if (id === 'special') {
//         res.status(200).json({
//             message: "handling POST requests to /products",
//             ids: id
//         });
//     }
//     else {
//         res.status(200).json({
//             message: "you passed an ID"
//         })

//     }
// })

// router.patch('/:productId', (req, res, next) => {
//     res.status(200).json({
//         message: "Updated successfully"
//     })
// })

// router.delete('/:productId', (req, res, next) => {
//     res.status(200).json({
//         message: "deleted successfully"
//     })
// })

module.exports = router;