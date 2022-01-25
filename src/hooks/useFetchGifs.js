import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (categories) => {
    const [state, setState] = useState({
        //estado cargando por defecto
        data: [],
        loading: true

    });
    //estos no pueden ser sincronos
    useEffect(()=> {
        getGifs(categories)
        .then(imgs => {

            setTimeout(()=>{
                console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                })
            }, 3000)
        })
    }, [categories])

    // setTimeout(() => {
    //     //cuando se quiere cambiar el estado se debe de colocar el mismo
    //     setState({
    //         data: [1, 2, 3, 4],
    //         loading: false
    //     })
    // }, 3000)

    return state

}