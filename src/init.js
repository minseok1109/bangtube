import "./models/Video.js";
import "./db.js";
import app from "./server.js";

const PORT = 4000;

const handleListening = () => {
  console.log(`✅ Listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
