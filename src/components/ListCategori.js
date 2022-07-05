import React, { Component } from "react";
import "../index.css";
import { Col, ListGroup } from "react-bootstrap";
import { API_URL } from "../utils/constant";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan") {
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  } else if (nama === "Minuman") {
    return <FontAwesomeIcon icon={faCoffee} className="mr-2" />;
  } else if (nama === "Cemilan") {
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;
  } else {
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  }
};

export default class ListCategori extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        // console.log("Response: ", res);
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoriYangDipilih } = this.props;
    // console.log(this.state.categories);
    return (
      <Col md={2} className="mt-3">
        <h2  className="text-center">
          <strong>Daftar Categori</strong>
        </h2>
        <hr />
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={
                  categoriYangDipilih === category.nama && "category-aktif"
                }
                style={{ cursor: "pointer" }}
              >
                <h5>
                  <Icon nama={category.nama} /> {category.nama}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
