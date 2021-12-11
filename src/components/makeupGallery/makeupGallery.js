/* eslint-disable no-unused-vars */
import styles from "./makeupGallery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MakeupGallery() {
  return (
    <div className="makeupGallery">
      <div className="info-banner">
        <span className="info-banner-title">Using Font Awesome Icons:</span>
        <div className="banner-text">
          <div className="font-awesome-banner">
            <div className="font-awesome-banner-icon">
              <FontAwesomeIcon icon="smile" />
            </div>
            <div className="font-awesome-banner-text">
              dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut
            </div>
          </div>
          <div className="font-awesome-banner">
            <div className="font-awesome-banner-icon">
              <FontAwesomeIcon icon="kiwi-bird" />
            </div>

            <div className="font-awesome-banner-text">
              dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut
            </div>
          </div>
          <div className="font-awesome-banner">
            <div className="font-awesome-banner-icon">
              <FontAwesomeIcon icon="bolt" />
            </div>

            <div className="font-awesome-banner-text">
              dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut
            </div>
          </div>
        </div>
      </div>
      {/* info-banner */}
      <div className="makeup-holder">
        <div className="makeup-holder2">
          <div className="makeup-info">
            <h2 className="makeup-title">Skin First.</h2>
            <p>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            </p>
            <div className="shop-button makeup-button">Shop All Skincare</div>
          </div>
        </div>

        <div className="product-gallery makeup-products">
          <div className="gallery-large-img makeup-large-img"></div>
          <div className="gallery-cards">
            <div className="gallery-card">
              <div className="card-image makeup-card-1"></div>
              <div className="card-bottom">
                <div className="card-title">Product Listing #1</div>
                <div className="card-description">
                  holiday exclusive | online only
                </div>
                <div className="card-button-holder">
                  <div className="card-button">
                    <div className="add-to-bag">Add to Bag</div>
                    <div className="price">$55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-card">
              <div className="card-image makeup-card-2"></div>
              <div className="card-bottom">
                <div className="card-title">Product Listing #1</div>
                <div className="card-description">
                  holiday exclusive | online only
                </div>
                <div className="card-button-holder">
                  <div className="card-button">
                    <div className="add-to-bag">Add to Bag</div>
                    <div className="price">$55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-card">
              <div className="card-image makeup-card-3"></div>
              <div className="card-bottom">
                <div className="card-title">Product Listing #1</div>
                <div className="card-description">
                  holiday exclusive | online only
                </div>
                <div className="card-button-holder">
                  <div className="card-button">
                    <div className="add-to-bag">Add to Bag</div>
                    <div className="price">$55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-card">
              <div className="card-image makeup-card-4"></div>
              <div className="card-bottom">
                <div className="card-title">Product Listing #1</div>
                <div className="card-description">
                  holiday exclusive | online only
                </div>
                <div className="card-button-holder">
                  <div className="card-button">
                    <div className="add-to-bag">Add to Bag</div>
                    <div className="price">$55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-card">
              <div className="card-image makeup-card-5"></div>
              <div className="card-bottom">
                <div className="card-title">Product Listing #1</div>
                <div className="card-description">
                  holiday exclusive | online only
                </div>
                <div className="card-button-holder">
                  <div className="card-button">
                    <div className="add-to-bag">Add to Bag</div>
                    <div className="price">$55</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery-card">
              <div className="card-image makeup-card-6"></div>
              <div className="card-bottom">
                <div className="card-title">Product Listing #1</div>
                <div className="card-description">
                  holiday exclusive | online only
                </div>
                <div className="card-button-holder">
                  <div className="card-button">
                    <div className="add-to-bag">Add to Bag</div>
                    <div className="price">$55</div>
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
export default MakeupGallery;
