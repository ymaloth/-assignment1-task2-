const express = require('express')
const app = express()
let app2 = express()

 app.use(express.static('public'))

/*app.get('/', function (req, res) {
  res.send('Instagram clone')
})
app.get('/',function(request,response){
    response.send('this is insta clone')

})*/


 
// start the server on port 3000
app.listen(3000)

