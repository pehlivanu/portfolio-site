import json

file_path = '/home/liviu/Desktop/LINKEDIN/portfolio-site/src/data/linkedin_profile.json'

with open(file_path, 'r') as f:
    data = json.load(f)

# Update Profile Headline and Summary
data['profile']['Headline'] = "Senior Fullstack Developer & Software Architect | 13+ Years Exp. | AI-Native Workflow | Java, Spring Boot, React, Next.js | Cloud & DevOps (Azure, Jenkins) | Enterprise Modernization Specialist"
data['profile']['Summary'] = "Senior Fullstack Developer and aspiring Software Architect with over 13 years of experience in the Fintech and Automotive sectors. I specialize in \"Enterprise Vibe Coding\"—modernizing legacy systems with an AI-Native workflow that accelerates development, documentation, and refactoring.\n\nCore Value Proposition:\n*   Modernization Expert: Proven track record of migrating SOA/Monoliths to Microservices (Spring Boot) and RESTful architectures.\n*   AI-Native Developer: Leveraging AI tools for efficient code maintenance, refactoring, and quality assurance.\n*   DevOps Champion: Transformed deployment cycles from 6 releases/year to Continuous Delivery using Jenkins, Docker, and Azure DevOps.\n*   Tech Stack: Java EE, Spring Boot, React, Next.js, TypeScript, SQL/NoSQL.\n\nI bridge the gap between robust enterprise requirements and modern, agile development practices, always driven by curiosity and a commitment to quality (TDD, Clean Code)."

# Update Experience Descriptions
for position in data['positions']:
    if position['Company Name'] == 'DAT Group':
        position['Description'] = "At DAT, I am involved in rewriting the Java EE backend and Javascript web applications using a modern technology stack.\n\nKey Achievements:\n*   Architecture: Led the transition from SOA to RESTful microservices architecture using Spring Boot.\n*   Modernization: Championed the adoption of JUnit 5, Testcontainers, OpenRewrite, and OpenAPI.\n*   DevOps: Improved deployment frequency from 6 releases/year to Continuous Delivery.\n*   Leadership: Advocated for Monorepo structures and Java Modules; promoted \"Unified Dashboard\" philosophy.\n*   Mentorship: Conducted workshops on REST API design, API-first development, and modern frontend frameworks (React)."
    
    elif position['Company Name'] == 'evia':
        position['Description'] = "Software Developer.\n\nKey Projects:\n*   Insurance (2016-2017): Maintained and developed critical Java EE applications on WebSphere (JSP, iText), ensuring stability for high-value business processes.\n*   Microsoft Delivery (2018): Built company intranet and automated onboarding using SharePoint, Microsoft Flow, and Forms.\n*   Modernization (2018-2020): Migrated modules to microservices (Micronaut/Java EE 8) and Angular 7; implemented CI/CD pipelines."
    
    elif position['Company Name'] == 'PRODYNA AG':
        position['Description'] = "Junior Software Developer.\n\nFocus: Liferay Portal development, Java EE 6, MySQL, and frontend integration (AlloyUI, Bootstrap)."
    
    elif position['Company Name'] == 'Alpine Electronics R&D Europe GmbH':
        position['Description'] = "Software Developer Internship.\n\nFocus: Test Automation Tools (C#, WPF), MVVM pattern implementation, and increasing UI performance for automotive testing frameworks."

with open(file_path, 'w') as f:
    json.dump(data, f, indent=2)

print("Successfully updated linkedin_profile.json")
