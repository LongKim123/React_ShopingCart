var initialState =[
    {
        id:1,
        name: 'Iphone 12',
        image:'https://minhtuanmobile.com/wp-content/uploads/2020/10/iphone-12-pro-max-256gb-190320-020344-600x600-1.jpg',
        description: 'San pham do Apple san xuat ra',
        price:500,  
        inventory:10,
        rating:4},
        
    {
        id:2,
        name: 'Iphone 7',
        image:'https://minhtuanmobile.com/wp-content/uploads/2020/10/iphone-12-pro-max-256gb-190320-020344-600x600-1.jpg',
        description: 'San pham do Apple san xuat ra',
        price:300,
        inventory:5,
        rating:5},
        {
            id:3,
            name: 'Iphone X',
            image:'https://minhtuanmobile.com/wp-content/uploads/2020/10/iphone-12-pro-max-256gb-190320-020344-600x600-1.jpg',
            description: 'San pham do Apple san xuat ra',
            price:500,
            inventory:6,
            rating:4}
];
const product = (state=initialState,action) =>{
    switch(action.type){
        default: return [...state];
    }
}
export default product;