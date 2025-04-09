export default async (req, res) => {
  const { title } = req.query;
  const url = `https://api.mangadex.org/manga?title=${encodeURIComponent(title)}&limit=5&includes[]=cover_art`;
  const result = await fetch(url);
  const data = await result.json();
  res.status(200).json(data);
};
