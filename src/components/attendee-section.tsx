import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const AttendeeSection: React.FC = () => {
  const attendees = [
    {
      icon: "lucide:trending-up",
      title: "Investors & Financial Institutions",
      description: "Banks, venture capitalists, private equity firms, and impact investors looking to explore sports as a profitable investment sector."
    },
    {
      icon: "lucide:landmark",
      title: "Government Representatives",
      description: "Ministries of sports, finance, and economic development to discuss policy support and infrastructure financing."
    },
    {
      icon: "lucide:medal",
      title: "Sports Organizations & Federations",
      description: "African and international sports governing bodies interested in funding and sustainable growth."
    },
    {
      icon: "lucide:handshake",
      title: "Corporate Sponsors & Brands",
      description: "Companies looking for strategic partnerships and sponsorship opportunities in African sports."
    },
    {
      icon: "lucide:lightbulb",
      title: "Entrepreneurs & Startups",
      description: "Sports tech innovators, academies, and new ventures exploring financial backing."
    },
    {
      icon: "lucide:activity",
      title: "Athletes & Sports Professionals",
      description: "Sports personalities interested in financial literacy, business investments, and career sustainability."
    },
    {
      icon: "lucide:tv",
      title: "Media & Broadcasters",
      description: "Platforms seeking content opportunities and sports media rights discussions."
    },
    {
      icon: "lucide:heart",
      title: "NGOs & Development Agencies",
      description: "Organizations leveraging sports for social and economic development."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-default-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Who Should Attend?</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-default-600">
            AFSIC brings together a diverse group of stakeholders from across the sports value chain.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attendees.map((attendee, index) => (
            <Card key={index} className="border-none dark:bg-content1">
              <CardBody className="p-5">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mb-4">
                  <Icon icon={attendee.icon} className="text-white dark:text-foreground text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{attendee.title}</h3>
                <p className="text-gray-600 dark:text-default-600">{attendee.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
