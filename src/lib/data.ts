export const images = {
  hero: "/images/hero.svg",
  course: "/images/course.svg",
  golfer: "/images/golfer.svg",
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
