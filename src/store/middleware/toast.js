const toast = (state) => (next) => (action) => {
  if (action.type === "error")
    console.log(`Toastify Error! ${action.payload.message}`);
  else next(action);
};

export default toast;
