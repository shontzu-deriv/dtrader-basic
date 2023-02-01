import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../store";

const Test = () => {
  const { proposal_store } = useStores();

  return (
    <div>
      proposal: {proposal_store.proposal}
      subscribe: {proposal_store.subscribe}
      amount: {proposal_store.amount}
      basis: {proposal_store.basis}
      contract_type: {proposal_store.contract_type}
      duration: {proposal_store.duration}
      duration_unit: {proposal_store.duration_unit}
      symbol: {proposal_store.symbol}
      barrier: {proposal_store.barrier}
    </div>
  );
};

export default observer(Test);
