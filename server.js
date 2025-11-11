import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión con MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error al conectar:", err));

// Modelo de comentario
const Comentario = mongoose.model("Comentario", new mongoose.Schema({
  texto: String,
  fecha: { type: Date, default: Date.now }
}));

// Obtener todos los comentarios
app.get("/comentarios", async (req, res) => {
  const comentarios = await Comentario.find().sort({ fecha: -1 });
  res.json(comentarios);
});

// Agregar un comentario
app.post("/comentarios", async (req, res) => {
  const nuevo = new Comentario({ texto: req.body.texto });
  await nuevo.save();
  res.json(nuevo);
});

// Eliminar un comentario
app.delete("/comentarios/:id", async (req, res) => {
  await Comentario.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${process.env.PORT}`);
});
