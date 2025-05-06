import React, { useState, useEffect } from "react";
import { getProducts } from "../../data/getProducts";

const ItemListContainer = () => {

    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                console.log("Dados buscados", data);
                setProductsList(data);
            } catch (error) {
                console.error("Erro ao carregar produtos:", error);
            }
        };

        fetchProducts();
    }, []);



    return (
        <div>
            <h2> 🛍️ Lista de Produtos </h2>
            {productsList.length === 0 ? (
                <p>Carregando produtos...</p>
            ) : (
                <ul>
                    {productsList.map((product) => (
                        <li key={product.id}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <p>💲Preço: R$ {product.price.toFixed(2)}</p>
                            <p>📦 Estoque: {product.stock}</p>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};      

export default ItemListContainer;