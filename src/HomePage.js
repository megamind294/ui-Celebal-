import React from "react";
import "./homePage.css";
import logo from "./image/pic.svg";
import group from "./image/Group 1942.svg";

export const HomePage = () => {
  return (
    <>
      <div className="container-homePage">
        <div className="head">
          <h2>Azure DevOps</h2>
        </div>
        <div className="para">
          <p className="para-1">
            We, at Celebal Technologies, use azure DevOps and their amazingly
            configured tools to provide the finest services for our clients
            using edge cut technology.
          </p>
        </div>
        <div className="center">
          <img className="logo-1" src={logo} alt="Azure logo" />
        </div>
      </div>
      <div className="Rectangle">
        <h1>Reason of Choosing Celebal Technology</h1>
      </div>
      <div>

        <div className="vector">
          <div>
            <div>
              <img className="cust" src={group} alt="thr-1" />
              <h5>DevOps Practices</h5>
              <h6>Celebal Technologies has successfully applied DevOps practices to large and small engagements and also to a variety of enterprise products. We have defined career paths for DevOps and Agile practitioners</h6>
            </div>
          </div>
          <div>
            <img className="cust" src={group} alt="thr-1" />
            <h5>Capabilities</h5>
            <h6>Celebal brings together all of the capabilities needed to implement Continuous Delivery for our clients. Celebal has an extensive suite of assets for Azure DevOps, which includes maturity assessments, connectors for common tool choices and methodology frameworks for all aspects of the adoption</h6>
          </div>
          <div>
            <img className="cust" src={group} alt="thr-1" />
            <h5>Continous Delivery</h5>
            <h6>Azure DevOps is continuous Delivery tooling platform provides DevOps capabilities and is provisioned from a web interface. Azure Devops’s tools are preconfigured, providing a capability that clients can leverage to reduce the cost of their DevOps infrastructure and increase the speed of adoption.</h6>
          </div>
          <div>
            <img className="cust" src={group} alt="thr-1" />
            <h5>Azure Cloud Platform</h5>
            <h6>DevOps can be enabled by the Azure Cloud Platform, which gives you the power, scalability and flexibility to manage your organization’s workloads simply and securely on demand, at speed and from a single point.</h6>
          </div>

        </div>
      </div>
      <div className="benefits">
        <h2>Benefits of Devops</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <h5>Lower risk through automated quality Reduced manual overhead </h5>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <h5>Increased throughput Dynamic infrastructure with automated scaling</h5>
            </div>
          </div>

          <div className="colum">
            <div className="car">
              <h5>Increased scalability and flexibility</h5>
            </div>
          </div>

          <div className="colu">
            <div className="ca">
              <h5>Reduced lag for provisioning of computing resources</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
