import bcrypt from 'bcryptjs';
import { prisma } from '../config/database.js';

const seedData = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Create admin users
    const adminUsers = [
      {
        firstName: 'Software',
        lastName: 'Admin',
        email: 'admin@mun.com',
        password: await bcrypt.hash('IamSoftware1!@#', 12),
        role: 'SOFTWARE_ADMIN',
        phone: '+91 9876543210',
      },
      {
        firstName: 'Registration',
        lastName: 'Admin',
        email: 'registration@mun.com',
        password: await bcrypt.hash('IamRegistration1!@#', 12),
        role: 'REGISTRATION_ADMIN',
        phone: '+91 9876543211',
      },
      {
        firstName: 'Hospitality',
        lastName: 'Admin',
        email: 'hospitality@mun.com',
        password: await bcrypt.hash('IamHospitality1!@#', 12),
        role: 'HOSPITALITY_ADMIN',
        phone: '+91 9876543212',
      },
      {
        firstName: 'Allocation',
        lastName: 'Admin',
        email: 'allocation@mun.com',
        password: await bcrypt.hash('IamAllocation1!@#', 12),
        role: 'ALLOCATION_ADMIN',
        phone: '+91 9876543213',
      },
      {
        firstName: 'Executive',
        lastName: 'Board',
        email: 'executive@mun.com',
        password: await bcrypt.hash('IamExecutive1!@#', 12),
        role: 'EXECUTIVE_BOARD',
        phone: '+91 9876543214',
      },
    ];

    for (const userData of adminUsers) {
      await prisma.user.upsert({
        where: { email: userData.email },
        update: {},
        create: userData,
      });
    }

    // Create sample participant
    const participantUser = await prisma.user.upsert({
      where: { email: 'participant@mun.com' },
      update: {},
      create: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'participant@mun.com',
        password: await bcrypt.hash('IamJohn1!@#', 12),
        role: 'PARTICIPANT',
        phone: '+91 9876543215',
      },
    });

    // Create committees
    const committees = [
      {
        name: 'United Nations Security Council',
        shortName: 'UNSC',
        agenda: 'The Question of Nuclear Disarmament in the Korean Peninsula',
        level: 'ADVANCED',
        description: 'The Security Council has primary responsibility for the maintenance of international peace and security.',
        createdBy: adminUsers[0].email,
      },
      {
        name: 'General Assembly First Committee',
        shortName: 'GA1',
        agenda: 'Disarmament and International Security',
        level: 'BEGINNER',
        description: 'Deals with disarmament, global challenges and threats to peace that affect the international community.',
        createdBy: adminUsers[0].email,
      },
      {
        name: 'Economic and Social Council',
        shortName: 'ECOSOC',
        agenda: 'Sustainable Development Goals: Progress and Challenges',
        level: 'INTERMEDIATE',
        description: 'Coordinates economic and social work of the UN and its specialized agencies.',
        createdBy: adminUsers[0].email,
      },
      {
        name: 'Human Rights Council',
        shortName: 'HRC',
        agenda: 'Protection of Human Rights in Conflict Zones',
        level: 'INTERMEDIATE',
        description: 'Responsible for promoting and protecting human rights around the globe.',
        createdBy: adminUsers[0].email,
      },
      {
        name: 'International Court of Justice',
        shortName: 'ICJ',
        agenda: 'Maritime Boundary Disputes in the South China Sea',
        level: 'ADVANCED',
        description: 'The principal judicial organ of the United Nations.',
        createdBy: adminUsers[0].email,
      },
      {
        name: 'World Health Organization',
        shortName: 'WHO',
        agenda: 'Global Health Security and Pandemic Preparedness',
        level: 'BEGINNER',
        description: 'Directing and coordinating authority on international health within the UN system.',
        createdBy: adminUsers[0].email,
      },
    ];

    const createdCommittees = [];
    for (const committeeData of committees) {
      const adminUser = await prisma.user.findUnique({
        where: { email: committeeData.createdBy },
      });

      const committee = await prisma.committee.upsert({
        where: { name: committeeData.name },
        update: {},
        create: {
          ...committeeData,
          createdBy: adminUser.id,
        },
      });
      createdCommittees.push(committee);
    }

    // Create portfolios for committees
    const portfolios = {
      'United Nations Security Council': ['United States', 'China', 'Russia', 'United Kingdom', 'France', 'Germany', 'Japan', 'India', 'Brazil', 'South Africa'],
      'General Assembly First Committee': ['India', 'Germany', 'Japan', 'Brazil', 'South Africa', 'Canada', 'Australia', 'Mexico', 'Argentina', 'Egypt'],
      'Economic and Social Council': ['Canada', 'Australia', 'Mexico', 'Argentina', 'Egypt', 'Nigeria', 'Kenya', 'Thailand', 'Indonesia', 'Philippines'],
      'Human Rights Council': ['Netherlands', 'Sweden', 'Norway', 'Switzerland', 'Belgium', 'Denmark', 'Finland', 'Austria', 'Ireland', 'Luxembourg'],
      'International Court of Justice': ['Judge from India', 'Judge from USA', 'Judge from UK', 'Judge from France', 'Judge from Germany', 'Judge from Japan', 'Judge from Brazil', 'Judge from Australia', 'Judge from Canada', 'Judge from Netherlands'],
      'World Health Organization': ['WHO Director', 'India', 'USA', 'China', 'Germany', 'Japan', 'Brazil', 'Australia', 'Canada', 'United Kingdom'],
    };

    for (const committee of createdCommittees) {
      const committeePortfolios = portfolios[committee.name] || [];
      
      for (const portfolioName of committeePortfolios) {
        await prisma.portfolio.upsert({
          where: {
            committeeId_name: {
              committeeId: committee.id,
              name: portfolioName,
            },
          },
          update: {},
          create: {
            committeeId: committee.id,
            name: portfolioName,
          },
        });
      }
    }

    // Create email templates
    const emailTemplates = [
      {
        name: 'registration_confirmation',
        subject: 'Registration Confirmation - Kumaraguru MUN 2025',
        htmlContent: `
          <h2>Welcome to Kumaraguru MUN 2025!</h2>
          <p>Dear {{firstName}} {{lastName}},</p>
          <p>Thank you for registering for Kumaraguru Model United Nations 2025. Your registration has been received successfully.</p>
          <p><strong>Registration ID:</strong> {{registrationId}}</p>
          <p><strong>Registration Fee:</strong> ₹{{paymentAmount}}</p>
          <p>Please complete your payment within 48 hours to secure your registration.</p>
          <p>Best regards,<br>Kumaraguru MUN 2025 Team</p>
        `,
        textContent: 'Welcome to Kumaraguru MUN 2025! Your registration has been received successfully.',
        variables: ['firstName', 'lastName', 'registrationId', 'paymentAmount'],
      },
      {
        name: 'payment_confirmation',
        subject: 'Payment Confirmation - Kumaraguru MUN 2025',
        htmlContent: `
          <h2>Payment Confirmed!</h2>
          <p>Dear {{firstName}} {{lastName}},</p>
          <p>Your payment of ₹{{amount}} has been successfully processed.</p>
          <p><strong>Payment ID:</strong> {{paymentId}}</p>
          <p>You can download your invoice from: {{invoiceUrl}}</p>
          <p>Best regards,<br>Kumaraguru MUN 2025 Team</p>
        `,
        textContent: 'Your payment has been successfully processed.',
        variables: ['firstName', 'lastName', 'amount', 'paymentId', 'invoiceUrl'],
      },
      {
        name: 'committee_allocation',
        subject: 'Committee Allocation - Kumaraguru MUN 2025',
        htmlContent: `
          <h2>Committee Allocation Confirmed!</h2>
          <p>Dear {{firstName}} {{lastName}},</p>
          <p>Congratulations! You have been allocated to:</p>
          <p><strong>Committee:</strong> {{committee}}</p>
          <p><strong>Portfolio:</strong> {{portfolio}}</p>
          <p>Please prepare accordingly and download the background guide from our resources section.</p>
          <p>Best regards,<br>Kumaraguru MUN 2025 Team</p>
        `,
        textContent: 'You have been allocated to a committee. Please check your dashboard for details.',
        variables: ['firstName', 'lastName', 'committee', 'portfolio'],
      },
    ];

    for (const template of emailTemplates) {
      await prisma.emailTemplate.upsert({
        where: { name: template.name },
        update: {},
        create: template,
      });
    }

    console.log('✅ Database seeding completed successfully!');
    console.log('📧 Admin accounts created:');
    adminUsers.forEach(user => {
      console.log(`   - ${user.email} (${user.role})`);
    });
    console.log('👤 Participant account created: participant@mun.com');
    console.log('🏛️ Committees created:', committees.length);
    console.log('📧 Email templates created:', emailTemplates.length);

  } catch (error) {
    console.error('❌ Database seeding failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

// Run seeding if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedData()
    .then(() => {
      console.log('🎉 Seeding completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Seeding failed:', error);
      process.exit(1);
    });
}

export default seedData;