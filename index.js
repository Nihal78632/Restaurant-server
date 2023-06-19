const jsonserver = require ('json-server')


//creating server
const server =jsonserver.create()

//setup path for db.json
const router=jsonserver.router('db.json')

//use a middleware
const middleware=jsonserver.defaults()

//setup port
const port=process.env.PORT || 4000

//use in server
server.use(middleware)
server.use(router)

//to run port
server.listen(port,()=>{
    console.log("Json server started at" + port);
})