// libraries
import React from 'react';
// created by me 
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Sceleton from "../components/PizzaBlock/Sceleton";
import Pagination from "../components/Pagination";
import { SearchContext } from '../App';


const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  // create useState to keep the pizzas here
  const [items, setItems] = React.useState([{
    "id": 0,
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
    "title": "Pepperoni",
    "types": [
     0,
     1
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 11.99,
    "category": 2,
    "reating": 4
   },
   {
    "id": 1,
    "imageUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    "title": "Mexican",
    "types": [
     0
    ],
    "sizes": [
     26,
     40
    ],
    "price": 9.99,
    "category": 1,
    "reating": 6
   },
   {
    "id": 2,
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
    "title": "Hawaiian",
    "types": [
     0,
     1
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 10.99,
    "category": 2,
    "reating": 5
   },
   {
    "id": 3,
    "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    "title": "Mini-Meat",
    "types": [
     0
    ],
    "sizes": [
     26,
     30
    ],
    "price": 6.99,
    "category": 3,
    "reating": 7
   },
   {
    "id": 4,
    "imageUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    "title": "Donair",
    "types": [
     0,
     1
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 11.99,
    "category": 4,
    "reating": 4
   },
   {
    "id": 5,
    "imageUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    "title": "BBQ",
    "types": [
     1
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 11.99,
    "category": 1,
    "reating": 4
   },
   {
    "id": 6,
    "imageUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    "title": "Margherita",
    "types": [
     0,
     1
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 11.99,
    "category": 2,
    "reating": 4
   },
   {
    "id": 7,
    "imageUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    "title": "Veggie",
    "types": [
     0
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 11.99,
    "category": 2,
    "reating": 4
   },
   {
    "id": 8,
    "imageUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    "title": "Mozza Lozza",
    "types": [
     0,
     1
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 11.99,
    "category": 4,
    "reating": 4
   },
   {
    "id": 9,
    "imageUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    "title": "California",
    "types": [
     0,
     1
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 11.99,
    "category": 3,
    "reating": 4
   },
   {
    "id": 10,
    "imageUrl": "https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
    "title": "Cheeseburger",
    "types": [
     0,
     1
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 11.99,
    "category": 2,
    "reating": 4
   },
   {
    "id": 11,
    "imageUrl": "https://img.freepik.com/free-photo/pizza-with-cheese-tomato-isolated-white-background-pizza-margarita-top-view-photo-menu_639032-301.jpg?w=826&t=st=1673578240~exp=1673578840~hmac=0e7ae95ed640e635d10e39bba042b9808d10cf0b0bc355ae8ded3e499ee7f520",
    "title": "Chinook",
    "types": [
     0,
     1
    ],
    "sizes": [
     26,
     30,
     40
    ],
    "price": 11.99,
    "category": 1,
    "reating": 4
   }]);
  // hook to check if pizzas is loaded
  const [isLoading, setIsLoading] = React.useState(true);

  /* transfer to states from categories and sort in order to
  keep two parameters together */
  const [categoryId, setCategoryId] = React.useState(0);
  // state to keep the number of pages 
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "popularity",
    sortProperty: "rating"
  });


  // create the useEffect state to set the condition of execution
  React.useEffect(() => {
    setIsLoading(false);

  const sortBy = sortType.sortProperty.replace("-", "");
  const order = sortType.sortProperty.includes("-") ? "desc" : "asc";
  const category = categoryId > 0 ? `category=${categoryId}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

    // the fetch API to connect our front to back
    // take this link where I keep all items
    fetch(
      `https://63c1d8347165626718847cb1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    )
    // then convert in to json
    .then((response) => response.json())
    //create arr and transfer this arr in the items variable
    .then((arr) => {
      // render pizzas
      setItems(arr);
      // give the isLoading var a value false (when pizzas is loaded)
      setIsLoading(false);
    });
    // to automatically scrool up if go to home page
    window.scrollTo(0,0);
  }, [categoryId, sortType, searchValue, currentPage]);/* execute only of the empty arr was found. If category has changed, then restor the function*/
  
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(6)].map((_, index) => <Sceleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
        <Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">

        {
          /* If pizzas is loading show sceleton, as soon as page loaded, show pizzas */
          isLoading ? skeletons : pizzas}

      </div>
      <Pagination
        onChangePage = {(number) => setCurrentPage(number)}
      />
    </div>
  )
}

export default Home;