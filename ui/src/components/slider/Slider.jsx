import React from "react";
import './slider.scss'
const Slider = () => {
  return (
    <div className="slider">
      <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
         <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
      </div>
      <div className="carousel-inner">
      <div className="carousel-item active img-tab">
          <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Online-Shopping-AD-Banner-Design-in-Photoshop-1180x664.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://img.freepik.com/premium-psd/summer-fashion-sale-social-media-web-banner-flyer-facebook-cover-design-template_220443-387.jpg?w=2000" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://png.pngtree.com/png-clipart/20220403/original/pngtree-digital-electronic-poster-banner-png-image_7492570.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://i.ytimg.com/vi/UBgDqvqwx_Y/maxresdefault.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default Slider;
