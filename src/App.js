import "./styles.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import { CacheStorage } from "./utils/customCache";
import { run } from "./utils/scripts.js";

export default function App() {
  // run();
  // return <Counter />;
  const { get, put, getCache } = CacheStorage();
  put("key1", 1);
  put("key2", 2);
  put("key3", 3);
  put("key4", 4);
  console.log(get("key1"));
  put("key5", 5);
  // Limit exceeds
  put("key6", 6);

  console.log(getCache());
  // return <div className="box"></div>;
  return (
    <div className="parent">
      <div className="child"></div>
    </div>
  );
}
