import React, { useState } from "react";
import Card from "./compenents/card/Card";
import "./app.css";

function App() {
  const [product, setproduct] = useState([
    {
      id: 1,
      title: "lorem1",
      image: "https://picsum.photos/200/300?grayscale",
      info: "lorem1 imsum",
      adet: 1,
    },
    {
      id: 2,
      title: "lorem2",
      image: "https://picsum.photos/200/300?grayscale",
      info: "lorem2 imsum",
      adet: 1,
    },
    {
      id: 3,
      title: "lorem3",
      image: "https://picsum.photos/200/300?grayscale",
      info: "lorem3 imsum",
      adet: 1,
    },
    {
      id: 4,
      title: "lorem4",
      image: "https://picsum.photos/200/300?grayscale",
      info: "lorem4 imsum",
      adet: 1,
    },
    {
      id: 5,
      title: "lorem5",
      image: "https://picsum.photos/200/300?grayscale",
      info: "lorem5 imsum",
      adet: 1,
    },
    {
      id: 6,
      title: "lorem6",
      image: "https://picsum.photos/200/300?grayscale",
      info: "lorem6 imsum",
      adet: 1,
    },
    {
      id: 7,
      title: "lorem7",
      image: "https://picsum.photos/200/300?grayscale",
      info: "lorem7 imsum",
      adet: 1,
    },
    {
      id: 8,
      title: "lorem8",
      image: "https://picsum.photos/200/300?grayscale",
      info: "lorem8 imsum",
      adet: 1,
    },
  ]);

  const [basket, setbasket] = useState([]);

  return (
    <div className="App">
      <div className="urunler">
        {product.map((eleman, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket];
                if (
                  arr.findIndex((ind) => {
                    return eleman.id === ind.id;
                  }) === -1
                ) {
                  arr.push(eleman);
                  setbasket(arr);
                } else {
                  arr.map((item) => {
                    if (item.id === eleman.id) {
                      return (eleman.adet += 1);
                    }
                    setbasket(arr);
                  });
                }

                console.log(basket);
              }}
              key={index}
              title={eleman.title}
              image={eleman.image}
              info={eleman.info}
            />
          );
        })}
        <div className="sepet">
          <h2>sepetiniz</h2>
          <ul className="sepet">
            {basket.map((eleman, index) => {
              return (
                <li>
                  {eleman.title +
                    " --->" +
                    eleman.info +
                    "(" +
                    eleman.adet +
                    ")"}
                </li>
              );
            })}
          </ul>
          {basket.length > 0 ? (
            <button
              onClick={() => {
                setbasket([]);
              }}
            >
              sepeti temizle
            </button>
          ) : (
            <p>sepette ürün yok</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
