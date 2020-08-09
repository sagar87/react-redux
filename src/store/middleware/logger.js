const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", param);
  next(action);
};

// Currying
// N
export default logger;
