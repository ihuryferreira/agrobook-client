import { useState } from "react";
import books from "./script/bd";

const FilterBook = ({ filterbooks }) => {

    books

    return (


        <div>
            <h2>seja bem vindo</h2>
            {
                books.map((titleBook) => (
                    <img src={titleBook.capa} />,
                    <p>{titleBook.titulo} </p>
                ))
            }



        </div>
    )
}
export default FilterBook

