import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../store";

const Form = () => {
  const { proposal_store } = useStores();

  return (
    <form>
      <input
        type="number"
        placeholder={proposal_store.amount}
        onChange={(e) => (proposal_store.amount = e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default observer(Form);
