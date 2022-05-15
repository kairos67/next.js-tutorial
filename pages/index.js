import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
//import { useEffect, useInsertionEffect } from "react/cjs/react.production.min";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios
    .get(API_URL)
    .then(res => {
      //handle success
      console.log(res.data);
      setList(res.data)
    })
    .catch(err => {
      // handle error
      console.log(err);
    })
    .then(() => {
      // always executed
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Kairos</title>
      </Head>
      <ItemList list={list} />
      Next.js is running{" "}
    </div>
  );
}
