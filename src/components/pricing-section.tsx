import React from "react";
import { Card, CardBody, CardFooter, Button, Listbox, ListboxItem, Chip, Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import afsicConferenceData from "../data/pricingData";

export const PricingSection: React.FC = () => {
  const { delegatePackage, bankingDetails, contactInformation, registration } = afsicConferenceData;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Delegate Packages</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-default-600">
            Choose the package that best suits your needs for AFSIC 2025.
          </p>
          <div className="text-center mt-4">
            <Button
              color="primary"
              variant="flat"
              onPress={onOpen}
            >
              View Full Package Details
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Individual Package */}
          <Card className="p-6 flex flex-col justify-between dark:bg-content1">
            <CardBody>
              <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                {delegatePackage.pricing.individual.label}
              </h3>
              <p className="text-5xl font-extrabold text-primary text-center mb-6">
                {delegatePackage.pricing.individual.currency}
                {delegatePackage.pricing.individual.price.toLocaleString()}
              </p>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Package Inclusions:</h4>
              <Listbox
                aria-label="Package Inclusions"
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
                itemClasses={{
                  base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                }}
              >
                {delegatePackage.inclusions.map((inclusion, index) => (
                  <ListboxItem
                    key={index}
                    startContent={<Icon icon="heroicons-solid:check-circle" className="text-success text-xl" />}
                  >
                    <span className="text-foreground">{inclusion}</span>
                  </ListboxItem>
                ))}
              </Listbox>
            </CardBody>
            <CardFooter className="flex flex-col gap-4">
              <Divider className="dark:bg-default-100/80" />
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-700 dark:text-default-600 mb-2">
                  <span className="font-bold">{registration.callToAction}</span>
                </p>
                <Chip color="primary" variant="shadow" className="text-lg px-4 py-2">
                  {registration.deadline}
                </Chip>
              </div>
            </CardFooter>
          </Card>

          {/* Group Package */}
          <Card className="p-6 flex flex-col justify-between bg-primary-50 dark:bg-content1">
            <CardBody>
              <h3 className="text-2xl font-bold text-center mb-4 text-foreground">
                {delegatePackage.pricing.group.label}
              </h3>
              <p className="text-5xl font-extrabold text-primary text-center mb-2">
                {delegatePackage.pricing.group.currency}
                {delegatePackage.pricing.group.price.toLocaleString()}
              </p>
              <p className="text-lg font-bold text-success text-center mb-6">
                {delegatePackage.pricing.group.savingsLabel}
              </p>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Package Inclusions:</h4>
              <Listbox
                aria-label="Package Inclusions"
                className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
                itemClasses={{
                  base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
                }}
              >
                {delegatePackage.inclusions.map((inclusion, index) => (
                  <ListboxItem
                    key={index}
                    startContent={<Icon icon="heroicons-solid:check-circle" className="text-success text-xl" />}
                  >
                    <span className="text-foreground">{inclusion}</span>
                  </ListboxItem>
                ))}
              </Listbox>
            </CardBody>
            <CardFooter className="flex flex-col gap-4">
              <Divider className="dark:bg-default-100/80" />
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-700 dark:text-default-600 mb-2">
                  <span className="font-bold">{registration.callToAction}</span>
                </p>
                <Chip color="primary" variant="shadow" className="text-lg px-4 py-2">
                  {registration.deadline}
                </Chip>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Banking Details */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-md dark:bg-content1 dark:shadow-none">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Banking Details for Payment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-foreground">Account Name:</p>
              <p className="text-gray-600 dark:text-default-600">{bankingDetails.accountName}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Bank:</p>
              <p className="text-gray-600 dark:text-default-600">{bankingDetails.accountType}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Account Number:</p>
              <p className="text-gray-600 dark:text-default-600">{bankingDetails.accountNumber}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Reference Format:</p>
              <p className="text-gray-600 dark:text-default-600">{bankingDetails.reference}</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h3>
          <p className="text-lg text-gray-600 dark:text-default-600">Phone: <a href={`tel:${contactInformation.phone}`} className="text-primary hover:underline">{contactInformation.phone}</a></p>
          <p className="text-lg text-gray-600 dark:text-default-600">Email: 
            {contactInformation.emails.map((email, index) => (
              <React.Fragment key={index}>
                <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
                {index < contactInformation.emails.length - 1 && ", "}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="text-center mt-10">
          <Button color="primary" size="lg" as="a" href="#register">
            Register Now
          </Button>
        </div>
      </div>
      <PricingModal isOpen={isOpen} onClose={onClose} />
    </section>
  );
};

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalContent className="dark:bg-content1">
        <ModalHeader className="flex flex-col gap-1 text-foreground">Full Package Details</ModalHeader>
        <ModalBody>
          <Image
            src="/speakers/packages.jpeg"
            alt="Conference Packages"
            className="w-full h-auto"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
