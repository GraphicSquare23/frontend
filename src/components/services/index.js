import { CgEditBlackPoint } from "react-icons/cg";
import { SERVICE_LIST } from "../constants/services";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const handleListing = () => {
    const nData = SERVICE_LIST.map(({ name, service, key }) => (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <ul className="list-unstyled li-space-lg">
            {service.map((l) => (
              <li className="d-flex">
                <CgEditBlackPoint className="serviceIcon" />
                <div className="flex-grow-1">{l}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="quote">
          <button
            className="serviceDetailBtn"
            onClick={() => navigate(`/services/${key}`)}
          >
            Details
          </button>
        </div>
      </div>
    ));

    return nData;
  };
  return (
    <div id="services" class="cards-1">
      <div class="container">
        <div class="col-12 text-center aos-init aos-animate" data-aos="fade-up">
          <h2 class="heading font-weight-bold mb-3">Our Services</h2>
        </div>
        <div class="row">
          <div class="col-lg-12">{handleListing()}</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
