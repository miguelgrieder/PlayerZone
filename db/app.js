const mongoose = require('mongoose');

const uri = "mongodb+srv://MatheusGubler:R5978YHHhBNACfI4@cluster0.fxnrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

}
main().catch(err => console.log(err));