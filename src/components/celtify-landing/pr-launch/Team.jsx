import '../../../styles/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Lathifa Jaffer",
      role: "Project Management and Business Strategy Lead",
      bio: "Lathifa brings strategic vision to our project, coordinating our efforts across research, development, and implementation to preserve Celtic languages through technology.",
      linkedin: "https://www.linkedin.com/in/lathifa-jaffer/",
      image: "team-member-1"
    },
    {
      name: "Ibrahim Malik",
      role: "AI Development Specialist",
      bio: "Ibrahim designs our AI-powered translation systems, creating algorithms specifically trained for Celtic language recognition that preserve cultural nuances and context.",
      linkedin: "https://www.linkedin.com/in/ibrahimssmalik/",
      image: "team-member-2"
    },
    {
      name: "Anita Odiaka",
      role: "VR and Immersive Experience Design Expert",
      bio: "With expertise in virtual reality development, Anita creates the immersive historical environments that bring ancient Celtic cities to life for language learning.",
      linkedin: "https://www.linkedin.com/in/emmanuella-anita-odiaka/",
      image: "team-member-3"
    },
    {
      name: "Eric Cheah",
      role: "Marketing and Preservation Advocate",
      bio: "Eric leads our outreach efforts, connecting our technology with Celtic diaspora communities, educational institutions, and cultural organizations to promote language preservation.",
      linkedin: "https://www.linkedin.com/in/eric--cheah/",
      image: "team-member-4"
    },
    {
      name: "Georgii Korenkov",
      role: "Celtic Languages and Historical Researcher",
      bio: "Specializing in Celtic linguistics and historical context, Georgii ensures cultural accuracy and authenticity in our translations and virtual environments.",
      linkedin: "https://www.linkedin.com/in/georgii-korenkov",
      image: "team-member-5"
    }
  ];

  const advisors = [
    {
      name: "Dr. Anu Sahni",
      role: "Academic Advisor",
      affiliation: "Program Director, Data Analytics, National College of Ireland",
      image: "advisor-1"
    },
    {
      name: "Victor del Rosal",
      role: "Consultant and Mentor",
      affiliation: "Innovation Facilitator & Talent Advisor, National College of Ireland",
      image: "advisor-2"
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <h2>The Minds Behind Celtify</h2>
        <p className="team-intro">
          Our diverse team combines expertise in linguistics, technology, gaming, and education
          to create an immersive language learning experience unlike any other.
        </p>
        
        <div className="core-team">
          <h3>Core Team</h3>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className={`team-member-image ${member.image}`}></div>
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="social-links">
                {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      className="linkedin-icon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  )}
                  {/* <a href="#" className="twitter-icon">Twitter</a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="advisors">
          <h3>Academic & Cultural Advisors</h3>
          <div className="advisors-grid">
            {advisors.map((advisor, index) => (
              <div key={index} className="advisor-card">
                <div className={`advisor-image ${advisor.image}`}></div>
                <h4>{advisor.name}</h4>
                <p className="advisor-role">{advisor.role}</p>
                <p className="advisor-affiliation">{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* <div className="join-team">
          <h3>Want to Join Our Mission?</h3>
          <p>We're always looking for talented individuals passionate about language, technology, and cultural preservation.</p>
          <button className="careers-button">View Open Positions</button>
        </div> */}
      </div>
    </section>
  );
};

export default Team;