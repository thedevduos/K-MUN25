import { PricingConfig } from '../models/index.js';

class PricingController {
  async getCurrentPricing(req, res) {
    try {
      const pricing = await PricingConfig.findOne({
        where: { isActive: true },
        order: [['updatedAt', 'DESC']],
      });

      if (!pricing) {
        // Return default pricing if none exists
        return res.json({
          success: true,
          pricing: {
            internalDelegate: 1399,
            externalDelegate: 1599,
            accommodationCharge: 800,
            currency: 'INR',
            isActive: true,
          },
        });
      }

      res.json({
        success: true,
        pricing,
      });
    } catch (error) {
      console.error('Get pricing error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to get pricing',
        error: error.message,
      });
    }
  }

  async updatePricing(req, res) {
    try {
      const { internalDelegate, externalDelegate, accommodationCharge } = req.body;

      // Deactivate current pricing
      await PricingConfig.update(
        { isActive: false },
        { where: { isActive: true } }
      );

      // Create new pricing config
      const pricing = await PricingConfig.create({
        internalDelegate,
        externalDelegate,
        accommodationCharge,
        currency: 'INR',
        isActive: true,
        updatedBy: req.user.userId,
      });

      res.json({
        success: true,
        message: 'Pricing updated successfully',
        pricing,
      });
    } catch (error) {
      console.error('Update pricing error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update pricing',
        error: error.message,
      });
    }
  }

  async getPricingHistory(req, res) {
    try {
      const pricingHistory = await PricingConfig.findAll({
        order: [['updatedAt', 'DESC']],
        limit: 10,
      });

      res.json({
        success: true,
        pricingHistory,
      });
    } catch (error) {
      console.error('Get pricing history error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to get pricing history',
        error: error.message,
      });
    }
  }
}

export default new PricingController();