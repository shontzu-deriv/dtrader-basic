import React from "react";
import AppStore from "./AppStore";
import ProposalStore from "./ProposalStore.js";

class RootStore {
  constructor() {
    this.app_store = new AppStore(this);
    this.proposal_store = new ProposalStore(this);
  }
}

let stores_context;

export const useStores = () => {
  if (!stores_context) {
    const root_store = new RootStore();

    stores_context = React.createContext({
      app_store: root_store.app_store,
      proposal_store: root_store.proposal_store,
    });
  }

  return React.useContext(stores_context);
};
