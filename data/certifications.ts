export type Certification = {
  title: string;
  issuer: string;
  /** Where the course was taken, e.g. "Coursera". */
  platform?: string;
  /** Display date, e.g. "Jul 2026". */
  date?: string;
  /** Link to verify the credential online. */
  credentialUrl?: string;
  /** Certificate preview image under /public, e.g. "/certificates/my-cert.webp". */
  image?: string;
  /** Original certificate PDF under /public, e.g. "/certificates/my-cert.pdf". */
  pdf?: string;
};

// To add a certificate: put its preview image (and PDF) in public/certificates/ and add an object below.
// Certificates with an `image` appear in the gallery; the rest are listed under "More credentials".
export const certifications: Certification[] = [
  {
    title: "Django Application Development with SQL and Databases",
    issuer: "IBM",
    platform: "Coursera",
    date: "Sep 2026",
    credentialUrl: "https://coursera.org/verify/KDJO6T45DSLR",
    image: "/certificates/django-sql-databases.webp",
    pdf: "/certificates/django-sql-databases.pdf",
  },
  {
    title: "Developing AI Applications with Python and Flask",
    issuer: "IBM",
    platform: "Coursera",
    date: "Jul 2026",
    credentialUrl: "https://coursera.org/verify/GG2F089GK3BH",
    image: "/certificates/ai-apps-python-flask.webp",
    pdf: "/certificates/ai-apps-python-flask.pdf",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    platform: "Coursera",
    date: "Jul 2026",
    credentialUrl: "https://coursera.org/verify/45IVAGSI5JBZ",
    image: "/certificates/python-data-science-ai.webp",
    pdf: "/certificates/python-data-science-ai.pdf",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    platform: "Coursera",
    date: "May 2026",
    credentialUrl: "https://coursera.org/verify/1WOAMVETS6M3",
    image: "/certificates/backend-nodejs-express.webp",
    pdf: "/certificates/backend-nodejs-express.pdf",
  },
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM",
    platform: "Coursera",
    date: "May 2026",
    credentialUrl: "https://coursera.org/verify/LCU6CXNLCMAT",
    image: "/certificates/frontend-react.webp",
    pdf: "/certificates/frontend-react.pdf",
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    platform: "Coursera",
    date: "May 2026",
    credentialUrl: "https://coursera.org/verify/KXLQROE74ECQ",
    image: "/certificates/git-github.webp",
    pdf: "/certificates/git-github.pdf",
  },
  {
    title: "Introduction to HTML, CSS & JavaScript",
    issuer: "IBM",
    platform: "Coursera",
    date: "May 2026",
    credentialUrl: "https://coursera.org/verify/60Z9ADMJMIH5",
    image: "/certificates/html-css-javascript.webp",
    pdf: "/certificates/html-css-javascript.pdf",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    platform: "Coursera",
    date: "May 2026",
    credentialUrl: "https://coursera.org/verify/QAPUDOHPL7N9",
    image: "/certificates/cloud-computing.webp",
    pdf: "/certificates/cloud-computing.pdf",
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    platform: "Coursera",
    date: "Apr 2026",
    credentialUrl: "https://coursera.org/verify/27XXQRJFTXMB",
    image: "/certificates/software-engineering.webp",
    pdf: "/certificates/software-engineering.pdf",
  },
  {
    title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
    issuer: "Google Cloud",
    platform: "Coursera",
    date: "Apr 2026",
    credentialUrl: "https://coursera.org/verify/A1U981MK03J3",
    image: "/certificates/java-microservices-spring.webp",
    pdf: "/certificates/java-microservices-spring.pdf",
  },
  { title: "Claude Code in Action", issuer: "Anthropic" },
  { title: "Fundamentals of NestJS", issuer: "Broad Infinity" },
  { title: "Introduction to Backend Development", issuer: "Meta" },
  { title: "Introduction to Frontend Development", issuer: "Meta" },
  { title: "WordPress Developer", issuer: "University of Michigan" },
  { title: "CCNA — Cisco Certified Network Associate", issuer: "Mega Soft" },
  { title: "A+ / B+ Computer Maintenance", issuer: "Mega Soft" },
];
