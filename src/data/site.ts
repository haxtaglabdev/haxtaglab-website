import dinemarkImg from '../assets/dinemark.png'
import maduImg from '../assets/madu-tseylon.png'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
] as const

export type AboutPrinciple = {
  id: string
  number: string
  title: string
  description: string
  icon: 'desktop' | 'rocket' | 'chart' | 'search'
  offset: string
  numberBg: string
  iconClass: string
}

export const aboutPrinciples: AboutPrinciple[] = [
  {
    id: 'business-first',
    number: '01',
    title: 'Business-First Thinking',
    description:
      'Every feature, structure, and integration is selected to serve concrete commercial outcomes and real user workflows.',
    icon: 'desktop',
    offset: 'bg-royal',
    numberBg: 'bg-royal',
    iconClass: 'text-navy',
  },
  {
    id: 'usable-design',
    number: '02',
    title: 'Clean and Usable Design',
    description:
      'Clear interfaces, thoughtful hierarchies, and intuitive layouts that make complex systems feel effortless to operate.',
    icon: 'rocket',
    offset: 'bg-primary',
    numberBg: 'bg-primary',
    iconClass: 'text-primary',
  },
  {
    id: 'reliable-dev',
    number: '03',
    title: 'Reliable Development',
    description:
      'Rigorous engineering practices that prioritize security, dependable performance, and clean, maintainable code.',
    icon: 'chart',
    offset: 'bg-cyan-accent',
    numberBg: 'bg-[#089bb8]',
    iconClass: 'text-[#089bb8]',
  },
  {
    id: 'built-to-grow',
    number: '04',
    title: 'Solutions Built to Grow',
    description:
      'Architectures planned from the start to scale smoothly alongside your customer base and operational expansion.',
    icon: 'search',
    offset: 'bg-navy',
    numberBg: 'bg-navy',
    iconClass: 'text-navy',
  },
]

export type ServiceItem = {
  id: string
  indexLabel: string
  title: string
  description: string
  tags: string[]
  icon: 'web' | 'desktop' | 'design' | 'cart' | 'hub' | 'tune'
}

export const services: ServiceItem[] = [
  {
    id: 'website',
    indexLabel: '01 / Service',
    title: 'Website Design & Development',
    description:
      'Professional websites designed to communicate a brand clearly, engage prospective clients, and support measurable business goals.',
    tags: ['Responsive', 'SEO-Ready', 'Performance'],
    icon: 'web',
  },
  {
    id: 'webapp',
    indexLabel: '02 / Service',
    title: 'Custom Web Applications',
    description:
      'Interactive web-based systems built around specific business workflows, internal dashboards, and multi-tenant customer portals.',
    tags: ['Portals', 'Workflows', 'Cloud Apps'],
    icon: 'desktop',
  },
  {
    id: 'uiux',
    indexLabel: '03 / Service',
    title: 'UI/UX Design',
    description:
      'Clear, user-friendly interfaces that make digital products easier to understand and use, backed by structured wireframes and user testing.',
    tags: ['Prototyping', 'Design Systems', 'Usability'],
    icon: 'design',
  },
  {
    id: 'ecommerce',
    indexLabel: '04 / Service',
    title: 'E-commerce Solutions',
    description:
      'Online shopping experiences designed to help businesses present products intuitively, manage inventory, and handle checkout with confidence.',
    tags: ['Stores', 'Payment Gateways', 'Checkout'],
    icon: 'cart',
  },
  {
    id: 'backend',
    indexLabel: '05 / Service',
    title: 'API & Backend Development',
    description:
      'The underlying systems and third-party integrations needed to make digital platforms work reliably, safely, and at high speed.',
    tags: ['Databases', 'Integrations', 'High-Scale'],
    icon: 'hub',
  },
  {
    id: 'maintenance',
    indexLabel: '06 / Service',
    title: 'Ongoing Improvements & Maintenance',
    description:
      'Practical technical support, routine software improvements, security audits, and maintenance for existing digital products.',
    tags: ['SLA Support', 'Upgrades', 'Audits'],
    icon: 'tune',
  },
]

export type ProjectItem = {
  id: string
  badge: string
  badgeClass: string
  title: string
  description: string
  benefitLabel: string
  benefit: string
  experienceLabel: string
  experience: string
  url: string
  urlLabel: string
  image: string
  imageAlt: string
  panelClass: string
  layout: 'image-right' | 'image-left'
}

export const projects: ProjectItem[] = [
  {
    id: 'dinemark',
    badge: 'Digital Hospitality & Ordering',
    badgeClass: 'bg-primary/10 text-primary',
    title: 'Dinemark — Digital Restaurant Ordering & Kitchen Dispatch Platform',
    description:
      'Dinemark replaces traditional physical menus and chaotic order-taking with an instantaneous table-side QR ordering experience. Customers access real-time digital menus on their mobile browsers, while completed orders route immediately to dedicated kitchen display screens.',
    benefitLabel: 'Direct Benefit',
    benefit: 'Faster Table Turnover',
    experienceLabel: 'Customer Experience',
    experience: 'No App Install Required',
    url: 'https://www.dinemark.online/',
    urlLabel: 'https://www.dinemark.online/',
    image: dinemarkImg,
    imageAlt: 'Dinemark table-side restaurant ordering system live interface',
    panelClass: 'bg-[#0b1f5c]',
    layout: 'image-right',
  },
  {
    id: 'madu',
    badge: 'Tourism & Travel Portal',
    badgeClass: 'bg-cyan-accent/20 text-navy',
    title: 'Madu Tseylon Tours — River Safari & Experiential Travel Platform',
    description:
      "A polished international tourism portal showcasing Sri Lanka's renowned Madu River wetland safari in Balapitiya. Features rich visual story tours, transparent pricing, and simple booking inquiry channels connecting global travelers directly with local operators.",
    benefitLabel: 'Direct Benefit',
    benefit: 'Direct International Inquiries',
    experienceLabel: 'User Experience',
    experience: 'Fast Mobile Booking Flow',
    url: 'https://madutseylon.com/',
    urlLabel: 'https://madutseylon.com/',
    image: maduImg,
    imageAlt: 'Madu Tseylon Tours river safari travel portal',
    panelClass: 'bg-[#061845]',
    layout: 'image-left',
  },
]

export type ProcessStep = {
  number: string
  label: string
  heading: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    label: 'Understand',
    heading: 'Discovery',
    description:
      'We explore your business goals, project requirements, target audience, and the right solution for your needs.',
  },
  {
    number: '02',
    label: 'UI/UX Design',
    heading: 'Planning & Design',
    description:
      'We shape the user experience, plan the interface, and create clear designs before development begins.',
  },
  {
    number: '03',
    label: 'Build',
    heading: 'Development',
    description:
      'We turn approved designs into functional websites, web applications, and custom software solutions.',
  },
  {
    number: '04',
    label: 'Testing',
    heading: 'Quality Assurance',
    description:
      'We test functionality, usability, responsiveness, and performance to identify and resolve issues.',
  },
  {
    number: '05',
    label: 'Launch',
    heading: 'Deployment',
    description:
      'We prepare your solution for release, configure the required environment, and make sure everything is ready to go live.',
  },
  {
    number: '06',
    label: 'Support & Growth',
    heading: 'Ongoing Improvement',
    description:
      'We help improve your digital product through maintenance, new features, performance enhancements, and future updates.',
  },
]

export type TestimonialStat = {
  id: string
  value: string
  suffix?: string
  label: string
  sublabel: string
  accentClass: string
}

export const testimonialStats: TestimonialStat[] = [
  {
    id: 'satisfaction',
    value: '5.0',
    suffix: '/ 5.0',
    label: 'Verified Client Rating',
    sublabel: '100% genuine satisfaction',
    accentClass: 'text-navy',
  },
  {
    id: 'delivery',
    value: '100%',
    label: 'On-Time Sprint Delivery',
    sublabel: 'Milestone-driven roadmap',
    accentClass: 'text-navy',
  },
  {
    id: 'ownership',
    value: '100%',
    label: 'Client-Owned Code & IP',
    sublabel: 'No lock-in. Full repository access',
    accentClass: 'text-navy',
  },
  {
    id: 'support',
    value: '100%',
    label: 'Direct Technical Support',
    sublabel: 'Engineers, not call centres',
    accentClass: 'text-navy',
  },
]

export type TestimonialItem = {
  id: string
  quote: string
  name: string
  role: string
  company: string
  initials: string
  avatarColor: string
}

export const testimonials: TestimonialItem[] = [
  {
    id: 'testimonial-01',
    quote:
      '"HAXTAGLAB built our live QR ordering and kitchen dispatch web platform with zero lag. Our table turnover increased dramatically from day one, and staff trained on the system in minutes without confusion."',
    name: 'Roshan Senanayake',
    role: 'Operations Director',
    company: 'Dinemark Hospitality',
    initials: 'RS',
    avatarColor: 'bg-primary',
  },
  {
    id: 'testimonial-02',
    quote:
      '"Our international tourist inquiries tripled once the redesigned safari booking site launched. It loads instantaneously across mobile devices for overseas visitors, and the visual showcase has set a new benchmark in our region."',
    name: 'Dilshan Perera',
    role: 'Managing Director',
    company: 'Madu River Safaris',
    initials: 'DP',
    avatarColor: 'bg-primary',
  },
  {
    id: 'testimonial-03',
    quote:
      '"The engineering team delivered our dispatch tracking interface two weeks ahead of schedule. The code architecture was clean, thoroughly documented, and completely owned by us from commit one."',
    name: 'Kavinda Jayasooriya',
    role: 'Founder & CEO',
    company: 'Apex Logistics Cloud',
    initials: 'KJ',
    avatarColor: 'bg-primary',
  },
  {
    id: 'testimonial-04',
    quote:
      '"Their precision in designing user journeys for our financial dashboard was outstanding. They took dense analytics data and transformed it into a clear, enjoyable interface that our clients frequently compliment."',
    name: 'Amanda Alwis',
    role: 'Head of Product',
    company: 'TriEdge Systems',
    initials: 'AA',
    avatarColor: 'bg-primary',
  },
  {
    id: 'testimonial-05',
    quote:
      '"Handling high cart volumes with multi-tier payment gateways was our primary worry. HAXTAGLAB solved every bottleneck with resilient API integrations and a super clean checkout flow."',
    name: 'Naveen Fernando',
    role: 'CTO',
    company: 'Ceylon Retail Direct',
    initials: 'NF',
    avatarColor: 'bg-primary',
  },
  {
    id: 'testimonial-06',
    quote:
      '"Having direct access to senior engineers instead of dealing with ticketing overhead makes our ongoing maintenance painless. Security patches, performance tuning, and new features roll out fast."',
    name: 'Tharindu Silva',
    role: 'Managing Partner',
    company: 'Horizon Ventures',
    initials: 'TS',
    avatarColor: 'bg-primary',
  },
]

export const projectTypes = [
  { value: 'website', label: 'Website Design & Development' },
  { value: 'webapp', label: 'Custom Web Application' },
  { value: 'uiux', label: 'UI/UX Design' },
  { value: 'ecommerce', label: 'E-commerce Solution' },
  { value: 'maintenance', label: 'Maintenance & Ongoing Improvements' },
] as const
