import React, { Component } from "react";
import { connect } from "react-redux";

import { updateProduct } from "../../redux/product/actions";
import { tsExpressionWithTypeArguments } from "@babel/types";

class ProductTab extends Component {
  constructor() {
    super();
    this.state = {
      reviewerName: "",
      reviewerMail: "",
      reviewContent: "",
      rating: 0
    };

    this.setValue = this.setValue.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  setValue(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  submitReview() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var dateString = date + "-" + (month + 1) + "-" + year;
    const review = {
      userFullName: this.state.reviewerName,
      userMail: this.state.reviewerMail,
      reviewContent: this.state.reviewContent,
      numberOfStars: this.state.rating,
      commentTime: dateString
    };
    const product = {
      ...this.props.product,
      reviews: [...this.props.product.reviews, review]
    };
    this.props.updateProduct(this.props.product.id, product);
  }

  render() {
    console.log(this.state.rating);
    return (
      <div id="product-tab">
        <ul className="tab-nav">
          <li className="active">
            <a data-toggle="tab" href="#tab1">
              Description
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#tab2">
              Details
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#tab3">
              Reviews (3)
            </a>
          </li>
        </ul>

        <div className="tab-content">
          {/* Description */}
          <div id="tab1" className="tab-pane fade in active">
            <div className="row">
              <div className="col-md-12">
                <p>CONTENT</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div id="tab2" className="tab-pane fade in">
            <div className="row">
              <div className="col-md-12">
                <p>CONTENT</p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div id="tab3" className="tab-pane fade in">
            <div className="row">
              <div className="col-md-3">
                <div id="rating">
                  <div className="rating-avg">
                    <span>4.5</span>
                    <div className="rating-stars">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                  <ul className="rating">
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="rating-progress">
                        <div style={{ width: "80%" }} />
                      </div>
                      <span className="sum">3</span>
                    </li>
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="rating-progress">
                        <div style={{ width: "60%" }} />
                      </div>
                      <span className="sum">2</span>
                    </li>
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="rating-progress">
                        <div />
                      </div>
                      <span className="sum">0</span>
                    </li>
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="rating-progress">
                        <div />
                      </div>
                      <span className="sum">0</span>
                    </li>
                    <li>
                      <div className="rating-stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <div className="rating-progress">
                        <div />
                      </div>
                      <span className="sum">0</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div id="reviews">
                  <ul className="reviews">
                    <li>
                      <div className="review-heading">
                        <h5 className="name">John</h5>
                        <p className="date">27 DEC 2018, 8:0 PM</p>
                        <div className="review-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                      </div>
                      <div className="review-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="review-heading">
                        <h5 className="name">John</h5>
                        <p className="date">27 DEC 2018, 8:0 PM</p>
                        <div className="review-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                      </div>
                      <div className="review-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="review-heading">
                        <h5 className="name">John</h5>
                        <p className="date">27 DEC 2018, 8:0 PM</p>
                        <div className="review-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o empty" />
                        </div>
                      </div>
                      <div className="review-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                    </li>
                  </ul>
                  <ul className="reviews-pagination">
                    <li className="active">1</li>
                    <li>
                      <a href="2">2</a>
                    </li>
                    <li>
                      <a href="3">3</a>
                    </li>
                    <li>
                      <a href="4">4</a>
                    </li>
                    <li>
                      <a href="right">
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div id="review-form">
                  <form className="review-form">
                    <input
                      name="reviewerName"
                      onChange={this.setValue}
                      value={this.state.reviewerName}
                      className="input"
                      type="text"
                      placeholder="Your Name"
                    />
                    <input
                      value={this.state.reviewerMail}
                      onChange={this.setValue}
                      name="reviewerMail"
                      className="input"
                      type="email"
                      placeholder="Your Email"
                    />
                    <textarea
                      value={this.state.reviewContent}
                      onChange={this.setValue}
                      name="reviewContent"
                      className="input"
                      placeholder="Your Review"
                    />
                    <div className="input-rating">
                      <span>Your Rating: </span>
                      <div className="stars">
                        <input
                          onClick={this.setValue}
                          id="star5"
                          name="rating"
                          value="5"
                          type="radio"
                        />
                        <label for="star5" />
                        <input
                          id="star4"
                          name="rating"
                          value="4"
                          type="radio"
                        />
                        <label for="star4" />
                        <input
                          id="star3"
                          name="rating"
                          value="3"
                          type="radio"
                        />
                        <label for="star3" />
                        <input
                          id="star2"
                          name="rating"
                          value="2"
                          type="radio"
                        />
                        <label for="star2" />
                        <input
                          id="star1"
                          name="rating"
                          value="1"
                          type="radio"
                        />
                        <label for="star1" />
                      </div>
                    </div>
                    <button className="primary-btn" onClick={this.submitReview}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product.currentProduct
  };
};

const mapDispatchToProps = {
  updateProduct
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTab);
