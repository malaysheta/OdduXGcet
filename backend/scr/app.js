import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

// Import routes
import authRoutes from "./routes/auth.routes.js"
import employeeRoutes from "./routes/employee.routes.js"
import attendanceRoutes from "./routes/attendance.routes.js"
import leaveRoutes from "./routes/leave.routes.js"
import payrollRoutes from "./routes/payroll.routes.js"

const app=express()

app.use(cors({
   origin: process.env.CORS_ORIGIN,
   credentials:true
}))

app.use(express.json({
  limit:"16kb"
}))

app.use(express.urlencoded({
  limit:"16kb",
  extended:true
}))

app.use(express.static("public"))

app.use(cookieParser())

// API routes
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/employees", employeeRoutes)
app.use("/api/v1/attendance", attendanceRoutes)
app.use("/api/v1/leaves", leaveRoutes)
app.use("/api/v1/payroll", payrollRoutes)

// Health check route
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Dayflow HRMS API is running" })
})

export default app