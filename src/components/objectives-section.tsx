import React from "react";
import { Icon } from "@iconify/react";

export const ObjectivesSection: React.FC = () => {
  const objectives = [
    {
      title: "Attract Investments",
      description: "Encourage investors to see the sports industry as a viable economic sector."
    },
    {
      title: "Promote Sustainable Development",
      description: "Showcase how sports financing can drive long-term economic and social impact in Africa."
    },
    {
      title: "Foster Partnerships",
      description: "Connect governments, private investors, and stakeholders for collaborative projects."
    },
    {
      title: "Empower Local Economies",
      description: "Demonstrate how sports can be a vehicle for job creation and economic growth."
    },
    {
      title: "Develop Policy Frameworks",
      description: "Engage policymakers in discussions on regulations and incentives for sports-related investments."
    },
    {
      title: "Drive Innovation in Sports Financing",
      description: "Highlight emerging financial models for the sports industry."
    }
  ];

  return (
    <section id="objectives" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Conference Objectives</h2>
            <div className="w-16 h-1 gradient-bg mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-default-600 mb-6">
              The African Sports Investment Conference aims to create a platform for strategic discussions and partnerships that will 
              transform the continent's sports ecosystem.
            </p>
            <ul className="space-y-4">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 gradient-bg rounded-full flex items-center justify-center mt-1">
                    <Icon icon="lucide:check" className="text-white dark:text-foreground text-xs" />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-foreground">{objective.title}</h4>
                    <p className="text-gray-600 dark:text-default-600">{objective.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 pl-0 md:pl-8">
            <img 
              src="https://img.heroui.chat/image/sports?w=600&h=450&u=conference1" 
              alt="Conference Objectives" 
              className="rounded-lg shadow-lg object-cover w-full h-[450px] dark:bg-content1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
