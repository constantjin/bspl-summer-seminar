import { useState } from "react";

function App() {

  const [quote, setQuote] = useState({"content": "Click Random Quote button to load a new quote", "author": "John/Jane Doe"});

  async function randomQuote() {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const newQuote = await res.json();
      setQuote(newQuote);

    } catch(e) {
      console.error(e);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col w-1/2 p-5 border-2 border-gray-300">
        <p className="text-center font-serif">
          {quote.content}
        </p>
        <h3 className="mt-4 text-right italic">...By {quote.author}</h3>
        <hr className="my-4" />
        <button className="self-center w-1/4 bg-yellow-300 p-2 rounded-md font-bold
         hover:bg-yellow-400" onClick={randomQuote}>Random Quote</button>
      </div>
    </div>
  )
}

export default App
