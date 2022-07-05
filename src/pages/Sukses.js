import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constant";

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        // di mapping karena jsonPlaceholder tidak ada fitur
        // untuk menhapus semua data sekaligus
        // sehingga perlu menggunakan mapping untuk menghapus
        // satu persatu data dengan memanggil semua data keranjang terlebih dahulu
        keranjangs.map(function (item) {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }
  render() {
    return (
      <div className="mt-4 text-center">
        <h4>Sukses Pesanan</h4>
        <p>Terima Kasih Sudah Memesan!</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>
    );
  }
}
