const express = require('express')
const router = express.Router();

router.get('/',(req,res,next) => {

    res.status(200).json({
        message:"Handling GET request to /products"
    });
});

router.post('/',(req,res,next) => {

    res.status(201).json({
        message:"Handling POST request to /products"
    });
});

router.get('/:productId',(req,res,next) => {

    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:"you discovered special id",
            id:id
        });
    }
    else{

        res.status(200).json({

                message:"you passed an id"
        });
    }
});

router.patch('/:productId',(req,res,next) => {

    res.status(200).json({

        message:'updated products'
    });
});

router.delete('/:productId',(req,res,next) => {

    res.status(200).json({

        message:'deleted products'
    });
});

module.exports = router;
