import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();
//middlewares
app.use(cors({ origin: "https://aquamarine-queijadas-b153b6.netlify.app", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//remove it in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
app.get('/',(req,res)=>{
    console.log('server started')
    res.send("hello")
})
export default app;
//# sourceMappingURL=app.js.map
