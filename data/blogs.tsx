// File: data/blogs.ts

export const blogs = [
  {
    id: "web-dev-success",
    title: "Blazing Trails to Success in Web Development",
    excerpt: "My experience as a keynote speaker at the ULM College Symposium sharing insights on web development and project management.",
    date: "October 3, 2023",
    author: "Abhishek Amgain",
    categories: ["Web Development", "Project Management", "Leadership"],
    readTime: "4 min read",
    image: "/abhishek_led.png",
    content: `
    <section class="mb-8">
      <p class="text-lg text-muted-foreground leading-relaxed">Standing before 100 students and faculty at the University of Louisiana Monroe, I realized how far my web development journey had taken me. My keynote <strong>"Blazing Trails to Success in Web Development and Mobile Development"</strong> distilled two years of professional experience into actionable insights.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2">Core Framework for Success</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-6">
        <div class="bg-background/50 p-6 rounded-xl border border-border hover:border-primary transition-all">
          <h3 class="font-bold text-primary mb-3">1. Career Launchpad</h3>
          <ul class="space-y-2 text-muted-foreground">
            <li>• Building a standout portfolio</li>
            <li>• Networking that opens doors</li>
            <li>• First-job survival strategies</li>
          </ul>
        </div>
        <div class="bg-background/50 p-6 rounded-xl border border-border hover:border-primary transition-all">
          <h3 class="font-bold text-primary mb-3">2. Developer Toolkit</h3>
          <ul class="space-y-2 text-muted-foreground">
            <li>• Figma for client collaboration</li>
            <li>• React component architecture</li>
            <li>• Git workflow for teams</li>
          </ul>
        </div>
        <div class="bg-background/50 p-6 rounded-xl border border-border hover:border-primary transition-all">
          <h3 class="font-bold text-primary mb-3">3. Client Success</h3>
          <ul class="space-y-2 text-muted-foreground">
            <li>• Requirement gathering</li>
            <li>• Milestone communication</li>
            <li>• Delivery best practices</li>
          </ul>
        </div>
      </div>

      <p class="text-muted-foreground">The live demo showing our <code class="bg-muted px-2 py-1 rounded">git-flow</code> process for client projects generated particularly engaged questions, with several students staying afterward to discuss version control strategies.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2">Transformative Moments</h2>

      <p class="text-muted-foreground">The conversations with the audience reinforced why vulnerability in tech talks matters. The most meaningful connections happened during the time, where I got to:</p>
      
      <ul class="list-disc pl-5 space-y-2 my-4 text-muted-foreground">
        <li>Talk about the tools that I use on a daily basis.</li>
        <li>Discuss how the daily work frame for me looks.</li>
        <li>Learn about ULM's new ideas and views from students.</li>
      </ul>
    </section>

    <div class="mt-8 pt-6 border-t border-border">
      <h3 class="font-bold text-primary mb-3">Key Takeaways</h3>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#TechEducation</span>
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#CareerDevelopment</span>
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#ULM</span>
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#WebDev</span>
      </div>
    </div>
  `
  },
  {
    id: "biomedical-research-2024",
    title: "Biomedical Research and Industry Day 2024",
    excerpt: "Presenting cancer disparities research and learning from leading experts at ULM's Biomedical Research event.",
    date: "October 20, 2024",
    author: "Abhishek Amgain",
    categories: ["Biomedical Research", "Data Analysis", "Healthcare"],
    readTime: "5 min read",
    image: "/abhishek_braid.png",
    content: `
      <section class="mb-8">
        <p class="text-lg text-muted-foreground leading-relaxed">The annual Biomedical Research and Industry Day at ULM transformed our campus into a hub of scientific innovation, with researchers from across Louisiana converging to share breakthroughs that bridge laboratory discoveries and patient care.</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2">Keynote Speakers</h2>
        <div class="bg-background/50 p-6 rounded-xl border border-border">
          <h3 class="font-bold text-primary mb-2">Dr. El Sayed (ULM) & Dr. Stevenson (LSU Health)</h3>
          <p class="text-muted-foreground">Their talks highlighted the critical link between academic research and tangible clinical outcomes, inspiring a new wave of collaborative projects.</p>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2">Our Research Contribution</h2>
        
        <div class="bg-primary/10 p-6 rounded-xl border-l-4 border-primary mb-6">
          <h3 class="font-bold text-primary mb-2">"Cancer Disparities Among African Americans in Louisiana"</h3>
          <p class="text-muted-foreground">Collaborating with Dr. Sreekumari, we analyzed five years of Louisiana Tumor Registry data (2018-2023) using Python's data science stack:</p>
          <div class="grid grid-cols-3 gap-4 mt-4">
            <div class="text-center">
              <p class="text-3xl font-bold text-primary">23%</p>
              <p class="text-sm text-muted-foreground">Higher rural mortality</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-primary">42%</p>
              <p class="text-sm text-muted-foreground">Later-stage diagnoses</p>
            </div>
            <div class="text-center">
              <p class="text-3xl font-bold text-primary">5</p>
              <p class="text-sm text-muted-foreground">Parishes with critical gaps</p>
            </div>
          </div>
        </div>

        <p class="text-muted-foreground">Our interactive visualizations (created with Seaborn and Plotly) revealed unexpected geographic patterns that are now informing regional healthcare policy decisions.</p>
      </section>

      <div class="mt-8 pt-6 border-t border-border">
        <h3 class="font-bold text-primary mb-3">Research Impact</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#HealthEquity</span>
          <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#DataScience</span>
          <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#CancerResearch</span>
        </div>
      </div>
    `
  },
  {
    id: "las-award-2025",
    title: "Best Undergraduate Oral Presentation Award",
    excerpt: "Winning recognition at LAS conference for my web-based subnetting instruction tool.",
    date: "March 15, 2025",
    author: "Abhishek Amgain",
    categories: ["Award", "Networking", "Education"],
    readTime: "4 min read",
    image: "/abhishek.png",
    content: `
     <section class="mb-8">
        <div class="bg-primary/10 p-6 rounded-xl text-center border border-primary/50 mb-6">
          <p class="text-2xl font-bold text-foreground mb-1">🏆 Best Undergraduate Oral Presentation</p>
          <p class="text-lg text-muted-foreground">Louisiana Academy of Sciences</p>
          <p class="text-sm text-muted-foreground">Louisiana State University Alexandria | March 15, 2025</p>
        </div>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2">About the Project</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 class="font-bold text-primary mb-2">Subnetting Visualization Tool</h3>
            <p class="text-muted-foreground">Developed under Dr. Wiedemeier's mentorship, this interactive web application helps students master IP subnetting through:</p>
            <ul class="list-disc pl-5 space-y-2 mt-2 text-muted-foreground">
              <li>Real-time binary/visual feedback</li>
              <li>Adaptive difficulty scaling</li>
              <li>Gamified learning modules</li>
            </ul>
          </div>
          <div class="bg-background/50 p-4 rounded-xl border border-border">
            <h3 class="font-bold text-primary mb-2">Technical Stack</h3>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-muted rounded-full text-sm">HTML</span>
              <span class="px-3 py-1 bg-muted rounded-full text-sm">CSS</span>
              <span class="px-3 py-1 bg-muted rounded-full text-sm">JavaScript</span>
              <span class="px-3 py-1 bg-muted rounded-full text-sm">Pedagogy</span>
            </div>
          </div>
        </div>

        <p class="text-muted-foreground">The 15-minute presentation demonstrated how our tool improved subnetting comprehension by 62% in pilot studies at three Louisiana universities.</p>
      </section>

      <div class="mt-8 pt-6 border-t border-border">
        <h3 class="font-bold text-primary mb-3">Project Legacy</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#LAS2025</span>
          <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#Networking</span>
          <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#STEMEducation</span>
        </div>
      </div>
      `
  },
  {
    id: "hawkathon-2025",
    title: "Organizing Annual Hawkathon 2025: Tech for Community",
    excerpt: "Led the 3-day GDSC ULM Hawkathon 2025 as Vice President, empowering students to build AI solutions for community challenges.",
    date: "March 15-17, 2025",
    author: "Abhishek Amgain",
    categories: ["Event Organization", "AI", "Leadership", "Community Building"],
    readTime: "5 min read",
    image: "/hawkathon.png",
    content: `
    <section class="mb-8">
      <p class="text-lg text-muted-foreground leading-relaxed">As Vice President of GDSC ULM, orchestrating the <strong>2nd Annual Hawkathon</strong> with ACM Student Chapter was both challenging and immensely rewarding. Our theme <strong>"Tech for Community: Build with AI"</strong> brought together 60+ students to solve real-world problems through technology.</p>
    </section>
  
    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-foreground border-b border-border pb-2">Event Highlights</h2>
      
      <div class="grid md:grid-cols-3 gap-6 mb-6">
        <div class="bg-background/50 p-6 rounded-xl border border-border hover:border-primary transition-all">
          <h3 class="font-bold text-primary mb-3">1. The Scale</h3>
          <ul class="space-y-2 text-muted-foreground">
            <li>• 60+ participants</li>
            <li>• 15 projects submitted</li>
            <li>• 10+ industry mentors</li>
            <li>• 3 days of innovation</li>
          </ul>
        </div>
        <div class="bg-background/50 p-6 rounded-xl border border-border hover:border-primary transition-all">
          <h3 class="font-bold text-primary mb-3">2. My Role</h3>
          <ul class="space-y-2 text-muted-foreground">
            <li>• Master of Ceremonies</li>
            <li>• Logistics coordination</li>
            <li>• Judging criteria development</li>
            <li>• Sponsor relations</li>
          </ul>
        </div>
        <div class="bg-background/50 p-6 rounded-xl border border-border hover:border-primary transition-all">
          <h3 class="font-bold text-primary mb-3">3. Impact</h3>
          <ul class="space-y-2 text-muted-foreground">
            <li>• Industry-Level Projects</li>
            <li>• Strengthened industry ties</li>
          </ul>
        </div>
      </div>
  
      <p class="text-muted-foreground">The energy during the final presentations was electric, especially when teams demonstrated their <code class="bg-muted px-2 py-1 rounded">AI-powered solutions</code> for community-focused challenges.</p>
    </section>
  
    <div class="mt-8 pt-6 border-t border-border">
      <h3 class="font-bold text-primary mb-3">Event Legacy</h3>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#Hawkathon2025</span>
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#AIForGood</span>
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#Leadership</span>
      </div>
    </div>
    `
  },
  {
    id: "nexus-tech-finalist",
    title: "Finalist at Louisiana's Premier Nexus Technology Competition",
    excerpt: "Showcased RhymeAI at Louisiana's first statewide tech competition, earning finalist honors among 80+ teams.",
    date: "May 17, 2025",
    author: "Abhishek Amgain",
    categories: ["Artificial Intelligence", "Tech Competitions", "Innovation"],
    readTime: "4 min read",
    image: "/RHYMEAI.png",
    content: `
    <div class="space-y-6">
      <p class="text-lg text-muted-foreground leading-relaxed">Presenting RhymeAI - our AI-powered 24/7 event host platform - at Louisiana's inaugural Nexus Technology Competition was a career-defining moment. Selected as a finalist from 80+ teams, we demonstrated how our solution revolutionizes virtual events through natural conversation flow and real-time engagement analytics.</p>

      <div class="p-6 bg-background/50 rounded-xl border border-border">
        <h3 class="font-bold text-primary mb-3">What Made RhymeAI Stand Out</h3>
        <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Context-aware memory system for coherent conversations</li>
          <li>Seamless integration with Zoom, Teams, and web platforms</li>
          <li>Customizable personality profiles for different event types</li>
          <li>Built-in moderation system for ethical AI concerns</li>
        </ul>
      </div>

      <p class="text-muted-foreground">The competition's speaker sessions profoundly shaped my approach to AI development, particularly around responsible innovation. Networking with Louisiana's tech leaders provided invaluable feedback about scaling our solution while maintaining its human-centric design.</p>

      <div class="flex flex-wrap gap-2 mt-6">
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#AIInnovation</span>
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#TechShowcase</span>
        <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">#StartupJourney</span>
      </div>
    </div>
    `
  }
];
