const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, './public/upload/')
        } else {
            cb({ message: 'file is invalid' }, false)
        }
    },
    // filename: (req, file, cb) => {
    //     console.log(file.path)
    //     cb(null, file.originalname)
    // }
})

const upload = multer({ storage: storage })
module.exports = upload