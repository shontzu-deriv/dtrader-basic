//With ticks history you are able to get a collection of past tick times and prices.
import DerivAPIBasic from "https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic";

const app_id = 35139; // Replace with your app_id or leave as 1089 for testing.
const connection = new WebSocket(
  `wss://ws.binaryws.com/websockets/v3?app_id=${app_id}`
);
const api = new DerivAPIBasic({ connection });

//todo: this should come from ui -> mobx store and not hardcoded
const ticks_history_request = {
  ticks_history: "R_50",
  adjust_start_time: 1,
  count: 10,
  end: "latest",
  start: 1,
  style: "ticks",
};

const ticks_request = {
  ...ticks_history_request,
  subscribe: 1,
};

const tickSubscriber = () => api.subscribe(ticks_request);

const ticksHistoryResponse = async (res) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    console.log("Error : ", data.error.message);
    connection.removeEventListener("message", ticksHistoryResponse, false);
    await api.disconnect();
  }
  if (data.msg_type === "history") {
    console.log(data.history);
  }
  connection.removeEventListener("message", ticksHistoryResponse, false);
};

const ticksResponse = async (res) => {
  const data = JSON.parse(res.data);
  // This example returns an object with a selected amount of past ticks.
  if (data.error !== undefined) {
    console.log("Error : ", data.error.message);
    connection.removeEventListener("message", ticksResponse, false);
    await api.disconnect();
  }
  // Allows you to monitor ticks.
  if (data.msg_type === "tick") {
    console.log(data.tick.quote);
    return data.tick.quote;
  }
};

const subscribeTicks = async () => {
  connection.addEventListener("message", ticksResponse);
};

const unsubscribeTicks = async () => {
  connection.removeEventListener("message", ticksResponse, false);
  await tickSubscriber().unsubscribe();
  console.log("unsubscribed");
};

const getTicksHistory = async () => {
  connection.addEventListener("message", ticksHistoryResponse);
  await api.ticksHistory(ticks_history_request);
};

export { subscribeTicks, unsubscribeTicks, getTicksHistory };
