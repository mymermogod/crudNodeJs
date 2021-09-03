const express = require('express');

const server = express();
server.use(express.json());

const cursos = ['Node.Js', 'React.Js', 'Ruby on Rails', 'PHP'];

// retorno curso.
server.get('/cursos/:index', (req,res) => {
    const   { index } = req.params;
    return res.json(cursos[index]);
});

// retornar todos os tipos de curso.
server.get('/cursos', (req,res) => {
    return res.json(cursos);
});

// Criar novo tipo de curso

server.post('/cursos', (req,res) => {
    const { name } = req.body;
    cursos.push(name);
    
    return res.json(cursos);
});


// att um curso

server.put('/cursos/:index', (req,res) =>{
    const { index} = req.params;
    const { name} = req.body;
    cursos[index] = name;
    return res.json(cursos);
});

// deletar um curso
server.delete('/cursos/:index', (req,res) => {
    const { index} =  req.params;
    cursos.splice(index, 1);
    return res.json({ Message : "O curso foi deletado com sucesso"});
});














server.listen(3010);