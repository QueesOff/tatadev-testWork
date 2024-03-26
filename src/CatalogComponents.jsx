import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export default function CatalogComponents() {
  const [state, setState] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const [filterStateTwo, setFilterStateTwo] = useState([]);
  const [filterStateThree, setFilterStateThree] = useState([]);
  const [filterStateFour, setFilterStateFour] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "https://postive.tata.kg/api/v1/products/categories"
      );
      setState(response.data.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const click = async (id) => {
    try {
      const filteredItemTwo = state.filter((item) => item.id === id)[0]; // Получаем первый элемент из отфильтрованного массива
      const filteredItem = state.filter((item) => item.id === id); // Получаем первый элемент из отфильтрованного массива
      setFilterState(filteredItem);
      setFilterStateTwo(filteredItemTwo.childs);
      setFilterStateThree([]);
      setFilterStateFour([]);
    } catch (error) {
      console.error("Error filtering data:", error);
    }
  };

  const clickTwo = async (id) => {
    try {
      const filteredItem = filterStateTwo.filter((item) => item.id === id)[0]; // Получаем первый элемент из отфильтрованного массива
      console.log(filteredItem.childs);
      setFilterStateThree(filteredItem.childs);
    } catch (error) {
      console.error("Error filtering data:", error);
    }
  };

  const clickThree = async (id) => {
    try {
      const filteredItem = filterStateThree.filter((item) => item.id === id)[0]; // Получаем первый элемент из отфильтрованного массива
      console.log(filteredItem.childs);
      setFilterStateFour(filteredItem.childs);
    } catch (error) {
      console.error("Error filtering data:", error);
    }
  };

  return (
    <div className="main">
      <div className="block_btn">
        <h1>Категории</h1>
        {state.map((item) => (
          <div key={item.id}>
            <button className="btn3" onClick={() => click(item.id)}>
              {" "}
              <img className="icon" src={item.image} alt="icon" /> {item.name}
            </button>
          </div>
        ))}
      </div>
      <div>
        {filterState.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            {filterStateTwo.map((item) => (
              <div key={item.id}>
                <button className="btn3" onClick={() => clickTwo(item.id)}>
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        {filterStateThree.map((item) => (
          <div key={item.id}>
            <button className="btn3" onClick={() => clickThree(item.id)}>
              {item.name}
            </button>
          </div>
        ))}
      </div>
      <div>
        {filterStateFour.map((item) => (
          <div key={item.id}>
            <button className="btn3">{item.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
