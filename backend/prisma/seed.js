import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create default admin users
  const hashedPassword = await bcrypt.hash('kmun2025', 12);

  const users = [
    {
      userId: 'KMUN25001',
      firstName: 'Dev',
      lastName: 'Admin',
      email: 'dev@mun.com',
      password: hashedPassword,
      phone: '+91 9876543211',
      role: 'DEV_ADMIN',
      institution: 'MUN Organization',
      grade: 'Staff',
      isActive: true
    },
    {
      userId: 'KMUN25002',
      firstName: 'John',
      lastName: 'Delegate',
      email: 'delegate@mun.com',
      password: hashedPassword,
      phone: '+91 9876543210',
      role: 'DELEGATE',
      institution: 'Harvard University',
      grade: 'Undergraduate',
      isActive: true
    },
    {
      userId: 'KMUN25003',
      firstName: 'Delegate',
      lastName: 'Affairs',
      email: 'affairs@mun.com',
      password: hashedPassword,
      phone: '+91 9876543212',
      role: 'DELEGATE_AFFAIRS',
      institution: 'MUN Organization',
      grade: 'Staff',
      isActive: true
    },
    {
      userId: 'KMUN25004',
      firstName: 'Front',
      lastName: 'Desk',
      email: 'frontdesk@mun.com',
      password: hashedPassword,
      phone: '+91 9876543213',
      role: 'FRONT_DESK_ADMIN',
      institution: 'MUN Organization',
      grade: 'Staff',
      isActive: true
    },
    {
      userId: 'KMUN25005',
      firstName: 'Committee',
      lastName: 'Director',
      email: 'director@mun.com',
      password: hashedPassword,
      phone: '+91 9876543214',
      role: 'COMMITTEE_DIRECTOR',
      institution: 'MUN Organization',
      grade: 'Staff',
      isActive: true
    },
    {
      userId: 'KMUN25006',
      firstName: 'Hospitality',
      lastName: 'Admin',
      email: 'hospitality@mun.com',
      password: hashedPassword,
      phone: '+91 9876543215',
      role: 'HOSPITALITY_ADMIN',
      institution: 'MUN Organization',
      grade: 'Staff',
      isActive: true
    }
  ];

  console.log('👥 Creating users...');
  const createdUsers = [];
  for (const userData of users) {
    const existingUser = await prisma.user.findFirst({
      where: { email: userData.email }
    });

    if (!existingUser) {
      const user = await prisma.user.create({
        data: userData
      });
      createdUsers.push(user);
      console.log(`✅ Created user: ${userData.email}`);
    } else {
      createdUsers.push(existingUser);
      console.log(`⏭️  User already exists: ${userData.email}`);
    }
  }

  // Create committees
  const committees = [
    {
      name: 'United Nations Security Council (UNSC)',
      description: 'Addressing global security challenges and international peace',
      capacity: 15,
      registered: 12,
      topics: JSON.stringify([
        'Addressing the proliferation of nuclear weapons in the Middle East',
        'The situation in the South China Sea and maritime security'
      ]),
      chairs: JSON.stringify(['John Smith', 'Sarah Johnson']),
      image: '/images/committees/unsc.jpg',
      isActive: true
    },
    {
      name: 'United Nations General Assembly (UNGA)',
      description: 'Deliberating on international cooperation and development',
      capacity: 30,
      registered: 25,
      topics: JSON.stringify([
        'Sustainable development goals and climate action',
        'Global health security and pandemic preparedness'
      ]),
      chairs: JSON.stringify(['Michael Brown', 'Emily Davis']),
      image: '/images/committees/unga.jpg',
      isActive: true
    },
    {
      name: 'World Health Organization (WHO)',
      description: 'Addressing global health challenges and policy',
      capacity: 20,
      registered: 18,
      topics: JSON.stringify([
        'Mental health crisis in post-pandemic world',
        'Access to essential medicines in developing nations'
      ]),
      chairs: JSON.stringify(['Dr. Lisa Chen', 'Dr. Robert Wilson']),
      image: '/images/committees/who.jpg',
      isActive: true
    },
    {
      name: 'International Court of Justice (ICJ)',
      description: 'Legal disputes between nations and international law',
      capacity: 12,
      registered: 10,
      topics: JSON.stringify([
        'Maritime boundary disputes in the Arctic',
        'State responsibility for environmental damage'
      ]),
      chairs: JSON.stringify(['Justice Maria Rodriguez', 'Justice David Kim']),
      image: '/images/committees/icj.jpg',
      isActive: true
    }
  ];

  console.log('🏛️ Creating committees...');
  for (const committeeData of committees) {
    const existingCommittee = await prisma.committee.findFirst({
      where: { name: committeeData.name }
    });

    if (!existingCommittee) {
      await prisma.committee.create({
        data: committeeData
      });
      console.log(`✅ Created committee: ${committeeData.name}`);
    } else {
      console.log(`⏭️  Committee already exists: ${committeeData.name}`);
    }
  }

  // Create default pricing
  console.log('💰 Creating default pricing...');
  const existingPricing = await prisma.pricing.findFirst();
  if (!existingPricing) {
    await prisma.pricing.create({
      data: {
        internalDelegate: 2500,
        externalDelegate: 3500,
        accommodationCharge: 1500,
        earlyBirdDiscount: 500,
        groupDiscount: 200
      }
    });
    console.log('✅ Created default pricing');
  } else {
    console.log('⏭️  Pricing already exists');
  }

  // Create sample registrations
  console.log('📝 Creating sample registrations...');
  
  // Find the John Delegate user
  const johnDelegate = createdUsers.find(user => user.email === 'delegate@mun.com');
  
  if (johnDelegate) {
    const existingReg = await prisma.registration.findFirst({
      where: { userId: johnDelegate.id }
    });

    if (!existingReg) {
      await prisma.registration.create({
        data: {
          userId: johnDelegate.id, // Use the actual user ID from the database
          firstName: 'John',
          lastName: 'Delegate',
          email: 'delegate@mun.com',
          phone: '+91 9876543210',
          gender: 'Male',
          isKumaraguru: false,
          institution: 'Harvard University',
          grade: 'Undergraduate',
          totalMuns: '5',
          committeePreference1: 'United Nations Security Council (UNSC)',
          portfolioPreference1: 'United States',
          committeePreference2: 'United Nations General Assembly (UNGA)',
          portfolioPreference2: 'United Kingdom',
          committeePreference3: 'World Health Organization (WHO)',
          portfolioPreference3: 'Canada',
          idDocument: 'passport.pdf',
          munResume: 'resume.pdf',
          status: 'APPROVED',
          paymentStatus: 'CONFIRMED',
          submittedAt: new Date()
        }
      });
      console.log(`✅ Created registration for: ${johnDelegate.email}`);
    } else {
      console.log(`⏭️  Registration already exists for: ${johnDelegate.email}`);
    }
  } else {
    console.log('⚠️  John Delegate user not found, skipping registration creation');
  }

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
