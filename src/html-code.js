// const heading = React.createElement("h1", null, "Hello React");

{/* <script type="text/babel" src= "app.js"></script> */}
const Product = [
  {
    id: 1,
    imageUrl: "/img/product/5.jpg",
    title: "FLamboyant Pink Top",
    price: 35
  },
  {
    id: 2,
    imageUrl: "/img/product/6.jpg",
    title: "Black and White Stripes Dress",
    price: 35
  },

  {
    id: 3,
    imageUrl: "/img/product/7.jpg",
    title: "FLamboyant Pink Top",
    price: 35
  },

  {
    id: 4,
    imageUrl: "/img/product/8.jpg",
    title: "FLamboyant Pink Top",
    price: 35
  },
  {
    id: 5,
    imageUrl: "/img/product/9.jpg",
    title: "FLamboyant Pink Top",
    price: 35
  }
];


const Products = () => {
  return (
    <React.Fragment>
      {Product.map(abc => (
        <div className="col-lg-3 col-sm-6" key={abc.id}>
          <div className="product-item"> 
            <div className="pi-pic">
              <img src={abc.imageUrl} alt="" />
              <div className="pi-links">
                <a href="#" className="add-card">
                  <i className="flaticon-bag" />
                  <span>ADD TO CART</span>
                </a>
                <a href="#" className="wishlist-btn">
                  <i className="flaticon-heart" />
                </a>
              </div>
            </div>
            <div className="pi-text">
              <h6>$ {abc.price}</h6>
              <p>{abc.title}</p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

ReactDOM.render(<Products/>, document.getElementById("react-app"));


