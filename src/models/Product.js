const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


// o id do banco de dados é gerado automaticamente
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// faz com o que o model utilize o plugin de paginacao, para que possa ser utilizado no controller
ProductSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProductSchema);