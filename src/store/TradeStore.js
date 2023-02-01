// this store manages the state of the form to place a trade (market, asset, contract, stake, payout, ticks, etc)

import { observable, decorate, action } from "mobx";

export default class TradeStore {
  market = ""; // forex, derived, cryptocurrency
  asset = ""; // EURUSD, VOL75, ETH
  contract_category = ""; // touchnotouch, risefall, oddeven, matchesdiffers
  contract_type = ""; // touch, rise, odd, differs
  stake = ""; // 1 to 10
  payout = ""; // 1 to 10
  tick = ""; // 1 to 10

  setMarket(market) {
    this.market = market;
  }

  setAsset(asset) {
    this.asset = asset;
  }

  setContractCategory(contract_category) {
    this.contract_category = contract_category;
  }

  setContractType(contract_type) {
    this.contract_type = contract_type;
  }

  setStake(stake) {
    this.stake = stake;
  }

  setPayout(payout) {
    this.payout = payout;
  }
}

decorate(TradeStore, {
  market: observable,
  asset: observable,
  contract_category: observable,
  contract_type: observable,
  setMarket: action,
  setAsset: action,
  setContract_category: action,
  setContract_type: action,
  setStake: action,
  setPayout: action,
  setTick: action,
});
