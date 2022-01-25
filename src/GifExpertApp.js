import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     /**
    //      * esta forma de definirlo es la correcta con el operador de barrido ya que el operador de barrido trae el estado inicial
    //      * y de esta manera podemos agregar un nuevo elemento en el array.
    //      */
    //     setcategories( cats => [...cats, 'Death Note'])
    // } 



  return (
   <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories={setcategories} />
        <hr />


        <ol>
            { 
                categories.map( category => ( <GifGrid key={category} categories={category} />))
            }
        </ol>
    </>
  );
 
};

