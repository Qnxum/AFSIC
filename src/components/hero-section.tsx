import React from "react";
import { Button, Card, CardBody } from "@heroui/react";
import { CountdownTimer } from "./countdown-timer";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="gradient-bg pt-24 pb-16 md:pt-28 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-foreground leading-tight mb-4">
              Africa Sports Investment Conference
            </h1>
            <h2 className="text-2xl md:text-3xl text-white dark:text-foreground font-light mb-6">
              Sustainable Development Through Sports Financing
            </h2>
            <p className="text-white dark:text-foreground text-lg mb-8">
              30 JULY 2025 | SANDTON, JOHANNESBURG, SOUTH AFRICA
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                as="a"
                href="#register"
                color="default"
                className="bg-white text-gray-800 font-medium hover:bg-gray-100 dark:bg-default-50 dark:text-default-900 dark:hover:bg-default-200"
              >
                Register Now
              </Button>
              <Button
                as="a"
                href="#about"
                variant="bordered"
                className="border-white text-white font-medium hover:bg-white hover:text-gray-800 dark:border-default-500 dark:text-default-500 dark:hover:bg-default-500 dark:hover:text-default-foreground"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Card className="bg-white shadow-lg dark:bg-content1">
              <CardBody className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Event Countdown</h3>
                  <p className="text-gray-600 dark:text-default-600">Join us for this landmark event</p>
                </div>
                <CountdownTimer targetDate="2025-07-30T09:00:00" />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
