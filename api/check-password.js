// This file lives on Vercel's secure server
export default function handler(req, res) {
  // We parse the data sent from the browser
  const body = JSON.parse(req.body);
  const { password } = body;

  // The password is kept safely here on the server
  if (password === 'havi0208') {
    res.status(200).json({ valid: true });
  } else {
    res.status(401).json({ valid: false });
  }
}
