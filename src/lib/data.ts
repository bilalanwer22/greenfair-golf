export const images = {
  hero: "/images/hero.svg",
  course: "/images/course.svg",
  golfer: "/images/golfer.svg",
  swing: "/images/swing.svg",
  clubs: "/images/clubs.svg",
  mindset: "/images/mindset.svg",
  travel: "/images/travel.svg",
  fitness: "/images/fitness.svg",
  beginner: "/images/beginner.svg",
  contact: "/images/contact.svg",
  team1: "/images/team-1.svg",
  team2: "/images/team-2.svg",
  team3: "/images/team-3.svg",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export const blogPosts = [
  {
    slug: "perfect-your-swing",
    title: "5 Tips to Perfect Your Golf Swing",
    excerpt:
      "Master the fundamentals of a consistent swing with these expert-backed techniques used by PGA professionals.",
    author: "James Mitchell",
    date: "June 15, 2025",
    category: "Technique",
    readTime: "5 min read",
    image: images.swing,
  },
  {
    slug: "choosing-the-right-clubs",
    title: "How to Choose the Right Golf Clubs",
    excerpt:
      "From drivers to putters, learn how to build a bag that matches your skill level and playing style.",
    author: "Sarah Chen",
    date: "May 28, 2025",
    category: "Equipment",
    readTime: "7 min read",
    image: images.clubs,
  },
  {
    slug: "mental-game-mastery",
    title: "The Mental Game: Staying Focused on the Course",
    excerpt:
      "Golf is as much mental as it is physical. Discover strategies to stay calm under pressure and play your best.",
    author: "David Thompson",
    date: "May 10, 2025",
    category: "Mindset",
    readTime: "6 min read",
    image: images.mindset,
  },
  {
    slug: "best-courses-to-play",
    title: "Top 10 Golf Courses Every Enthusiast Should Play",
    excerpt:
      "From Pebble Beach to St Andrews, explore the world's most iconic golf destinations every player dreams of.",
    author: "Emily Rodriguez",
    date: "April 22, 2025",
    category: "Travel",
    readTime: "8 min read",
    image: images.travel,
  },
  {
    slug: "golf-fitness-guide",
    title: "Golf Fitness: Exercises to Improve Your Game",
    excerpt:
      "Build strength, flexibility, and endurance with a fitness routine designed specifically for golfers.",
    author: "Michael Park",
    date: "April 5, 2025",
    category: "Fitness",
    readTime: "6 min read",
    image: images.fitness,
  },
  {
    slug: "beginners-guide-to-golf",
    title: "A Beginner's Guide to Getting Started in Golf",
    excerpt:
      "New to golf? Here's everything you need to know — from etiquette and rules to your first lesson on the range.",
    author: "Lisa Anderson",
    date: "March 18, 2025",
    category: "Beginners",
    readTime: "10 min read",
    image: images.beginner,
  },
];

export const stats = [
  { value: "18", label: "Championship Holes" },
  { value: "7,200", label: "Yards of Fairway" },
  { value: "50+", label: "Years of Excellence" },
  { value: "2,500+", label: "Happy Members" },
];

export const features = [
  {
    title: "Championship Course",
    description:
      "Our 18-hole par-72 course is designed by renowned architect Robert Trent Jones, offering a challenging yet rewarding experience for golfers of all levels.",
    icon: "⛳",
  },
  {
    title: "Expert Coaching",
    description:
      "Learn from PGA-certified instructors who provide personalized lessons, group clinics, and junior programs to help you reach your full potential.",
    icon: "🏌️",
  },
  {
    title: "Premium Facilities",
    description:
      "Enjoy our state-of-the-art driving range, practice greens, pro shop, and luxurious clubhouse with fine dining and event spaces.",
    icon: "🏆",
  },
  {
    title: "Vibrant Community",
    description:
      "Join a welcoming community of golf enthusiasts. Participate in tournaments, social events, and member-exclusive outings throughout the year.",
    icon: "🤝",
  },
];

export const teamMembers = [
  {
    name: "Robert Hayes",
    role: "Club President",
    bio: "With over 30 years in golf management, Robert has transformed GreenFair into one of the region's premier destinations.",
    image: images.team1,
  },
  {
    name: "Amanda Foster",
    role: "Head Golf Professional",
    bio: "A former LPGA tour player, Amanda brings world-class coaching expertise and a passion for developing players at every level.",
    image: images.team2,
  },
  {
    name: "Thomas Wright",
    role: "Course Superintendent",
    bio: "Thomas ensures our fairways and greens are maintained to the highest standards, keeping the course in tournament-ready condition year-round.",
    image: images.team3,
  },
];
