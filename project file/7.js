const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersControllers,
  getAllDoctorsControllers,
  getStatusApproveController,
  getStatusRejectController,
  displayAllAppointmentController,
} = require("../controllers/adminC");

const router = express.Router();

router.get("/getallusers", authMiddleware, getAllUsersControllers);

router.get("/getalldoctors", authMiddleware, getAllDoctorsControllers);

router.post("/getapprove", authMiddleware, getStatusApproveController);

router.post("/getreject", authMiddleware, getStatusRejectController);

router.get('/getallAppointmentsAdmin', authMiddleware, displayAllAppointmentController)

module.exports = router;
