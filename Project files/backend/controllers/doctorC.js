const docSchema = require("../schemas/docModel");
const appointmentSchema = require("../schemas/appointmentModel");
const userSchema = require("../schemas/userModel");
const fs = require("fs");
const path = require('path');

const updateDoctorProfileController = async (req, res) => {
  console.log(req.body);
  try {
    const doctor = await docSchema.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    await doctor.save();
    return res.status(200).send({
      success: true,
      data: doctor,
      message: "successfully updated profile",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "something went wrong", success: false });
  }
};

const getAllDoctorAppointmentsController = async (req, res) => {
  try {
    const doctor = await docSchema.findOne({ userId: req.body.userId });

    const allApointments = await appointmentSchema.find({
      doctorId: doctor._id,
    });

    return res.status(200).send({
      message: "All the appointments are listed below.",
      success: true,
      data: allApointments,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "something went wrong", success: false });
  }
};

const handleStatusController = async (req, res) => {
  try {
    const { userid, appointmentId, status } = req.body;

    // Make sure to add a query condition to find the specific appointment
    const appointment = await appointmentSchema.findOneAndUpdate(
      { _id: appointmentId }, // Use _id to uniquely identify the appointment
      { status: status }, // Update the status field
      { new: true } // Set { new: true } to get the updated document as a result
    );

    const user = await userSchema.findOne({ _id: userid });

    const notification = user.notification;

    notification.push({
      type: "status-updated",
      message: `your appointment get ${status}`,
    });

    await user.save();
    await appointment.save();

    return res.status(200).send({
      success: true,
      message: "successfully updated",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ message: "something went wrong", success: false });
  }
};

const documentDownloadController = async (req, res) => {
  const appointId = req.query.appointId;
  try {
    const appointment = await appointmentSchema.findById(appointId);

    if (!appointment) {
      return res.status(404).send({ message: "Appointment not found" });
    }

    // Assuming that the document URL is stored in the "document" field of the appointment
    const documentUrl = appointment.document?.path; // Use optional chaining to safely access the property

    if (!documentUrl || typeof documentUrl !== "string") {
      return res.status(404).send({ message: "Document URL is invalid", success: false });
    }

    // Construct the absolute file path
    const absoluteFilePath = path.join(__dirname, "..", documentUrl);

    // Check if the file exists before initiating the download
    fs.access(absoluteFilePath, fs.constants.F_OK, (err) => {
      if (err) {
        return res.status(404).send({ message: "File not found", success: false, error: err });
      }

      // Set appropriate headers for the download response
      res.setHeader("Content-Disposition", `attachment; filename="${path.basename(absoluteFilePath)}"`);
      res.setHeader("Content-Type", "application/octet-stream");

      // Stream the file data to the response
      const fileStream = fs.createReadStream(absoluteFilePath);
      fileStream.on('error', (error) => {
        console.log(error);
        return res.status(500).send({ message: "Error reading the document", success: false, error: error });
      });
      // Pipe the fileStream to the response
      fileStream.pipe(res);

      // Send the response after the file stream ends (file download is completed)
      fileStream.on('end', () => {
        console.log('File download completed.');
        res.end();
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong", success: false });
  }
};

module.exports = {
  updateDoctorProfileController,
  getAllDoctorAppointmentsController,
  handleStatusController,
  documentDownloadController,
};
