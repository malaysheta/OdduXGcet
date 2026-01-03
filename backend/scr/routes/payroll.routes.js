import { Router } from "express";
import {
  getMyPayroll,
  getAllPayrolls,
  getPayrollByEmployeeId,
  createOrUpdatePayroll,
  deletePayroll,
} from "../controllers/payroll.controller.js";
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = Router();

// All routes require authentication
router.use(verifyJWT);

// Employee routes
router.get("/my-payroll", getMyPayroll);

// Admin/HR routes
router.get("/", authorizeRoles("admin", "hr"), getAllPayrolls);
router.get("/employee/:employeeId", authorizeRoles("admin", "hr"), getPayrollByEmployeeId);
router.post("/", authorizeRoles("admin", "hr"), createOrUpdatePayroll);
router.delete("/:id", authorizeRoles("admin"), deletePayroll);

export default router;
