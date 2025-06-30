import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const OutcomesSection: React.FC = () => {
  const outcomes = [
    {
      icon: "lucide:trending-up",
      title: "Increased Investor Interest",
      description: "Greater investor interest in African sports projects, creating new funding opportunities."
    },
    {
      icon: "lucide:handshake",
      title: "New Partnerships",
      description: "Funding agreements for sports infrastructure and athlete development programs."
    },
    {
      icon: "lucide:gavel",
      title: "Policy Recommendations",
      description: "Actionable recommendations for government support in sports financing."
    },
    {
      icon: "lucide:lightbulb",
      title: "Innovative Funding Solutions",
      description: "New approaches to funding grassroots and elite sports programs across Africa."
    },
    {
      icon: "lucide:graduation-cap",
      title: "Empowered Athletes",
      description: "Athletes and sports entrepreneurs equipped with financial literacy and business knowledge."
    },
    {
      icon: "lucide:globe",
      title: "Africa as a Global Hub",
      description: "Strengthened Africa's position as a global sports investment destination."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-default-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Expected Outcomes</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-default-600">
            AFSIC aims to deliver concrete results that will advance Africa's sports ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="border-none dark:bg-content1">
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4">
                  <Icon icon={outcome.icon} className="text-white dark:text-foreground text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{outcome.title}</h3>
                <p className="text-gray-600 dark:text-default-600">{outcome.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
