import { action, decorate, observable } from "mobx";

export default class ProposalStore {
  proposal = 1;
  subscribe = 1;
  amount = 10;
  basis = "payout";
  contract_type = "CALL";
  duration = 1;
  duration_unit = "m";
  symbol = "R_100";
  barrier = "+0.1";

  setProposal(proposal) {
    this.proposal = proposal;
  }
}

decorate(ProposalStore, {
  proposal: observable,
  subscribe: observable,
  amount: observable,
  basis: observable,
  contract_type: observable,
  duration: observable,
  duration_unit: observable,
  symbol: observable,
  barrier: observable,
  setProposal: action,
});
