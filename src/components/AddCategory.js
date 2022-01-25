import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => { //desestructuramos la propiedad reconrdando que se pasan props como argumento de los componentes 
    //Cuando inicializamos un estado por ejemplo este se denota que no se puede cambiar en el DOM
    const [inputValue, setInputValue] = useState('');


    const handleSubmit= (e) => {
        //prevenimos el comportamiento por defecto del form al presionar enter sobre un componente
        e.preventDefault();
        //comprobacion de resultados
        //Validacion simple del Input
        if (inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        };
        
    }

    return (
    //como tenemos un elemento agrupador podemos utilizarlo en lugar del fragment
    <form onSubmit={handleSubmit}>

        <input
            type="text"
            value={inputValue}
            // tenemos que manejarlo en las propiedades de cada etiqueta. y con el valor del parametro ey sus porpiedades se puede cambiar.
            onChange={e => setInputValue(e.target.value)}
        ></input>
    </form>
  
  );
};
//Asignacion de prop por defecto
AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
}


