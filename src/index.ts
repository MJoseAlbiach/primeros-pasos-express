import Express from 'express';

const app: Express.Application = Express();
const PORT: number = 3000;
app.get("/", (req: Express.Request, res: Express.Response)=>{
     res.send("<p>Hola mundo!!</p>");          
});

app.listen(PORT, ()=>{
    console.log (`La aplicación está explicando  ${PORT}`)
});