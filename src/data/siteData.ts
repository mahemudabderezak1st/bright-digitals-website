export type PageId = 'home' | 'services' | 'about' | 'contact';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  extendedDescription: string;
  includedItems: string[];
  bestFor: string;
  iconName: 'share' | 'megaphone' | 'pen' | 'palette' | 'video';
}

export interface WhyPoint {
  title: string;
  description: string;
}

export interface BusinessTypeItem {
  name: string;
  howWeHelp: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  focus: string;
}

export const WHATSAPP_PRIMARY_NUMBER = '251975785777';
export const WHATSAPP_SECONDARY_NUMBER = '251973073299';

export function getWhatsAppUrl(customMessage?: string, useSecondary = false): string {
  const phone = useSecondary ? WHATSAPP_SECONDARY_NUMBER : WHATSAPP_PRIMARY_NUMBER;
  const text =
    customMessage ||
    'Hello Bright Digitals! I have a business and would like to talk to your team about digital marketing.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'social-media-management',
    number: '01',
    title: 'Social Media Management',
    shortDescription:
      'We help manage your social media and keep your business active online.',
    extendedDescription:
      'Running a business takes all your time. We take care of your Facebook, Instagram, and TikTok pages so your customers always see an active, trustworthy business when they search for you.',
    includedItems: [
      'Setting up and organizing your social media pages clearly',
      'Planning and posting regular updates every week',
      'Writing simple, clear captions in English or Amharic',
      'Keeping your page active and consistent for local customers',
    ],
    bestFor: 'Restaurants · Clinics · Retail Shops · Growing Local Brands',
    iconName: 'share',
  },
  {
    id: 'facebook-ads',
    number: '02',
    title: 'Facebook Ads',
    shortDescription:
      'We help businesses reach more people through Facebook and Instagram ads.',
    extendedDescription:
      'We create targeted Facebook and Instagram advertising campaigns focused on Addis Ababa and across Ethiopia so your promotions reach people who are actually interested in buying from you.',
    includedItems: [
      'Targeting the right audience by location and interest in Ethiopia',
      'Designing clear ad images, videos, and ad text',
      'Setting up message ads that bring customers straight to your phone or WhatsApp',
      'Monitoring ad performance to make make every birr count',
    ],
    bestFor: 'E-commerce · Clothing Shops · Dental Clinics · Special Promotions',
    iconName: 'megaphone',
  },
  {
    id: 'content-creation',
    number: '03',
    title: 'Content Creation',
    shortDescription:
      'We create simple and attractive content for your business.',
    extendedDescription:
      'Good content helps customers understand what you sell and why they should trust you. We plan and create photos, post ideas, and clear messages that show off your products and services naturally.',
    includedItems: [
      'Creative post ideas tailored to your products or services',
      'Product and service photography direction and formatting',
      'Clear storytelling that explains your business simply',
      'Educational and helpful posts that build customer trust',
    ],
    bestFor: 'Startups · Small Businesses · Cafes & Restaurants · Service Providers',
    iconName: 'pen',
  },
  {
    id: 'graphic-design',
    number: '04',
    title: 'Graphic Design',
    shortDescription:
      'We create social media posts, advertisements, and other designs.',
    extendedDescription:
      'Clean, attractive design makes your business stand out on a busy feed. We design easy-to-read social media graphics, promotional flyers, banners, and brand visuals that match your style.',
    includedItems: [
      'Social media post and story graphics',
      'Promotional posters and digital flyers for discounts or launches',
      'Clean menu layouts, price lists, and business profile covers',
      'Consistent colors and fonts so people recognize your business',
    ],
    bestFor: 'Retail Shops · Clothing Shops · Clinics · New Startups',
    iconName: 'palette',
  },
  {
    id: 'video-and-reels',
    number: '05',
    title: 'Video & Reels',
    shortDescription:
      'We create short videos and Reels for social media.',
    extendedDescription:
      'Short videos on Instagram Reels, TikTok, and Facebook get the most attention online today. We create simple, engaging short videos that showcase your shop, team, or products in action.',
    includedItems: [
      'Short vertical videos ready for Instagram Reels, TikTok, and Facebook',
      'Clean editing with readable captions and music',
      'Product showcases, behind-the-scenes clips, and shop tours',
      'Simple video ads designed to grab attention in the first few seconds',
    ],
    bestFor: 'Restaurants · Clothing Shops · E-commerce · Dental & Medical Clinics',
    iconName: 'video',
  },
];

export const WHY_BRIGHT_DIGITALS: WhyPoint[] = [
  {
    title: 'Affordable',
    description: 'Marketing that fits small-business budgets.',
  },
  {
    title: 'Creative',
    description: 'Fresh ideas and attractive content.',
  },
  {
    title: 'For Small Businesses',
    description: 'We focus on helping local businesses grow online.',
  },
];

export const WHO_WE_HELP: BusinessTypeItem[] = [
  {
    name: 'Small Businesses',
    howWeHelp:
      'We help local everyday businesses build a clean online presence and attract steady neighborhood and city-wide customers.',
  },
  {
    name: 'Startups',
    howWeHelp:
      'We help new startups in Ethiopia introduce their brand clearly, explain their product, and reach their first customers.',
  },
  {
    name: 'Restaurants',
    howWeHelp:
      'We showcase your food, atmosphere, and daily specials with appetizing photos, short Reels, and local awareness ads.',
  },
  {
    name: 'E-commerce',
    howWeHelp:
      'We create product graphics, video showcases, and targeted Facebook & Instagram ads that drive direct orders.',
  },
  {
    name: 'Clinics',
    howWeHelp:
      'We share trustworthy health tips, introduce your doctors and services, and make it easy for patients to contact you.',
  },
  {
    name: 'Dental Clinics',
    howWeHelp:
      'We highlight dental care services, friendly clinic environment, and patient education to bring in more appointments.',
  },
  {
    name: 'Clothing Shops',
    howWeHelp:
      'We turn new arrivals and collections into eye-catching lookbook posts, TikTok/Reels videos, and direct-message ads.',
  },
  {
    name: 'Retail Shops',
    howWeHelp:
      'We keep your customers updated on available items, prices, and seasonal promotions so more shoppers visit your store.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mahemud',
    name: 'Mahemud Abderezak',
    role: 'Content Strategist',
    initials: 'MA',
    focus: 'Content planning & messaging for local businesses',
  },
  {
    id: 'rihana',
    name: 'Rihana Seid',
    role: 'Marketing Strategist',
    initials: 'RS',
    focus: 'Campaign planning & audience growth',
  },
  {
    id: 'kalkidan',
    name: 'Kalkidan',
    role: 'Digital Marketing Lead',
    initials: 'KA',
    focus: 'Social media management & ad campaigns',
  },
  {
    id: 'ezedin',
    name: 'Ezedin',
    role: 'Creative Director',
    initials: 'EZ',
    focus: 'Graphic design, visual identity & short videos',
  },
  {
    id: 'huda',
    name: 'Huda',
    role: 'Client & Operations Manager',
    initials: 'HU',
    focus: 'Client communication & smooth project delivery',
  },
];

export const CONTACT_DETAILS = {
  phones: ['0975785777', '0973073299'],
  whatsapp: ['0975785777', '0973073299'],
  email: 'brightdigitalssmarketing@gmail.com',
  socials: [
    {
      platform: 'Instagram',
      handle: '@brightdigitalss',
      url: 'https://instagram.com/brightdigitalss',
    },
    {
      platform: 'Facebook',
      handle: '@brightdigitalss',
      url: 'https://facebook.com/brightdigitalss',
    },
    {
      platform: 'LinkedIn',
      handle: '@brightdigitalss',
      url: 'https://linkedin.com/company/brightdigitalss',
    },
    {
      platform: 'TikTok',
      handle: '@brightdigitalss',
      url: 'https://tiktok.com/@brightdigitalss',
    },
  ],
};
