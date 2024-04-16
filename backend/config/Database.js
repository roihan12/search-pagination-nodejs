import { Sequelize } from "sequelize";

const db = new Sequelize("search_paginate", "root", "root123", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
