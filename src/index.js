import express from 'express';
import handlebars from 'express-handlebars';

const port = 5000

const app = express()

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    }))
app.set('view engine', 'hbs')

app.get("/", (req, res)=>{
    res.write("<h1> Works </h1>")

    res.end()
})

app.listen(port, ()=>{console.log("Server is listening on port: " + port)})