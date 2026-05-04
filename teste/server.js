const express = require ('express');
const app = express();
const path = require ('path');

const filmes = [
        {id: 1, titulo: "Vingadores: Doutor Destino", diretor: "Joe Russo", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROoNJdxUFclcH-NaUtoiL192Tedi3Vw5XnsA&s"},
        {id: 2, titulo: "Homem-Aranha: Um Novo Dia", diretor: "Destin Daniel Cretton", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47H6MaJgh1a2gYjzZeCSkFkyj9RG0J4tyHw&s"},
        {id: 3, titulo: "Homem de Ferro", diretor: "Jon Favreau", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckZoCIev0B5GLnNQTmcZwb3TXOdf6K35boQ&s"},
        {id: 4, titulo: "Pecadores", diretor: "Ryan Coogler", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-YhUTcBS30OG-TDoN5q-PqyCX9oN2O0_RGg&s"},
        {id: 5, titulo: "F1 - Filme", diretor: "Joseph Kosinski", poster: "https://static.wixstatic.com/media/631c57_0339b9a351ab48d880ddc61aa8c170bb~mv2.png/v1/fill/w_568,h_810,al_c,q_90,usm>"}];

app.get('/api/filmes', (req, res)=> {
  res.json(filmes);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
        console.log('Ótimo! Servidor está funcionando na porta 3000');
})
