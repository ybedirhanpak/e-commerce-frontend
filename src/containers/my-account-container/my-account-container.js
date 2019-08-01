import React, { Component } from "react";

//Redux
import { connect } from "react-redux";

//Route
import { Redirect, Link, Route } from "react-router-dom";

//changepassword
import ChangePassword from "../../components/change-password/change-password";
import OrdersPage from "../../components/orders-page/orders-page";
import MyAdress from "../../components/My-adress/my-adress";
import AddAdress from "../../components/Add-adress/add-adress";

class MyAccountContainer extends Component {
  render() {
    if (this.props.user.currentUser) {
      return (
        <div class="container" style={{ paddingTop: 20 }}>
          <div class="row">
            <div class="col-sm-3 col-md-3">
              <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                      >
                        <i className="fa fa-user-circle" />
                        {" Username"}
                      </a>
                    </h4>
                  </div>
                  <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="panel-body">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/account/orders">
                                <i class="fa fa-shopping-bag" />
                                {" Orders"}
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/account/addresses">
                                <i class="fa fa-map" />
                                {" Addresses"}
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/account/coupons">
                                <i class="fa fa-ticket" />
                                {" Coupons"}
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                      >
                        <i className="fa fa-cog" />
                        Settings
                      </a>
                    </h4>
                  </div>
                  <div id="collapseTwo" class="panel-collapse collapse">
                    <div class="panel-body">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/account/change-password">
                                <i class="fa fa-key" />
                                {" Change Password"}
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                      >
                        <i className="fa fa-info-circle" />
                        {"Others"}
                      </a>
                    </h4>
                  </div>
                  <div id="collapseThree" class="panel-collapse collapse">
                    <div class="panel-body">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/account/help">
                                <i class="fa fa-question-circle" />
                                {" Help"}
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                        <tbody>
                          <tr>
                            <td>
                              <Link to="/account/logout">
                                <i class="fa fa-sign-out" />
                                {" Logout"}
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-9 col-md-9">
              <div class="well">
                <Route path="/account/orders" render={() => <OrdersPage />} />
                <Route path="/account/addresses" render={() => <MyAdress />} />
                <Route
                  path="/account/addAddress"
                  render={() => <AddAdress />}
                />
                <Route
                  path="/account/coupons"
                  render={() => <h1>Coupons</h1>}
                />
                <Route
                  path="/account/change-password"
                  render={() => <ChangePassword />}
                />
                <Route path="/account/help" render={() => <h1>Help</h1>} />
                <Route path="/account/logout" render={() => <h1>Logout</h1>} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccountContainer);
