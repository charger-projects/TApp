import { createSignal, createMemo } from "solid-js";
import tea from "../assets/tea.png";

const LightEcommerceA = createMemo(() => {
  const [products, setProducts] = createSignal([
    {
      id: 0,
      name: "HillTop",
      quantity: "1Kg",
      price: 270,
      image: "https://dummyimage.com/420x260",
      toggle: false,
      count: 0,
    },
    {
      id: 1,
      name: "HillTop",
      quantity: "500g",
      price: 135,
      image: "https://dummyimage.com/420x260",
      toggle: false,
      count: 0,
    },
    {
      id: 2,
      name: "Kannan Devan",
      quantity: "1Kg",
      price: 400,
      image: "https://dummyimage.com/420x260",
      toggle: false,
      count: 0,
    },
    {
      id: 3,
      name: "JayaShri",
      quantity: "1Kg",
      price: 300,
      image: "https://dummyimage.com/420x260",
      toggle: false,
      count: 0,
    },
    {
      id: 4,
      name: "JayaShri",
      quantity: "500g",
      price: 150,
      image: "https://dummyimage.com/420x260",
      toggle: false,
      count: 0,
    },
    {
      id: 5,
      name: "JayaShri",
      quantity: "250g",
      price: 75,
      image: "https://dummyimage.com/420x260",
      toggle: false,
      count: 0,
    },
  ]);

  const increment = (index) => (e) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].count = updatedProducts[index].count + 1;
      return updatedProducts;
    });
  };

  const decrement = (index) => (e) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      if (updatedProducts[index].count > 0)
        updatedProducts[index].count = updatedProducts[index].count - 1;
      return updatedProducts;
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-wrap justify-around -m-4">
          {products().map((product, index) => (
            <div className="lg:w-1/4 p-4 sm:w-1/2 mw-[30%]" key={index}>
              <a className="block relative h-48 rounded">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={tea}
                />
                {product.count && (
                  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-indigo-500 border-2 border-white rounded-full -top-2 -right-2">
                    {product.count}
                  </div>
                )}
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.quantity}
                </h3>
                <div className="flex items-center justify-between border-gray-200">
                  <span>&#8377; {product.price}</span>
                  <div class="flex items-center">
                    {product?.count && (
                      <>
                        <span
                          onClick={decrement(index)}
                          class="material-icons text-xs p-2  bg-indigo-500 text-white rounded hover:opacity-95"
                        >
                          remove
                        </span>
                        <span class="px-2 bg-white text-gray-700">
                          {product.count}
                        </span>
                      </>
                    )}

                    <span
                      onClick={increment(index)}
                      class="material-icons text-xs p-2 bg-indigo-500 text-white rounded hover:opacity-95"
                    >
                      add
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default LightEcommerceA;
