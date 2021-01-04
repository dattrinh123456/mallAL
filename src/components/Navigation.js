import React, { Component } from "react";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      total: 0
    };
  }

  componentDidMount() {
    const itemFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (itemFromLocalStorage) {
      this.setState({
        products: itemFromLocalStorage,
      });
    }
  }

  componentWillReceiveProps(data) {
    let { products } = this.state;
    data.getDataFromApp.quantity = 1
    products.push(data.getDataFromApp);
    
    this.setState({
      products
    });
    localStorage.setItem("cart", JSON.stringify(products));
  }


  increaseProduct=(data)=>{
    let {products} = this.state
    let index = products.findIndex(product => product === data)

    const price = data.Don_gia_Ban / data.quantity
    products[index].quantity = products[index].quantity + 1
    products[index].Don_gia_Ban = +products[index].Don_gia_Ban + price
    this.setState({
      products
    })
  }

  decreaseProduct= (data ) => {
    let {products} = this.state

    let index = products.findIndex(product => product === data)
    console.log(index)
    const price = data.Don_gia_Ban / data.quantity
    if(products[index].quantity > 1 ){
      products[index].quantity = products[index].quantity - 1
      products[index].Don_gia_Ban = (+products[index].Don_gia_Ban - price).toFixed(0)
    }
    this.setState({
      products
    })
  }

  deleteProduct= (data)=>{
    let {products} = this.state

    let index = products.findIndex(product => product === data)

    products.splice(index,1)
    this.setState({
      products
    })
  }

  render() {
    const { products } = this.state;

    let price = products.map(data=>+data.Don_gia_Ban)
    let total = price.reduce((currentValue,total)=>{
      return currentValue + total
    }, 0);

    const element = products.map((data, index) => {
      const src = `https://media2-anhlien.herokuapp.com/${data.Ma_so}.png`;

      return (
        <tr className="text-center" key={index * Math.random()}>
          <td>
            <img src={src} />
          </td>
          <td>{data.Ten}</td>
          <td>
            {data.quantity}
            <button onClick = {()=>{this.increaseProduct(data)}}>
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
            <button onClick = {()=>{this.decreaseProduct(data)}}>
              <i class="fa fa-minus" aria-hidden="true"></i>
            </button>
          </td>

          <td>{data.Don_gia_Ban} </td>
          <td>
            <button onClick={()=>{this.deleteProduct(data)}}>
            <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger"></a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars ml-1" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    data-toggle="modal"
                    data-target="#modelId"
                  >
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <div className="carousel-inner">
              <div className="carousel-item active ">
                <img
                  src="https://medsy-minimal.vercel.app/_next/static/images/slider_02-ec4d88540f8ac1092c901d127cad4685.jpg"
                  style={{
                    width: "100%",
                    height: "30em",
                    backgroundSize: "cover",
                  }}
                  alt="Los Angeles"
                />
              </div>
              <div className="carousel-item ">
                <img
                  src="https://medsy-minimal.vercel.app/_next/static/images/slider_01-3da834d5d412926c3043e66301462579.jpg"
                  style={{
                    width: "100%",
                    height: "30em",
                    backgroundSize: "cover",
                  }}
                  alt="Chicago "
                />
              </div>
              <div className="carousel-item ">
                <img
                  src="https://medsy-minimal.vercel.app/_next/static/images/slider_02-ec4d88540f8ac1092c901d127cad4685.jpg"
                  style={{
                    width: "100%",
                    height: "30em",
                    backgroundSize: "cover",
                  }}
                  alt="New York"
                />
              </div>
            </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>

        <div
          className="modal fade portfolio-modal  "
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content " style={{ padding: "1rem" }}>
              <div className="modal-header text-center">
                <h4 className="modal-title " id="Th_Thong_bao">
                  GIỎ HÀNG CỦA BẠN
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div
                    className="row align-items-center bg-dark"
                    id="Th_Cua_hang"
                  />
                </div>
                <div
                  className="container-fluid btn text-left"
                  id="Th_Chuc_nang"
                ></div>

                <div className="container-fluid">
                  <div className="row" id="Th_Cha">
                    <div className="col-md-7 table-responsive">
                      <table className="table table-sm table-bordered table-striped table-hover">
                        <thead className="bg-primary text-white">
                          <tr className="text-center">
                            <th>Hình </th>
                            <th>Tên </th>
                            <th>Số lượng </th>

                            <th>Thành tiền</th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody className="text-white">{element}</tbody>
                        <tr>
                          <td>Thanh Tien</td>
                          <td></td>
                          <td></td>
                          <td>{total} $</td>
                          <td></td>
                        </tr>
                        <tbody id="Th_Danh_sach_Dien_thoai_Mua" />
                      </table>
                    </div>
                    <div className="col-md-5">
                      <h3 className="text-info">THÔNG TIN GIAO HÀNG</h3>
                      <form>
                        <div className="form-group">
                          <label htmlFor="Th_Ho_ten">Họ tên: </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Th_Ho_ten"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="Th_Email">Email: </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Th_Email"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="Th_Dien_thoai">Điện thoại: </label>
                          <input
                            type="text"
                            className="form-control"
                            id="Th_Dien_thoai"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="Th_Dia_chi">Địa chỉ Giao hàng:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="Th_Dia_chi"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="Th_Ngay_Giao_hang">
                            Ngày Giao hàng:
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="Th_Ngay_Giao_hang"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Mua tiếp
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  id="Th_Dong_y"
                >
                  Đồng ý
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
