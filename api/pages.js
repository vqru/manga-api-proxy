export default async (req, res) => {
  const { id } = req.query;
  const result = await fetch(`https://api.mangadex.org/at-home/server/${id}`);
  const { baseUrl, chapter } = await result.json();
  const images = chapter.data.map(img => `${baseUrl}/data/${chapter.hash}/${img}`);
  res.status(200).json({ images });
};
