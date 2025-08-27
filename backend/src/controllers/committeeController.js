import { Committee, Portfolio, User } from '../models/index.js';

class CommitteeController {
  async getCommittees(req, res) {
    try {
      const committees = await Committee.findAll({
        where: { isActive: true },
        include: [
          {
            model: Portfolio,
            as: 'portfolios',
          },
          {
            model: User,
            as: 'creator',
            attributes: ['id', 'firstName', 'lastName', 'email'],
          },
        ],
        order: [['createdAt', 'ASC']],
      });

      res.json({
        success: true,
        committees,
      });
    } catch (error) {
      console.error('Get committees error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to get committees',
        error: error.message,
      });
    }
  }

  async getCommitteeById(req, res) {
    try {
      const { id } = req.params;

      const committee = await Committee.findByPk(id, {
        include: [
          {
            model: Portfolio,
            as: 'portfolios',
          },
          {
            model: User,
            as: 'creator',
            attributes: ['id', 'firstName', 'lastName', 'email'],
          },
        ],
      });

      if (!committee) {
        return res.status(404).json({
          success: false,
          message: 'Committee not found',
        });
      }

      res.json({
        success: true,
        committee,
      });
    } catch (error) {
      console.error('Get committee error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to get committee',
        error: error.message,
      });
    }
  }

  async createCommittee(req, res) {
    try {
      const { name, shortName, agenda, level, description, portfolios = [] } = req.body;

      const committee = await Committee.create({
        name,
        shortName,
        agenda,
        level,
        description,
        createdBy: req.user.userId,
      });

      // Create portfolios if provided
      if (portfolios.length > 0) {
        const portfolioData = portfolios.map(portfolioName => ({
          committeeId: committee.id,
          name: portfolioName,
        }));

        await Portfolio.bulkCreate(portfolioData);
      }

      // Fetch the complete committee with portfolios
      const completeCommittee = await Committee.findByPk(committee.id, {
        include: [
          {
            model: Portfolio,
            as: 'portfolios',
          },
        ],
      });

      res.status(201).json({
        success: true,
        message: 'Committee created successfully',
        committee: completeCommittee,
      });
    } catch (error) {
      console.error('Create committee error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to create committee',
        error: error.message,
      });
    }
  }

  async updateCommittee(req, res) {
    try {
      const { id } = req.params;
      const { name, shortName, agenda, level, description, portfolios } = req.body;

      const committee = await Committee.findByPk(id);
      if (!committee) {
        return res.status(404).json({
          success: false,
          message: 'Committee not found',
        });
      }

      await committee.update({
        name,
        shortName,
        agenda,
        level,
        description,
      });

      // Update portfolios if provided
      if (portfolios) {
        // Delete existing portfolios
        await Portfolio.destroy({ where: { committeeId: id } });

        // Create new portfolios
        if (portfolios.length > 0) {
          const portfolioData = portfolios.map(portfolioName => ({
            committeeId: id,
            name: portfolioName,
          }));

          await Portfolio.bulkCreate(portfolioData);
        }
      }

      // Fetch the updated committee with portfolios
      const updatedCommittee = await Committee.findByPk(id, {
        include: [
          {
            model: Portfolio,
            as: 'portfolios',
          },
        ],
      });

      res.json({
        success: true,
        message: 'Committee updated successfully',
        committee: updatedCommittee,
      });
    } catch (error) {
      console.error('Update committee error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update committee',
        error: error.message,
      });
    }
  }

  async deleteCommittee(req, res) {
    try {
      const { id } = req.params;

      const committee = await Committee.findByPk(id);
      if (!committee) {
        return res.status(404).json({
          success: false,
          message: 'Committee not found',
        });
      }

      await committee.update({ isActive: false });

      res.json({
        success: true,
        message: 'Committee deleted successfully',
      });
    } catch (error) {
      console.error('Delete committee error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to delete committee',
        error: error.message,
      });
    }
  }
}

export default new CommitteeController();