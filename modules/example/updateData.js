module.exports = async () => {
  try {
    return { status: 204 };
  } catch (ex) { // eslint-disable-line
    throw ex;
  }
};
