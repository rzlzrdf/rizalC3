const { send } = require("express/lib/response");

module.exports = {
    auth: (req,res) => res.render('auth/login'),
    post:{
      login: (req, res) => res.send('POST LOgin')
    }
  }
  
  // ------------------------------------------ //
  
  
  