// Pure data — no JSX here. `icon` is just a lookup key,
// the actual icon component is resolved in components/skills/iconMap.js
export const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'SQL', icon: 'sql' },
      { name: 'C++', icon: 'cpp' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'Hibernate', icon: 'hibernate' },
      { name: 'React', icon: 'react' },
      { name: 'Streamlit', icon: 'streamlit' },
    ],
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'Claude', icon: 'claude' },
      { name: 'Claude Code (CLI)', icon: 'claudecode' },
      { name: 'ChatGPT', icon: 'chatgpt' },
      { name: 'Codex', icon: 'codex' },
      { name: 'Gemini', icon: 'gemini' },
      { name: 'Perplexity', icon: 'perplexity' },
    ],
  },
  {
    title: 'Automation & Integrations',
    skills: [
      { name: 'Make.com', icon: 'make' },
      { name: 'n8n', icon: 'n8n' },
      { name: 'GoHighLevel (GHL) API', icon: 'ghl' },
      { name: 'Google Cloud', icon: 'googlecloud' },
      { name: 'Gmail API', icon: 'gmail' },
      { name: 'Google Calendar API', icon: 'googlecalendar' },
      { name: 'GA4 API', icon: 'analytics' },
      { name: 'Figma API', icon: 'figma' },
    ],
  },
  {
    title: 'APIs & Tools',
    skills: [
      { name: 'REST APIs', icon: 'api' },
      { name: 'MCP Server', icon: 'server' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
  {
    title: 'Web',
    skills: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'PHP', icon: 'php' },
      { name: 'Responsive Design', icon: 'responsive' },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'IoT', icon: 'iot' },
      { name: 'Eclipse IDE', icon: 'eclipse' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Maven', icon: 'maven' },
    ],
  },
]
