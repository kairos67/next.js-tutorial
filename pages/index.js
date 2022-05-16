import Axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
//import { useEffect, useInsertionEffect } from "react/cjs/react.production.min";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    Axios
      .get(API_URL)
      .then(res => {
        //handle success
        console.log(res.data);
        setList(res.data);
        setIsLoading(false);
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
        <meta name="description" content="Kairos is Home"></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" styles={{ paddingTop: 40 }}>
            베스트상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" styles={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>)}
      <Divider />
      Next.js is running{" "}
      <Divider />
    </div>
  );
}
