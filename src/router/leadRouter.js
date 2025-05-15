import { Router } from "express";
import {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
} from "../controller/leadController.js";

const router = Router();

// Routes for /api/v1/lead
router.route("/")
  .get(getAllLeads)     
  .post(createLead);    

router.route("/:id")
  .get(getLeadById)      
  .put(updateLead)       
  .delete(deleteLead);  

export default router;
