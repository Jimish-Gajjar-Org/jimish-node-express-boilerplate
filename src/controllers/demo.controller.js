const getDemo = async (req, res) => {
  res.status(400).send({ message: 'Demo Is Called' });
};

export default {
  getDemo,
};