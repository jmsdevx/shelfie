module.exports = {

    //create a table first

    getAllData: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_all_data()
        .then(response => res.status(200).send(response))
        .catch(error => {
            res.status(500).send(error)
            console.log(error)
        })
    }, 

    addData: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log(req.body)
        const {data_name, data_price, data_img} = req.body;

        dbInstance.add_data([data_name, data_price, data_img])
        .then(()=> res.sendStatus(200))
        .catch(error=>{
            res.status(500).send(error)
            console.log(error)
        })

    },

    getOne: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req

        dbInstance.get_one([params.id])
        .then(response => res.status(200).send(response))
        .catch(error => {
            res.status(500).send(error)
            console.log(error)
        })
    },

    deleteData: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {params} = req

        dbInstance.delete_data([params.id])
        .then(()=> res.sendStatus(200))
        .catch(error => {
            res.status(500).send(error)
            console.log(error)
        })
    },

    updateData: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} =  req;
        const {data_name, data_price, data_img} = req.body;

        dbInstance.update_data([params.id, data_name, data_price, data_img])
        .then( () => res.status(200).send(response))
        .catch( error => {
            res.status(500).send(error)
            console.log(error)
        })
    }

    //for multiple updates together
//     -- for multiple updates together, do it like a create
// -- update products
// -- set data_name =$2, data_description = $3
// -- where product_id = $1;

// -- const update = (req, res, next) => {
// --  const db = req.app.get("db");
// --  const { params, body } = req;
// --  db.update_product([params.id, body.data_name, body.data_description])
// --    .then(response => res.status(200).send(response))
// --    .catch(err => res.status(500).send(err));
// -- };

    
}