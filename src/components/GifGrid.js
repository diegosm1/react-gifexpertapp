import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({categories}) => {

    
    const {data: images, loading} = useFetchGifs(categories);
   
    
    // // este hook permite que la instruccion solo sea ejecutada una sola vez cuando se cargan los componentes
    // useEffect( () => {
    //     //retorna una promesa
    //     getGifs(categories)
    //     //si se recuelve devuelbeme las imagenes
    //     .then(setImages)
    // }, [categories])



    return (
        <>
            <h3> {categories} </h3>

            {loading && <p className='animate__animated animate__bounce'>Cargando..</p>}
            <div className='card-grid'>
                    {
                        images.map( img => ( //como se regresan elementos es con parentesis no con llaves
                            <GifGriditem 
                            key={img.id}
                            //mandando las propiedades de las imagenes como independientes
                            {...img} />

                        ))
                    }
            </div>
        </>
  
    );
};
