// with mongoose

const mongoose = require('mongoose');
const uri = 'Your_DB_Path';
  mongoose.connect(uri);
  Schema = mongoose.Schema;
  var db = mongoose.connection;
  
  db.on('error', console.error.bind(console, 'connection error:'));

function add () {
    var userSchema = new Schema({
        name  :  { type: String, default: '' }
      , password   :  { type: String, default: '' }
    });
    var userModel = mongoose.model('user', userSchema);
    var test = new userModel({name: "test", password: "test"})
  
    test.save((err, test)=> {
      console.log("saved?")
      if (err) {
        console.log("error");
        return console.error(err);
      }
      console.log("saved!")
      userModel.find({},(err,data)=>{
        if(err){
            console.error(err);
        }else{
            console.log(data);
        }
      })
    });
  
  };

  add();
