import React from "react";
import Tree from "react-d3-tree";
import "../public/customTree.css";
const orgChart = {
  name: "Skills",
  children: [
    {
      name: "Data Science",
      children: [
        {
          name: "Programming Language",
          children: [
            {
              name: "Scala",
            },
            {
              name: "R",
              attributes: {
                department: "Assembly",
              },
            },
            {
              name: "Python",
            },
          ],
        },
        {
          name: "Machine Learning",
          children: [
            {
              name: "Data science",
            },
            {
              name: "Statistics",
            },
            {
              name: "Machine learning",
            },
          ],
        },
        {
          name: "Deep Learning",
          children: [
            {
              name: "Deep learning",
            },
            {
              name: "Artificial intelligence (AI)",
            },
            {
              name: "Natural language processing (NLP)",
            },
            {
              name: "TensorFlow",
            },
          ],
        },
        {
          name: "Big Data",
          children: [
            {
              name: "Big data",
            },
            { name: "NoSQL" },
            { name: "ApacheHadoop" },
            { name: "ApacheSpark" },
            { name: "MongoDB" },
            { name: "ApacheHive" },
            { name: "ApacheHBase" },
            { name: "ApacheCassandra" },
            { name: "SAPVora" },
          ],
        },
        {
          name: "Data Analysis",
          children: [
            {
              name: "Data modeling",
            },
            { name: "Data visualization" },
            { name: "Business intelligence (BI)" },
            { name: "Mining" },
            { name: "Data analysis" },
          ],
        },
      ],
    },
    {
      name: "Product/Project Management",
      children: [
        {
          name: "tools",
          children: [
            { name: "MicrosoftExcel" },
            { name: "MicrosoftPowerPoint" },
            { name: "MicrosoftOffice" },
            { name: "MicrosoftWord" },
            { name: "MicrosoftOutlook" },
            { name: "MicrosoftVisio" },
            { name: "ITIL(InformationTechnologyInfrastructureLibrary)" },
            { name: "SAPBusinessByDesign" },
            { name: "ITservicemanagement(ITSM)" },
          ],
        },
        {
          name: "Tech",
          children: [
            { name: "End-to-End E2E Testing" },
            { name: "Project management" },
            { name: "Product management" },
            { name: "Technical analysis" },
          ],
        },
        {
          name: "Soft",
          children: [
            { name: "Decision-making" },
            { name: "Technical Leadership" },
            { name: "Strategic thinking" },
            { name: "Collaboration" },
          ],
        },
      ],
    },
    {
      name: "Business",
      children: [
        {
          name: "SAP",
          children: [
            { name: "SAP NetWeaver" },
            { name: "SAP Software Solutions " },
            { name: "SAP S/4HANA Finance" },
            { name: "SAP Core Data Services (CDS) " },
            { name: "SAP Sales and Distribution (SD)" },
            { name: "SAP PI " },
            { name: "Web Dynpro " },
            { name: "SAP FI " },
            { name: "SAP CRM" },
            { name: "SAP IDoc " },
            { name: "SAP BusinessObjects" },
            { name: "SAP Business Suite " },
          ],
        },
        {
          name: "General",
          children: [
            { name: "Business process " },
            { name: "Total cost of ownership (TCO)" },
            { name: "Design Specifications (DS) " },
          ],
        },
      ],
    },
    {
      name: "Design",
      children: [
        {
          name: "Tool",
          children: [
            { name: "Adobe Photoshop" },
            { name: "Adobe Illustrator" },
            { name: "Sketch " },
          ],
        },
        {
          name: "Concept",
          children: [
            { name: "Interaction Design " },
            { name: "Visual Design" },
          ],
        },
      ],
    },
    {
      name: "Computer Programming",
      children: [
        {
          name: "Programming Language",
          children: [
            { name: "Java " },
            { name: "C" },
            { name: "C++" },
            { name: "Python " },
            { name: "JavaScript " },
            { name: "C Sharp" },
            { name: "Scala" },
            { name: "Perl " },
            { name: "Go " },
            { name: "Ruby " },
            { name: "Groovy " },
            { name: "JSON " },
            { name: ".NET " },
            { name: "PHP" },
            { name: "Swift" },
            { name: "Objective-C" },
            { name: "CSS" },
            { name: "HTML " },
            { name: "Scripting language " },
            { name: "TypeScript " },
            { name: "ABAP " },
            { name: "HTML5" },
            { name: "Scala" },
            { name: "R" },
            { name: "XML" },
            { name: "Node.js" },
          ],
        },
        {
          name: "Virtualization",
          children: [
            { name: "Docker " },
            { name: "Kubernetes " },
            { name: "VMware " },
            { name: "Red Hat Software " },
            { name: "SUSE Linux distributions " },
            { name: "CentOS " },
            { name: "Container" },
            { name: "Containerization " },
            { name: "Apache Mesos " },
            { name: "Virtualization " },
            { name: "Container technology " },
          ],
        },
        {
          name: "DevOps",
          children: [
            { name: "DevOps " },
            { name: "Agile software development " },
            { name: "Scrum" },
            { name: "Continuous integration (CI)" },
            { name: "Continuous delivery (CD) " },
            { name: "CI/CD Pipeline " },
            { name: "CI/CD tools" },
            { name: "TeamCity " },
            { name: "Jira " },
            { name: "Chef (software)" },
            { name: "Kanban " },
            { name: "Behavioral Driven Development (BDD)" },
            { name: "Lean-Agile process " },
            { name: "Lean software development" },
            { name: "CloudOps " },
          ],
        },
        {
          name: "Software Development",
          children: [
            { name: "Software development " },
            { name: "Software design pattern" },
            { name: "AngularJS" },
            { name: "React" },
            { name: "Frontend Frameworks" },
            { name: "JavaScript Frameworks" },
            { name: "Apache Maven " },
            { name: "Spring Boot" },
            { name: "Eclipse" },
            { name: "Gerrit " },
            { name: "Backend Development" },
            { name: "Apache Subversion (SVN)" },
            { name: "Jakarta Server Pages (JSP) " },
            { name: "Perforce " },
            { name: "Apache Ant " },
            { name: "Redux" },
            { name: "Git" },
            { name: "SAP Fiori" },
            { name: "SAPUI5 " },
            { name: "User Experience (UX) Design" },
            { name: "User Interface (UI) Design " },
            { name: "Jenkins" },
            { name: "Application development" },
            { name: "Version control" },
            { name: "Java EE" },
            { name: "Test-driven development (TDD)" },
            { name: "LAMP " },
            { name: "Spring Framework " },
            { name: "WildFly" },
            { name: "GitHub " },
            { name: "jQuery " },
            { name: "Confluence " },
            { name: "Microservices" },
          ],
        },
        {
          name: "Web Development",
          children: [
            { name: "Web service" },
            { name: "Web design " },
            { name: "Web application" },
            { name: "Front-end web development" },
            { name: "Web server " },
            { name: "Web Technology " },
            { name: "Web development" },
            { name: "Ajax " },
            { name: "Ruby on Rails" },
            { name: "Java EE Web Application" },
            { name: "Apache Struts" },
            { name: "Jakarta Servlet" },
            { name: "Apache Tomcat" },
            { name: "SOAP " },
          ],
        },
        {
          name: "Software Design",
          children: [
            { name: "Object-oriented analysis and design (OOAD) " },
            { name: "Software Build Process " },
            { name: "Software design" },
            { name: "Software architecture" },
            { name: "Service-oriented architecture (SOA)" },
            { name: "Unified Modeling Language (UML)" },
            { name: "Model View Controller (MVC)" },
            { name: "Object-oriented design " },
            { name: "Object model " },
            { name: "Extreme programming" },
            { name: "IT integration " },
            { name: "Performance tuning " },
            { name: "Bootstrapping" },
          ],
        },
        {
          name: "Network",
          children: [
            { name: "Internet Protocol (IP) " },
            { name: "Domain Name System (DNS) " },
            { name: "Load balancing " },
            { name: "Computer Network Technology" },
            { name: "Software-defined networking (SDN)" },
            { name: "Zabbix " },
            { name: "Cisco Systems" },
            { name: "Encryption " },
            { name: "Hypertext Transfer Protocol (HTTP) " },
          ],
        },
        {
          name: "Distributed System",
          children: [
            { name: "Distributed computing" },
            { name: "Apache Kafka " },
            { name: "RabbitMQ " },
          ],
        },
        {
          name: "Secutiry",
          children: [
            { name: "Firewall " },
            { name: "SSL (Secure Sockets Layer) " },
            { name: "Security Assertion Markup Language (SAML)" },
            { name: "Software Security" },
          ],
        },
        {
          name: "Operating System",
          children: [
            { name: "Operating System (OS)" },
            { name: "Linux" },
            { name: "Unix " },
            { name: "Microsoft Windows" },
            { name: "macOS X" },
            { name: "PowerShell " },
            { name: "Shell script " },
            { name: "Bash " },
            { name: "iOS" },
            { name: "Android" },
          ],
        },
        {
          name: "Cloud",
          children: [
            { name: "Cloud Development" },
            { name: "OpenStack" },
            { name: "Cloud computing" },
            { name: "Cloud platform " },
            { name: "Platform as a Service (PaaS) " },
            { name: "Software as a Service (SaaS) " },
            { name: "Amazon Web Services (AWS)" },
            { name: "Google Cloud Platform" },
            { name: "Alibaba Cloud" },
            { name: "Microsoft Azure" },
            { name: "SAP Cloud Platform " },
            { name: "Lightweight Directory Access Protocol (LDAP) " },
            { name: "Cloud Foundry" },
            { name: "SAP HANA Cloud Platform (HCP)" },
            { name: "Splunk Technology" },
            { name: "Cloud-based Solution " },
          ],
        },
        {
          name: "Database",
          children: [
            { name: "RDBMS (Relational Database Management System)" },
            { name: "Oracle " },
            { name: "Microsoft SQL Server " },
            { name: "SAP S/4HANA" },
            { name: "MySQL" },
            { name: "SQL" },
            { name: "IBM Db2" },
            { name: "PL/SQL " },
            { name: "SAP HANA " },
            { name: "Data modeling" },
            { name: "Database Management" },
            { name: "Database design" },
            { name: "Query optimization " },
            { name: "Concurrency control" },
            { name: "Hibernate" },
            { name: "Object–relational mapping (ORM)" },
            { name: "Jakarta Persistence (JPA)" },
            { name: "Java Database Connectivity (JDBC)" },
            { name: "PostgreSQL " },
            { name: "Data warehouse " },
            { name: "SAP ASE" },
          ],
        },
        {
          name: "Testing",
          children: [
            { name: "Software testing " },
            { name: "Test automation" },
            { name: "Unit testing " },
            { name: "JUnit" },
            { name: "Selenium " },
            { name: "Software performance testing " },
            { name: "Integration testing" },
            { name: "Apache JMeter" },
            { name: "Test management" },
          ],
        },
        {
          name: "QA",
          children: [
            { name: "Quality Assurance (QA) " },
            { name: "Quality assurance" },
            { name: "Code review" },
          ],
        },
        {
          name: "API",
          children: [
            { name: "API (Application Programming Interface)" },
            { name: "RESTful API" },
            { name: "Swagger" },
            { name: "Representational state transfer (REST) " },
            { name: "Open Data Protocol (OData) " },
          ],
        },
        {
          name: "Configuration",
          children: [
            { name: "Configuration management " },
            { name: "Ansible" },
            { name: "Terraform" },
            { name: "Puppet (software)" },
          ],
        },
        {
          name: "Basic",
          children: [
            { name: "Computer Programming " },
            { name: "Algorithm" },
            { name: "Cache" },
            { name: "Object-oriented programming (OOP)" },
            { name: "Open source" },
            { name: "Multithreading " },
            { name: "Memory management" },
            { name: "Automation " },
            { name: "Architecture " },
            { name: "Coding skills" },
            { name: "Computer multitasking" },
            { name: "Debugging" },
            { name: "Data structure " },
            { name: "File system" },
          ],
        },
      ],
    },
    {
      name: "SAP",
      children: [
        {
          name: "Product",
          children: [
            { name: "SAP Hybris " },
            { name: "SAP MaxDB" },
            { name: "SAP SuccessFactors " },
            { name: "SAP ERP" },
            { name: "SAP Ariba" },
            { name: "SAP HCM" },
            { name: "SAP Concur " },
          ],
        },
      ],
    },
    {
      name: "Other",
      children: [
        {
          name: "Personal",
          children: [
            { name: "Analytical skill " },
            { name: "Design thinking" },
            { name: "Result Orientation " },
            { name: "Psychoanalysis " },
            { name: "Customer focus " },
          ],
        },
        {
          name: "Education",
          children: [{ name: "B.Tech" }],
        },
        {
          name: "Other",
          children: [
            { name: "Customer relationship management (CRM) " },
            { name: "Jakarta Messaging (JMS)" },
            { name: "Payment Card Industry Data Security Standard (PCI DSS)" },
            { name: "Elasticsearch" },
          ],
        },
      ],
    },
  ],
};

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: "200em", height: "200em" }}>
      <Tree
        data={orgChart}
        initialDepth="2"
        nodeSize={{ x: 300, y: 50 }}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        seperation={{ nonSiblings: 0, siblings: 0 }}
      />
    </div>
  );
}
