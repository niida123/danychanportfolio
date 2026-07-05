import attendanceImg from '../assets/projects/attendance-system.png'
import skincareImg from '../assets/projects/skincare-store.png'
import communeImg from '../assets/projects/commune-reports.png'
import newsImg from '../assets/projects/news.png'
import inventoryImg from '../assets/projects/inventory.png'
import scheduleImg from '../assets/projects/schedule.png'


export const projects = [
  {
    id: 'attendance-system',
    title: 'Employee Attendance Management System',
    file: 'AttendanceSystem.jsx',
    image: attendanceImg,
    description:
      'A role-based HR platform that tracks staff attendance with live GPS check-in and check-out, streamlines leave requests, and gives managers a real-time view of the workforce.',
    stack: ['Laravel', 'PHP', 'JavaScript', 'Bootstrap', 'MySQL', 'AWS'],
    features: [
      'GPS check-in',
      'GPS check-out',
      'Role-based access control',
      'Leave management',
      'Attendance reports',
      'HR dashboard',
      'Admin dashboard',
      'Employee management',
      'Notifications',
    ],
    category: 'Full Stack',
    github: 'https://github.com/niida123/attendance_system',
    demo: 'https://youtu.be/LrBs3mPc2EU',
  },
  {
    id: 'skincare-ecommerce',
    title: 'Skincare E-commerce Website',
    file: 'SkincareStore.jsx',
    image: skincareImg,
    description:
      'A full-featured storefront for a skincare brand, covering everything from browsing and wishlists to order fulfilment and customer management on the admin side.',
    stack: ['Laravel', 'PHP','JavaScript', 'Bootstrap', 'MySQL', 'AWS'],
    features: [
      'Shopping cart',
      'Wishlist',
      'Product management',
      'Order management',
      'Customer management',
      'Admin dashboard',
      'Responsive UI',
    ],
    category: 'E-commerce',
    github: 'https://github.com/niida123/glowskincareweb',
    demo: 'https://youtu.be/e6_7FT9Lcms',
  },
  {
    id: 'commune-reporting',
    title: 'Socio-Economic Statistics Data Management Platform for Subnational Administration',
    file: 'CommuneReports.jsx',
    image: communeImg,
    description:
      'A Socio-Economic Statistics Data Management Platform for Subnational Administration, designed to support data collection, analysis, reporting, and visualization across provincial, district, municipal, and commune levels through secure role-based access.',
    stack: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap', 'Highcharts.js', 'Data visualization'],
    features: [
      'Reporting',
      'Full Stack',
      'Data visualization',
      'Charts',
      'Role management',
      'CRUD operations',
    ],
    category: 'Full Stack',
    github: '#',
    demo: 'https://youtu.be/uDQwXVRgx70',
  },
  {
    id: 'news-website',
    title: 'News Website',
    file: 'NewsPortal.php',
    image: newsImg,
    description:
      'A content-driven news platform with categorized articles, secure authentication, and an admin panel for publishing and managing stories.',
    stack: ['PHP', 'Bootstrap', 'MySQL'],
    features: [
      'Authentication',
      'Categories',
      'Article management',
      'Admin dashboard',
      'Responsive layout',
    ],
    category: 'Content',
    github: '#',
    demo: 'https://youtu.be/nW-6zwME5c8',
  },
  {
    id: 'Inventory-management',
    title: 'Inventory Management System',
    file: 'InventoryManager.cs',
    image: inventoryImg,
    description:
      'A desktop application for managing inventory records, built as a Windows Forms app with a searchable, database-backed interface.',
    stack: ['C#', 'SQL Server', 'Windows Forms'],
    features: [
      'CRUD operations',
      'Inventory information management',
      'Search',
      'Database integration',
    ],
    category: 'Desktop',
    github: '#',
    demo: 'https://youtu.be/J09FLgQvsYU',
  },
    {
    id: 'Schedule-management',
    title: 'Schedule Management System',
    file: 'ScheduleManager.cs',
    image: scheduleImg,
    description:
      'A web-based schedule management system for lecturers, built with Laravel and MySQL, featuring CRUD operations and a user-friendly interface for managing schedules.',
    stack: ['Laravel', 'PHP', 'Bootstrap', 'MySQL'],
    features: [
      'CRUD operations',
      'Schedule information management',
      'Search',
      'Database integration',
    ],
    category: 'Full Stack',
    github: '#',
    demo: '#',
  },
]

export const projectCategories = ['All', ...new Set(projects.map((p) => p.category))]
