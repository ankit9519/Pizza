import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {numPizzas > 0 && (
        <ul className='pizzas'>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.price}</p>
        <p>{props.pizzaObj.soldOut}</p>
        <span>
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>Wr're open until {closeHour}:00. Come visit us or order online </p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you from {openHour}:00 till {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
