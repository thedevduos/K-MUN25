import express from 'express';
import { body } from 'express-validator';
import committeeController from '../controllers/committeeController.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { validateRequest } from '../middleware/validation.js';

const router = express.Router();

// Committee validation
const committeeValidation = [
  body('name').trim().isLength({ min: 3, max: 100 }).withMessage('Committee name is required'),
  body('shortName').trim().isLength({ min: 2, max: 10 }).withMessage('Short name is required'),
  body('agenda').trim().isLength({ min: 10 }).withMessage('Agenda is required'),
  body('level').isIn(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']).withMessage('Valid level is required'),
  body('description').trim().isLength({ min: 20 }).withMessage('Description is required'),
];

// Routes
router.get('/', committeeController.getCommittees);
router.get('/:id', committeeController.getCommitteeById);
router.post(
  '/',
  authenticateToken,
  authorizeRoles('SOFTWARE_ADMIN', 'SUPER_ADMIN'),
  committeeValidation,
  validateRequest,
  committeeController.createCommittee
);
router.put(
  '/:id',
  authenticateToken,
  authorizeRoles('SOFTWARE_ADMIN', 'SUPER_ADMIN'),
  committeeValidation,
  validateRequest,
  committeeController.updateCommittee
);
router.delete(
  '/:id',
  authenticateToken,
  authorizeRoles('SOFTWARE_ADMIN', 'SUPER_ADMIN'),
  committeeController.deleteCommittee
);

export default router;