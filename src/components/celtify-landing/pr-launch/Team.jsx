import '../../../styles/Team.css';

const Team = () => {
  // const teamMembers = [
  //   {
  //     name: "Dr. Siobhan O'Leary",
  //     role: "Founder & Celtic Linguistics Expert",
  //     bio: "With over 15 years in Celtic language preservation, Dr. O'Leary combines academic expertise with a passion for making ancient languages accessible through modern technology.",
  //     image: "team-member-1"
  //   },
  //   {
  //     name: "Eoin Murphy",
  //     role: "Chief Technology Officer",
  //     bio: "A pioneer in AR technology, Eoin has developed award-winning mixed reality experiences for education and cultural preservation.",
  //     image: "team-member-2"
  //   },
  //   {
  //     name: "Rhiannon Davies",
  //     role: "AI Development Lead",
  //     bio: "Specializing in natural language processing, Rhiannon creates the adaptive learning algorithms that make Celtify's language coaching feel human.",
  //     image: "team-member-3"
  //   },
  //   {
  //     name: "Brendan MacNeil",
  //     role: "Game Design Director",
  //     bio: "Former lead designer at major gaming studios, Brendan ensures that learning with Celtify is not just educational but genuinely fun and engaging.",
  //     image: "team-member-4"
  //   }
  // ];

  const teamMembers = [
    {
      name: "Georgii Korenkov",
      role: "Celtic Languages and Historical Researcher",
      bio: "Specializing in Celtic linguistics and historical context, Georgii ensures cultural accuracy and authenticity in our translations and virtual environments.",
      image: "team-member-1"
    },
    {
      name: "Lathifa Jaffer",
      role: "Project Management and Business Strategy Lead",
      bio: "Lathifa brings strategic vision to our project, coordinating our efforts across research, development, and implementation to preserve Celtic languages through technology.",
      image: "team-member-2"
    },
    {
      name: "Ibrahim Malik",
      role: "AI Development Specialist",
      bio: "Ibrahim designs our AI-powered translation systems, creating algorithms specifically trained for Celtic language recognition that preserve cultural nuances and context.",
      image: "team-member-3"
    },
    {
      name: "Anita Odiaka",
      role: "VR and Immersive Experience Design Expert",
      bio: "With expertise in virtual reality development, Anita creates the immersive historical environments that bring ancient Celtic cities to life for language learning.",
      image: "team-member-4"
    },
    {
      name: "Eric Cheah",
      role: "Marketing and Preservation Advocate",
      bio: "Eric leads our outreach efforts, connecting our technology with Celtic diaspora communities, educational institutions, and cultural organizations to promote language preservation.",
      image: "team-member-5"
    }
  ];

  const advisors = [
    {
      name: "Prof. Maired Ní Mhaonaigh",
      role: "Academic Advisor",
      affiliation: "Celtic Studies Department, University of Cambridge",
      image: "advisor-1"
    },
    {
      name: "Dafydd ap Gwilym",
      role: "Cultural Heritage Consultant",
      affiliation: "Welsh Cultural Trust",
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
                  <a href="#" className="linkedin-icon">LinkedIn</a>
                  <a href="#" className="twitter-icon">Twitter</a>
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
        
        <div className="join-team">
          <h3>Want to Join Our Mission?</h3>
          <p>We're always looking for talented individuals passionate about language, technology, and cultural preservation.</p>
          <button className="careers-button">View Open Positions</button>
        </div>
      </div>
    </section>
  );
};

export default Team;