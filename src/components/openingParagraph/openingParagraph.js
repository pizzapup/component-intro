/* eslint-disable no-unused-vars */
import styles from "./openingParagraph.css";
import { Dropdown } from "react-bootstrap";
function OpeningParagraph() {
  return (
    <div className="featured-holder">
      <div className="featured-top">
        <div className="featured-title">SHOP OUR FEATURED PRODUCTS</div>
        <div className="featured-shop-all">Shop All Products</div>
      </div>
      <div className="featured-products">
        <div className="gallery-card">
          <div className="card-image card-1"></div>
          <div className="card-bottom">
            <div className="card-title">Product Listing #1</div>
            <div className="card-description">
              holiday exclusive | online only
            </div>
            <div className="card-button-holder ">
              <div className="card-button">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-custom-1">
                    <div className="drop-button-text">
                      <div className="add-to-bag">Add to Bag</div>
                      <div className="price">$50</div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Dropdown Option 1
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Dropdown Option 2
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Dropdown Option 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-card">
          <div className="card-image card-2"></div>
          <div className="card-bottom">
            <div className="card-title">Product Listing #2</div>
            <div className="card-description">holiday exclusive</div>
            <div className="card-button-holder">
              <div className="card-button">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-custom-1">
                    <div className="drop-button-text">
                      <div className="add-to-bag">Add to Bag</div>
                      <div className="price">$55</div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Dropdown Option 1
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Dropdown Option 2
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Dropdown Option 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-card">
          <div className="card-image card-3"></div>
          <div className="card-bottom">
            <div className="card-title">Product Listing #3</div>
            <div className="card-description">holiday exclusive</div>
            <div className="card-button-holder">
              <div className="card-button">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-custom-1">
                    <div className="drop-button-text">
                      <div className="add-to-bag">Add to Bag</div>
                      <div className="price">$22</div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Dropdown Option 1
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Dropdown Option 2
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Dropdown Option 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-card">
          <div className="card-image card-4"></div>
          <div className="card-bottom">
            <div className="card-title">Product Listing #4</div>
            <div className="card-description">limited edition</div>
            <div className="card-button-holder">
              <div className="card-button">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-custom-1">
                    <div className="drop-button-text">
                      <div className="add-to-bag">Add to Bag</div>
                      <div className="price">$40</div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Dropdown Option 1
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Dropdown Option 2
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Dropdown Option 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-card">
          <div className="card-image card-5"></div>
          <div className="card-bottom">
            <div>
              <div className="card-title">Product Listing #5</div>
              <div className="card-description">
                cleanser + moisturizer + lip balm
              </div>
            </div>
            <div className="card-button-holder">
              <div className="card-button">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-custom-1">
                    <div className="drop-button-text">
                      <div className="add-to-bag">Add to Bag</div>
                      <div className="price">$55</div>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      Dropdown Option 1
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Dropdown Option 2
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Dropdown Option 3
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OpeningParagraph;
