const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
var schema = mongoose.Schema;
var gallery = new schema({

    image: {
        type: String
    }

}, {
    timestamps: true
})

gallery.index({ location: "2dsphere" });
gallery.plugin(mongoosePaginate);
module.exports = mongoose.model("pictures", gallery)