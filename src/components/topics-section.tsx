import React from "react";
import { Card, CardBody } from "@heroui/react";

export const TopicsSection: React.FC = () => {
  const topics = [
    {
      title: "Sports as an Economic Growth Engine",
      sessions: [
        "Panel Discussion: Investing in African Sports – Risks and Rewards",
        "Case Study: Successful sports investment models in Africa and globally",
        "Fireside Chat: The Role of Private Equity & Venture Capital in Sports"
      ]
    },
    {
      title: "Financing Sports Infrastructure & Development",
      sessions: [
        "Presentation: Public-Private Partnerships in Sports Infrastructure",
        "Panel Discussion: Building World-Class Facilities – The Investor's Perspective",
        "Workshop: Funding models for community-based sports programs"
      ]
    },
    {
      title: "Athlete Investment & Financial Sustainability",
      sessions: [
        "Roundtable Discussion: Athlete Branding & Business Ventures",
        "Presentation: Financial Literacy for Athletes – Securing Long-Term Wealth",
        "The Future of Sports Sponsorships & Endorsements in Africa"
      ]
    },
    {
      title: "Innovation & Emerging Trends in Sports Financing",
      sessions: [
        "Tech Talk: The Rise of Sports Tech Startups & Investment Opportunities",
        "Panel: Blockchain, NFTs & Fan Engagement – The New Revenue Streams",
        "Investment Pitch Session: Startups and sports businesses showcase investment opportunities"
      ]
    },
    {
      title: "Policy & Regulatory Frameworks",
      sessions: [
        "Debate: Should Governments Provide Tax Incentives for Sports Investors?",
        "Roundtable: Creating an Enabling Environment for Foreign Direct Investment in Sports",
        "Closing Remarks: Key takeaways and action points for the future of sports financing in Africa"
      ]
    }
  ];

  return (
    <section id="topics" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Key Discussion Topics</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-default-600">
            Explore the future of sports financing and investment in Africa through these engaging sessions.
          </p>
        </div>
        <div className="space-y-6">
          {topics.map((topic, index) => (
            <Card key={index} className="border-none dark:bg-content1">
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-4 gradient-text">{topic.title}</h3>
                <ul className="space-y-3">
                  {topic.sessions.map((session, sessionIndex) => (
                    <li key={sessionIndex} className="flex items-start">
                      <span className="text-primary text-xs mt-1.5 mr-2">●</span>
                      <span className="text-foreground">{session}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
