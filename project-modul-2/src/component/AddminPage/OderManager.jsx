import React from "react";


function OderManager() {
  return (
    <div>
      <div className="card-header">
        <h3>Đơn Đặt Hàng</h3>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Mã số</th>
                <th>Ngày</th>
                <th>Trạng thái</th>
                <th>Tổng</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody className="order_product">
              <tr>
                <td>#1234</td>
                <td>March 15, 2020</td>
                <td>Processing</td>
                <td>$78.00 for 1 item</td>
              </tr>
              <tr>
                <td>#2366</td>
                <td>June 20, 2020</td>
                <td>Completed</td>
                <td>$81.00 for 1 item</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OderManager;
