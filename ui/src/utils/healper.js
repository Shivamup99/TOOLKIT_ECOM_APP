export const formatePrice =(price)=>{
    return new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
    }).format(price/100);
}