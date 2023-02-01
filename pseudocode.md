pseudocode (no mobx):

1. utils folder/commands.js file
2. export object, import and destructure in relevant file

pseudocode (mobx):

1. useWebsocket
2. mobx will call useWebsocket
3. proposal_request are all sent from mobx store not this file

```
const proposal = {
  proposal: proposal_store.proposal,
  subscribe: proposal_store.subscribe,
  amount: proposal_store.amount,
  basis: proposal_store.basis,
  contract_type: proposal_store.contract_type,
  duration: proposal_store.duration,
  duration_unit: proposal_store.duration_unit,
  symbol: proposal_store.symbol,
  barrier: proposal_store.barrier,
  proposal: 1,
}
```
