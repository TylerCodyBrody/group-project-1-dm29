

module.exports = {
    getBin: (req, res, next) => {
        var {params} = req;
        const db = req.app.get('db')
        db.dbShelfA.getBinShelfA([params.id])
        .then(response => {res.status(200).send(response)})
        console.log("ok")
    }
    // updateBin: (req, res, next) => {

    // },
    // deleteBin: (req, res, next) => {

    // }
}