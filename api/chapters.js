export default async (req, res) => {
  const { id } = req.query;
  const result = await fetch(`https://api.mangadex.org/chapter?manga=${id}&translatedLanguage[]=en&order[chapter]=asc`);
  const data = await result.json();
  res.status(200).json(data);
};
