import { Router } from "express";
import {
  getProfile,
  updateProfile,
  uploadProfilePicture,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeStatus,
} from "../controllers/employee.controller.js";
import { verifyJWT, authorizeRoles } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// All routes require authentication
router.use(verifyJWT);

// Employee routes
router.get("/profile", getProfile);
router.put("/profile", updateProfile);
router.post("/profile-picture", upload.single("profilePicture"), uploadProfilePicture);

// Admin/HR routes
router.get("/", authorizeRoles("admin", "hr"), getAllEmployees);
router.get("/:id", authorizeRoles("admin", "hr"), getEmployeeById);
router.patch("/:id/status", authorizeRoles("admin", "hr"), updateEmployeeStatus);

export default router;
