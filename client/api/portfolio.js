export default function handler(req, res) {
  res.status(200).json({
    name: 'John Mac M. Dizon',
    title: 'BSIT Student | Aspiring Web Developer',
    tagline: 'I am currently studying BSIT.',
    about: [
      'Hey, my name is John, and I’m currently a student taking up a Bachelor of Science in Information Technology (BSIT).',
      'I’m interested in learning how technology works behind the scenes, especially in areas like programming, web development, and system design. As a BSIT student, I’m building my skills in coding, problem-solving, and understanding how different software systems are created and maintained.',
      'I enjoy exploring new technologies and improving my knowledge in both hardware and software concepts. I’m also working on developing my logical thinking and teamwork skills through school projects and activities. In my free time, I like practicing coding exercises, watching tech-related content, and discovering new tools that can help me become a better developer in the future.',
      'My goal is to grow my skills and eventually pursue a career in the IT industry where I can contribute to building useful and innovative systems.'
    ],
    achievements: [
      {
        title: 'Built a responsive portfolio website',
        detail: 'Designed and developed a personal portfolio using React, Node.js, and modern UI styling.'
      },
      {
        title: 'Improved frontend and layout skills',
        detail: 'Practiced creating clean sections, mobile-friendly design, and smooth navigation for a professional look.'
      },
      {
        title: 'Exploring full-stack development',
        detail: 'Learning how APIs, frontend pages, and deployment work together in a real project.'
      }
    ],
    techStack: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
    ],
    degree: {
      program: 'Bachelor of Science in Information Technology',
      school: 'STI College of San Jose del Monte',
      year: '2023 - Present',
      note: 'Focused on web development, software engineering, and practical IT skills.'
    },
    contact: {
      email: 'johnmacdizon@gmail.com',
      github: 'https://github.com/jaym-2',
      facebook: 'https://www.facebook.com/jaym0402'
    }
  });
}
