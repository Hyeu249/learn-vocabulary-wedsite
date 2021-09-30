const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Tshirt = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, },
    size: { type: String, required: true },
    cost: { type: String, required: true },
    color: { type: String, required: true },
    product: { type: String, required: true },
    slug: { type: String, slug: 'name' },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Tshirt', Tshirt);