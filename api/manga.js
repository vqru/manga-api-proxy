module.exports = async (req, res) => {
  const { title } = req.query;
  res.status(200).json({ result: `You searched for: ${title}` });
};
