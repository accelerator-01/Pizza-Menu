import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
  

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
        );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }
  const style = {}

  return (
    <header className="header">
      <h1 style={style}>Fast Pizza React.co</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu!</h2>

      {numPizza > 0 ? (
        <> 
          <p>
            Authentic Italian cuisine! 6 creative dishes to choose from!
            All from our stone oven! All organic~ All delicious~
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => ( //rendering array with using map method
            <Pizza pizzaObj={pizza} key={pizza.name} /> //also we create a new pizza component
            ))};
          </ul>
        </>
      ) : (
        <p>We're currently working with our menu! Please come back later~ :3</p>
      )}
      

      {/* <Pizza 
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
      <Pizza 
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //if (pizzaObj.soldOut) return null;

  return (
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
          <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
          <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
          </div>
      </li>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently Open!");
  // else alert("Sorry! We're currently Close!");
  
  return (
  <footer className="footer">
    {isOpen ? (
      <Order closeHour={closeHour} openHour={openHour} />
    ) : (
      <p>
        We're Happy to welcome you between {openHour}:00 and {closeHour}:00
      </p>
    )}
  </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
        <p>
          We're Open from {openHour}:00 until {closeHour}:00. 
          Come visit Us or Order Online!
        </p>
        <button className="btn">Order Now!</button>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);