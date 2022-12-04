export const calreducer = (state = { num: 0, value: 1 }, action) => {
  const payload = action.payload ?? 0;
  switch (action.type) {
    case "ADD":
      return { num: Number(state.num) + Number(payload) };
    case "MINUS":
      return { num: Number(state.num) - Number(payload) };
    case "TIMES":
      return { num: Number(state.num) * Number(payload) };
    case "DEVIDE":
      return { num: Number(state.num) / Number(payload) };
    case "RESET":
      return { num: 0 };
    default:
      return state;
  }
};
