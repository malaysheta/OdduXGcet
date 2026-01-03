import { Router } from "express";
import {
  applyLeave,
  getMyLeaves,
  getAllLeaves,
  approveLeave,
  rejectLeave,
  cancelLeave,
} from "../controllers/leave.controller.js";
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";
import { applyLeaveValidation } from "../middlewares/validation.middleware.js";

const router = Router();

// All routes require authentication
router.use(verifyJWT);

// Employee routes
router.post("/apply", applyLeaveValidation, applyLeave);
router.get("/my-leaves", getMyLeaves);
router.delete("/:id", cancelLeave);

// Admin/HR routes
router.get("/", authorizeRoles("admin", "hr"), getAllLeaves);
router.patch("/:id/approve", authorizeRoles("admin", "hr"), approveLeave);
router.patch("/:id/reject", authorizeRoles("admin", "hr"), rejectLeave);

export default router;
