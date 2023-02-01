import { decorate, observable } from "mobx";
import React from "react";

export default class AppStore {
  client_token = "";
  client_id = "";
  email = "";
  currency = "USD";
}

decorate(AppStore, {
  client_token: observable,
  client_id: observable,
  email: observable,
  currency: observable,
});
