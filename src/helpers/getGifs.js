
export const getGifs = async(categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=10&api_key=KrU18DaaH1RtLjNV0VHKOgwwobwAKq65`; 
    const resp =  await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}