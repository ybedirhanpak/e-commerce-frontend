import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProduct } from '../../redux/product/actions';

class ProductTab extends Component {
  constructor() {
    super();
    this.state = {
      reviewerName: "",
      reviewerMail: "",
      reviewContent: "",
      rating: 0,
      currentBlock: 3
    };
    this.setValue = this.setValue.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.showReviews = this.showReviews.bind(this);
    this.setStars = this.setStars.bind(this);
    this.handleLeftReview = this.handleLeftReview.bind(this);
    this.handleRightReview = this.handleRightReview.bind(this);

  }
  
  setStars = (index) => {
    let div;
    let children = [];
    for (let i = 0; i < 1; i++) {

      for (let j = 0; j < index; j++) {
        children.push(<i className="fa fa-star"></i>)
      }
      for (let k = index; k < 5; k++) {
        children.push(<i className="fa fa-star-o empty"></i>)
      }

    }
    return children;

  }

  showReviews = () => {
    let review = this.props.product.reviews;
    let element = [];
    for (let i = this.state.currentBlock - 3; i < this.state.currentBlock; i++) {
      if(i<0){
        i=0;
      }

      if(review === undefined || review.length<=i){
        break;
      }
      
      element.push(<li>
        <div className="review-heading">
          <h5 className="name">{review[i].userFullName}</h5>
          <p className="date">{review[i].commentTime}</p>
          <div className="review-rating">
            {this.setStars(review[i].numberOfStars)}
          </div>
        </div>
        <div className="review-body">
          <p>
            {review[i].reviewContent}
          </p>
        </div>
      </li>)
    }
    
    return element;
  }

  handleRightReview = () => {
    let newBlock = this.state.currentBlock + 3;
    if (newBlock > this.props.product.reviews.length) {
      newBlock = 3;
    }
    this.setState({ currentBlock: newBlock })
  }

  handleLeftReview = () => {
    let newBlock = this.state.currentBlock - 3;
    if (newBlock <= 0) {
      newBlock = this.props.product.reviews.length;
    }
    this.setState({ currentBlock: newBlock });
  }

  setValue = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  submitReview = (event) => {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();
    var dateString = date + "-" + (month + 1) + "-" + year;
    const review = {
      userFullName: this.state.reviewerName,
      userMail: this.state.reviewerMail,
      reviewContent: this.state.reviewContent,
      commentTime: dateString,
      numberOfStars: this.state.rating
    };
    const product = {
      ...this.props.product,
      reviews: [...this.props.product.reviews, review]
    };
    this.props.updateProduct(this.props.product.id, product);
    event.preventDefault();
  }

  render() {
    return (
      <div id="product-tab">
        {/* Navigation */}
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

        {/* Content */}
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
              {/* Rating */}
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
              {/* Reviews */}
              <div className="col-md-6">
                <div id="reviews">
                  <ul className="reviews">
                    {this.showReviews()}
                  </ul>
                  <ul className="reviews-pagination">
                    <li>
                      <a id="left-review" onClick={this.handleLeftReview}>
                        <i className="fa fa-angle-left" />
                      </a>
                    </li>
                    <li>
                      <a id="right-review" onClick={this.handleRightReview}>
                        <i className="fa fa-angle-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Review Form */}
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
                          onClick={this.setValue}
                          id="star4"
                          name="rating"
                          value="4"
                          type="radio"
                        />
                        <label for="star4" />
                        <input
                          onClick={this.setValue}
                          id="star3"
                          name="rating"
                          value="3"
                          type="radio"
                        />
                        <label for="star3" />
                        <input
                          onClick={this.setValue}
                          id="star2"
                          name="rating"
                          value="2"
                          type="radio"
                        />
                        <label for="star2" />
                        <input
                          onClick={this.setValue}
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
  return{
    currentProduct: state.product.currentProduct
  };
};

const mapDispatchToProps = {
  updateProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTab);
