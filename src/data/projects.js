// Replace image paths with the correct paths in your project
// Example: import finalProjectImage from '../assets/images/lms-telkom.png';

export const projects = [
  // ==================== CATEGORY: FINAL PROJECT ====================
   {
    id: 1,
    category: 'Final Project',
    title: 'SedimTrack-IoT: IoT-Based Sediment Image Scanner',
    description: 'Developed an innovative IoT-based automated sediment imaging system (replacing expensive conventional equipment) as a cost-effective solution for geological documentation. Achieved a 96.2% data transmission success rate, ±0.1cm movement precision, and <10-second automated image stitching process. This project successfully transformed a manual, inconsistent geological documentation process into a standardized, automated one, significantly reducing operational costs while improving data quality.',
    technologies: ['ESP32', 'Kotlin', 'MQTT/TLS', 'Supabase', 'OpenCV', 'Python'],
    // Change 'image' to an array containing multiple image paths
    image: [
      'src/assets/project/Sedimtrack1.png', 
      'src/assets/project/Sedimtrack2.png', 
      'src/assets/project/Sedimtrack3.png',
      'src/assets/project/Sedimtrack4.png'
    ],
    link: 'https://github.com/your-username/sedimtrack-iot', 
  },

  // ==================== CATEGORY: FREELANCER ====================
  {
  id: 2,
  category: 'Freelancer',
  title: 'Food Order App: A Modern Digital Ordering Experience',
  description: 'A modern, single-page application built with React.js that provides a seamless and intuitive user interface for browsing food menus, adding items to a cart, and managing an order. The application features a dynamic cart system that updates in real-time and a clean, user-friendly design. It showcases core React concepts such as state management with hooks (useState), context API for global state sharing (useContext), and a responsive component-based architecture.',
  technologies: [
    'React.js',
    'JavaScript',
    'Tailwind CSS'
  ],
  image: 'src/assets/project/food.png',
  link: '#'
},

  {
    id: 7,
    category: 'Freelancer',
    title: 'Bankbumi',
    description: 'Developed a full-stack Android application using Flutter and Laravel. This app enables users to deposit fabric and plastic bottles, which are then calculated to earn BBCoin redeemable within the application. I served as the **Full-stack Developer**, building the frontend with Flutter/Dart and the backend with Laravel and a MySQL database.',
    technologies: ['Flutter', 'Dart', 'Laravel', 'MySQL'],
    image: [
      'src/assets/project/bb1.png', 
      'src/assets/project/bb2.png'
    ],
    link: 'https://bankbumi.com/',
  },

  {
    id: 6,
    category: 'Freelancer',
    title: 'Danfoss Inverter Control System via ESP32',
    description: 'A custom control system for managing Danfoss Inverters. It uses an ESP32 to provide precise control and a custom UI for configuring and monitoring key parameters.',
    technologies: ['ESP32', 'PWM to Voltage', 'Embedded Systems', 'UI Development'],
    image: 'src/assets/project/danfos.png',  // Replace with the correct image path
    link: 'https://github.com/bayuish/danfoss-control-esp32', // Replace with a repository or demo link
  },

  // ==================== CATEGORY: ACADEMY PROJECT ====================
 {
    id: 3,
    category: 'Academy Project',
    title: 'Logistic Tracking Dashboard',
    description: 'A digital monitoring platform developed using **React.js** as the primary framework to provide an interactive and responsive user interface. This platform is comprehensively designed to facilitate the real-time monitoring and management of all logistics activities. The web application\'s architecture optimizes the user experience through four integrated main pages: Home, Shipment, Analytics, and Reports.',
    technologies: ['React.js','Firebase'],
    image: [
      'src/assets/project/Log1.png', 
      'src/assets/project/Log2.png', 
      'src/assets/project/Log3.png', 
    ],
    link: '#', // Replace with the repository or demo link
  },

   {
    id: 4,
    category: 'Academy Project',
    title: 'Mobile Learning Management System (LMS) for Telkom University',
    description: 'An Android application that allows Telkom University students to view class schedules, access course materials, and take quizzes on their mobile devices. This project facilitated easy access to academic information and improved the digital learning experience.',
    technologies: ['Android (Kotlin)', 'Firebase', 'RESTful API', 'Figma'],
    image: [
      'src/assets/project/Mob1.png', 
      'src/assets/project/Mob2.png', 
    ],
    link: 'https://github.com/bayuish/lms-telkom-university', // Replace with a repository or demo link
  },
  
  // ==================== CATEGORY: SELF PROJECT ====================
  {
    id: 5,
    category: 'Self Project',
    title: 'AnemoLink: IoT-Based Anemometer',
    description: 'A digital anemometer system that measures wind speed in real time using an ESP32 and magnetic-IR sensors. Collected data is transmitted to the cloud for remote monitoring, providing a reliable solution for wind speed tracking.',
    technologies: ['ESP32', 'IoT', 'C++', 'Firebase'],
    image: [
      'src/assets/project/ane1.png', 
      'src/assets/project/ane2.png', 
      'src/assets/project/ane3.png',
    ],
    link: 'https://github.com/bayuish/anemolink-iot', // Replace with a repository or demo link
  },
];