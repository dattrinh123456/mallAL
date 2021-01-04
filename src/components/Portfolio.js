import React, { Component } from "react";
import axios from "axios";
export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentpage: 1,
      numberpage: 0,
      itemPerPage: 6,
      listOfPage: [],
    };
  }

  componentDidMount() {
    let list = [];
    axios
      .get(
        "https://dulieu2-anhlien.herokuapp.com/Ma_so_Xu_ly=DOC_DANH_SACH_DIEN_THOAI"
      )
      .then((data) => {
        console.log(this.props.valueSearch);
        this.setState({
          products: data.data,
          numberpage: Math.ceil(data.data.length / this.state.itemPerPage),
        });
        // console.log(this.state.numberpage)

        if (this.state.numberpage !== 0) {
          for (var i = 1; i <= this.state.numberpage; i++) {
            list.push(i);
          }
          this.setState({ listOfPage: list });
        }
      });
  }

  changeIndex = (event) => {
    let { currentpage, numberpage } = this.state;
    console.log(numberpage);
    if (currentpage < numberpage) {
      currentpage = currentpage + 1;
      this.setState({
        currentpage,
      });
    }
  };
  changeIndex1 = (event) => {
    let { currentpage, numberpage } = this.state;
    if (currentpage > 1) {
      currentpage = currentpage - 1;
      this.setState({
        currentpage,
      });
    }
  };
  changePage = (index) => {
    console.log(index);
    this.setState({
      currentpage: index,
    });
  };

  getDetailOfProduct = (data) => {
    this.props.sendDataToApp(data)
  };

  render() {
    let { currentpage, products, itemPerPage, listOfPage } = this.state;

    let startpage = (currentpage - 1) * itemPerPage;
    let endpage = currentpage * itemPerPage;

    const page = listOfPage.map((index) => (
      <li className="page-item" onClick={() => this.changePage(index)}>
        <a
          className="page-link"
          style={{ backgroundColor: index === currentpage ? "pink" : "" }}
        >
          {index}
        </a>
      </li>
    ));

    const element = products.map((product, index) => {
      const src = `https://media2-anhlien.herokuapp.com/${product.Ma_so}.png`;
      if (this.props.valueSearch) {
        if (
          product.Ten.toLowerCase().includes(
            this.props.valueSearch.toLowerCase()
          )
        ) {
          return (
            <div
              className="col-lg-4 col-sm-6 mb-4 "
              style={{ height: "30rem" }}
            >
              <div>
                <div className="portfolio-item text-center  border rounded ">
                  <a className="portfolio-link">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i
                          class="fa fa-book fa-2x "
                          aria-hidden="true"
                          data-toggle="modal"
                          href="#portfolioModal1"
                        ></i>
                        <button onClick={()=>{this.getDetailOfProduct(product)}}>
                          <i
                            class="fa fa-shopping-cart fa-2x ml-5"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                    <img className="img-fluid" src={src} alt="" />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">
                      {product.Ten}
                    </div>
                    <div className="portfolio-caption-subheading text-muted">
                      Giá :{product.Don_gia_Ban}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="portfolio-modal modal fade"
                id="portfolioModal1"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                      <img src="assets/img/close-icon.svg" alt="Close modal" />
                    </div>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-8">
                          <div className="modal-body">
                            {/* Project Details Go Here*/}
                            <h2 className="text-uppercase">{product.Ten}</h2>
                            <p className="item-intro text-muted"></p>
                            <img
                              className="img-fluid d-block mx-auto"
                              src={src}
                              alt=""
                            />

                            <ul className="list-inline">
                              <li>Loai: {product.Ma_so}</li>
                              <li>Gia: {product.Don_gia_Ban}</li>
                            </ul>
                            <button
                              className="btn btn-primary"
                              data-dismiss="modal"
                              type="button"
                            >
                              <i className="fas fa-times mr-1" />
                              Close Project
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      } else {
        if (index >= startpage && index < endpage) {
          return (
            <div
              className="col-lg-4 col-sm-6 mb-4 "
              style={{ height: "30rem" }}
            >
              <div>
                <div className="portfolio-item text-center  border rounded  ">
                  <a className="portfolio-link">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i
                          class="fa fa-book fa-2x "
                          aria-hidden="true"
                          data-toggle="modal"
                          href="#portfolioModal1"
                        ></i>
                        <button onClick={()=>{this.getDetailOfProduct(product)}}>
                          <i
                            class="fa fa-shopping-cart fa-2x ml-5"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                    <img className="img-fluid" src={src} alt="" />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">
                      {product.Ten}
                    </div>
                    <div className="portfolio-caption-subheading text-muted">
                      Giá :{product.Don_gia_Ban}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="portfolio-modal modal fade"
                id="portfolioModal1"
                tabIndex={-1}
                role="dialog"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal">
                      <img src="assets/img/close-icon.svg" alt="Close modal" />
                    </div>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-8">
                          <div className="modal-body">
                            {/* Project Details Go Here*/}
                            <h2 className="text-uppercase">{product.Ten}</h2>
                            <p className="item-intro text-muted"></p>
                            <img
                              className="img-fluid d-block mx-auto"
                              src={src}
                              alt=""
                            />

                            <ul className="list-inline">
                              <li>Loai: {product.Ma_so}</li>
                              <li>Gia: {product.Don_gia_Ban}</li>
                            </ul>
                            <button
                              className="btn btn-primary"
                              data-dismiss="modal"
                              type="button"
                            >
                              <i className="fas fa-times mr-1" />
                              Close Project
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
    });
    return (
      <div>
        {/* Products*/}
        <section className="page-section " id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>

            {/* Single Product */}
            <div className="row">{element}</div>
          </div>
        </section>

        {/* Modal 1*/}

        <div className="container text-right ">
          <div className="row">
            <nav aria-label="Page navigation ">
              <ul className="pagination ">
                <li className="page-item ">
                  <button
                    className="page-link"
                    aria-label="Previous"
                    onClick={this.changeIndex1}
                  >
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </button>
                </li>
                {page}

                <li className="page-item">
                  <button
                    className="page-link"
                    aria-label="Next"
                    onClick={this.changeIndex}
                  >
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
