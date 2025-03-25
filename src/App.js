import React, { useState } from "react";
import { FaSearch, FaBook, FaLink, FaUser } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchbooks = async () =>{
    if (!query) return;
    setLoading(true);
    setError(null);
    try{
      const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
      const data = await response.json();
      setBooks(data.hits);
    } catch (err){
      setError("Erro ao buscar os livros. Tente novamente.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-5 bg-gray-100">
      <div className="container">
      <h1 className="text-2x1 font-bold mb-4"> <FaBook className="mr-2" /> Buscador de Livros</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="p-2 border rounded"
          placeholder="Digite o nome do livro..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchbooks} className="p-2 bg-blue-500 text-white rounded">
        <FaSearch className="mr-2" /> Pesquisar</button>
      </div>
      
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <ul className="w-full max-w-lg bg-white shadow-lg rounded p-4">
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.objectID} className="border-b p-2 last:border-b-0">
              <p className="font-bold">  <FaBook className="mr-2" /> Titulo: {book.title || "Sem titulo"}</p>
              <p className="text-gray-700"> <FaUser className="mr-2" /> Autor: {book.author || "Desconhecido"}</p>
              <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              <FaLink className="mr-2" /> Ver Mais
              </a>
            </li>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </ul>
      </div>
    </div>
  );
};

export default App;