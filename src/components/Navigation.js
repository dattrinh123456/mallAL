import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
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
                  <a className="nav-link " data-toggle="modal" data-target="#modelId">
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

        <div className="modal fade portfolio-modal  " id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true" >
  <div className="modal-dialog " role="document">
    <div className="modal-content " style ={{padding:"1rem"}}>
      <div className="modal-header text-center">
        <h4 className="modal-title "id="Th_Thong_bao">
     
            GIỎ HÀNG CỦA BẠN
          
        </h4>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="container-fluid">
          <div className="row align-items-center bg-dark" id="Th_Cua_hang" />
        </div>
        <div className="container-fluid btn text-left" id="Th_Chuc_nang">
        
          {/* <button type="button" className="btn btn-danger" id="Th_Bo_qua">
            Xóa Đơn hàng
          </button> */}
        
        </div>
        
         
        
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
                <tbody className="text-white">
                  <tr className="text-center">
                    <td><img src="data:image/jpeg;base64,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"/> </td>
                    <td>Samsung </td>
                    <td>1  <button><i class="fa fa-plus" aria-hidden="true"></i></button> <button><i class="fa fa-minus" aria-hidden="true"></i></button> </td>
                  
                    <td>10000000    </td>
                    <td> <i class="fa fa-trash" aria-hidden="true"></i> </td>
                  </tr>
                </tbody>
                <tr>
                  <td>Thanh Tien</td>
                  <td></td>
                  <td></td>
                  <td></td>
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
                  <input type="text" className="form-control" id="Th_Ho_ten" />
                </div>
                <div className="form-group">
                  <label htmlFor="Th_Email">Email: </label>
                  <input type="text" className="form-control" id="Th_Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="Th_Dien_thoai">Điện thoại: </label>
                  <input type="text" className="form-control" id="Th_Dien_thoai" />
                </div>
                <div className="form-group">
                  <label htmlFor="Th_Dia_chi">Địa chỉ Giao hàng:</label>
                  <input type="text" className="form-control" id="Th_Dia_chi" />
                </div>
                <div className="form-group">
                  <label htmlFor="Th_Ngay_Giao_hang">Ngày Giao hàng:</label>
                  <input type="date" className="form-control" id="Th_Ngay_Giao_hang" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Mua tiếp</button>
        <button type="button" className="btn btn-success" id="Th_Dong_y">
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
