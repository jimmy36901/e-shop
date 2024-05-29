import React, { useState, useEffect } from "react";
import Helmen from "./Helmen";
import { Button } from "@/components/ui/button";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/Style/HomeView.css";
import { motion } from "framer-motion";
import Service from "./Service/Service";
import ProductList from "./UI/ProductList";
import ProductData from "@/assets/data/ProductData";

const HomeView = () => {
  const [data, setData] = useState(ProductData);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredCategory = ProductData.filter(
      (item) => item.Product_category === "Couch"
    );

    setData(filteredCategory);
  }, []);
  return (
    <Helmen title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row className="justify-center align-items-center">
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2 className="hero_title">
                  Make your interior More Minimalistic & Modern
                </h2>
                <p className="hero_text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate, repudiandae necessitatibus consectetur iusto quia
                  quo laborum est iste eligendi nulla ipsam. Similique quas
                  totam amet maiores officia, vitae quisquam animi?
                </p>
                <div className="text-center">
                  <Button className="buy_btn bg-dark ">SHOP NOW</Button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src="image/logoMainPic.png" alt="" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Service />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={data} />
          </Row>
        </Container>
      </section>
    </Helmen>
  );
};

export default HomeView;
