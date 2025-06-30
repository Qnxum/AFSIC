import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const AboutSection: React.FC = () => {
  const features = [
    {
      icon: "lucide:handshake",
      title: "Connecting Leaders",
      description: "Bringing together government officials, private investors, sports organizations, and other stakeholders to foster valuable partnerships."
    },
    {
      icon: "lucide:trending-up",
      title: "Driving Investment",
      description: "Encouraging strategic investments that will transform Africa's sports landscape and create sustainable economic growth."
    },
    {
      icon: "lucide:users",
      title: "Building Communities",
      description: "Exploring how sports investment can empower local communities, create jobs, and develop human capital."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-default-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">About The Conference</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-default-600">
            The African Institute of People Development will convene the Inaugural Africa Sports Investment Conference (AFSIC) 
            on the 30th and 31st of July 2025 in Sandton, Johannesburg. The conference aims to shine the spotlight on the 
            sports value-chain in Africa as a key growth area and provide a platform for key decision makers to engage on various 
            aspects of this important sector of the economy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none dark:bg-content1">
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4">
                  <Icon icon={feature.icon} className="text-white dark:text-foreground text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-gray-600 dark:text-default-600">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
