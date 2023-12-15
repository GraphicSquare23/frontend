import { CiCirclePlus } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import { SEOservices, socialMediaManagement } from "../constants/serviceDetail";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";

function ServiceDetail() {
  const { detail } = useParams();
  console.log(detail);
  const selectedServices = () => {
    switch (detail) {
      case "social-media-management":
        return socialMediaManagement;
      case "seo-services":
        return SEOservices;
      default:
        return socialMediaManagement;
    }
  };
  const navigate = useNavigate();
  const { title, subTitle, info, pricing, aboutUs, priceCardHeight } =
    selectedServices();

  const renderPricing = () => {
    const nData = pricing.map(({ name, detail,price }) => (
      <div className="card" style={{ height: priceCardHeight }}>
        <div className="card-body">
          <div className="card-title">
            <h3 className="heading">{name}</h3>
            <h4 className="price">
              <FaRupeeSign /> {price} / month
            </h4>
          </div>
          <ul className="list-unstyled li-space-lg">
            {detail.map((data) => (
              <li className="d-flex">
                <div>
                  <CiCirclePlus className="serviceIcon" />
                </div>
                <div className="card-body d-flex justify-content-start">
                  {data}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="quote">
          <button
            className="serviceDetailBtn"
            // onClick={() => navigate(`/services/${key}`)}
          >
            Request Quote
          </button>
        </div>
      </div>
    ));

    return nData;
  };

  const renderPageDescription = () => {
    const nData = info.map(({ title, description }) => (
      <div className="col-md-4 col-xs-12 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    ));

    return nData;
  };

  const renderQuotes = () => {
    return (
      <div className="quoteSection">
        <h4>
          I want to learn more about what you need. Let's discuss your
          requirements
        </h4>
        <p>
          Submit your project details via "Get In Touch." A team member will
          reach out to you shortly.
        </p>
        <div className="quote">
          <a
            className="serviceDetailBtn"
            onClick={() => navigate(`/`)}
            href="#contact"
          >
            Get In Touch
          </a>
        </div>
      </div>
    );
  };

  const renderAboutUS = () => {
    return (
      <div>
        <h4>{aboutUs.title}</h4>
        <p>{aboutUs.description}</p>
      </div>
    );
  };

  return (
    <div className="detailContainer">
      <h1 className="title">{title}</h1>
      {renderAboutUS()}
      <div className="subtitle">
        <h2>{subTitle}</h2>
        <div className="row mb-5 card-1">{renderPageDescription()}</div>
        <div className="row mb-5 cards-1 d-flex justify-content-center">
          {renderPricing()}
        </div>
        {renderQuotes()}
      </div>
    </div>
  );
}

export default ServiceDetail;
