import React from "react";
import { Card, CardBody, CardFooter, Avatar, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

export const SpeakersSection: React.FC = () => {
  const [activeSpeakerIndex, setActiveSpeakerIndex] = React.useState<number | null>(null);
  const { isOpen: isAllSpeakersModalOpen, onOpen: onOpenAllSpeakersModal, onClose: onCloseAllSpeakersModal } = useDisclosure();

  const speakers = [
    {
      name: "Nelson Pule",
      role: "FOUNDER, BLACKSOIL CLOTHING BRAND",
      image: "/speakers/Nelson Pule.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Thabo Phiri",
      role: "HEAD OF MARKETING AND BRAND, MAMELODI SUNDOWNS F.C.",
      image: "/speakers/THABO PHIRI.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Mandla Ntlanganiso",
      role: "CHIEF OPERATIONS OFFICER, BOXING SOUTH AFRICA",
      image: "/speakers/MANDLANTLANGANISO.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Sgwili Gumede",
      role: "DIRECTOR, THE SPORT BOARDROOM",
      image: "/speakers/SGWILI GUMEDE.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Gerrit Davids",
      role: "LEAD ADVISOR, TARANISO ADVISORY",
      image: "/speakers/GERRIT DAVIDS.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Tommy Makhobela",
      role: "AWARD-WINNING DYNAMIC BUSINESS DEVELOPER; COMMERCIAL STRATEGIST",
      image: "/speakers/TOMMY MAKHOBELA.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Thabo Andile Mhlanga",
      role: "MANAGING DIRECTOR, AFRICAN INSTITUTE OF PEOPLE DEVELOPMENT",
      image: "/speakers/THABO ANDILE IMHLANGA.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Sudesh Singh",
      role: "FOOTBALL STRATEGIST; SUPERSPORT; SPORTS DIRECTOR, SA FOOTBALL COACHES ASSOCIATION",
      image: "/speakers/SUDESH SINGH.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Monde Ndlovu",
      role: "MANAGING DIRECTOR, BLACK MANAGEMENT FORUM (BMF); V20 ADVOCACY+EQUALITY STREAM CO-LEAD",
      image: "/speakers/MONDE NDLOVU.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Michael Bende",
      role: "CHAIRMAN, GLOBAL ESPORTS FEDERATION; CEO, MBENDE HOLDINGS",
      image: "/speakers/MICHAEL BENDE.png",
      bio: "Speaker at Africa Sports Investment Conference"
    },
    {
      name: "Sumayya Khan",
      role: "CEO, SOUTH AFRICAN INSTITUTE FOR DRONE SPORTS (SAIDS)",
      image: "/speakers/SUMAYYA KHAN.png",
      bio: "Speaker at Africa Sports Investment Conference"
    }
  ];

  return (
    <section id="speakers" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Speakers & Presenters</h2>
          <div className="w-16 h-1 gradient-bg mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-default-600">
            Learn from leading experts in sports financing, investment, and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => {
            const [isExpanded, setIsExpanded] = React.useState(false);
            const jpegImage = speaker.name === "Michael Bende"
              ? "/speakers/MICHAEL BENDER.jpeg"
              : speaker.image.replace(".png", ".jpeg");

            return (
              <Card key={index} className="border-none dark:bg-content1">
                <CardBody className="pt-6 px-6 pb-0 flex flex-col items-center text-center">
                  {isExpanded ? (
                    <Image
                      src={jpegImage}
                      alt={speaker.name}
                      className="w-full h-auto rounded-lg mb-4"
                    />
                  ) : (
                    <Avatar
                      src={speaker.image}
                      className="w-32 h-32 mb-4 cursor-pointer"
                      isBordered
                      color="primary"
                      onClick={() => setActiveSpeakerIndex(index)}
                    />
                  )}
                  <h3 className="text-xl font-bold text-foreground">{speaker.name}</h3>
                  <p className="text-primary font-medium mb-2">{speaker.role}</p>
                  <p className={`text-gray-600 mb-4 dark:text-default-600 ${isExpanded ? 'text-lg leading-relaxed' : 'text-base'}`}>
                    {speaker.bio}
                  </p>
                </CardBody>
                <CardFooter className="flex justify-center gap-4 pt-0">
                  <Button isIconOnly size="sm" variant="light" aria-label="Twitter">
                    <Icon icon="logos:twitter" className="text-lg" />
                  </Button>
                  <Button isIconOnly size="sm" variant="light" aria-label="LinkedIn">
                    <Icon icon="logos:linkedin-icon" className="text-lg" />
                  </Button>
                  <Button isIconOnly size="sm" variant="light" aria-label="Toggle bio size" onClick={() => setIsExpanded(!isExpanded)}>
                    <Icon icon={isExpanded ? "lucide:chevron-up" : "lucide:chevron-down"} className="text-lg" />
                  </Button>
                  <Button isIconOnly size="sm" variant="light" aria-label="View Speaker" onClick={() => setActiveSpeakerIndex(index)}>
                    <Icon icon="heroicons-outline:eye" className="text-lg" />
                  </Button>
                </CardFooter>
                <Modal isOpen={activeSpeakerIndex === index} onClose={() => setActiveSpeakerIndex(null)} size="lg">
                  <ModalContent className="dark:bg-content1">
                    <ModalHeader className="flex flex-col gap-1 text-foreground">{speaker.name}</ModalHeader>
                    <ModalBody>
                      <Image
                        src={jpegImage}
                        alt={speaker.name}
                        className="w-full h-auto"
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={() => setActiveSpeakerIndex(null)}>
                        Close
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button color="primary" size="lg" onClick={onOpenAllSpeakersModal}>
            View All Speakers
          </Button>
        </div>

        <Modal isOpen={isAllSpeakersModalOpen} onClose={onCloseAllSpeakersModal} size="5xl" scrollBehavior="inside">
          <ModalContent className="dark:bg-content1">
            <ModalHeader className="flex flex-col gap-1 text-foreground">All Speakers</ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {speakers.map((speaker, index) => {
                  const jpegImage = speaker.name === "Michael Bende"
                    ? "/speakers/MICHAEL BENDER.jpeg"
                    : speaker.image.replace(".png", ".jpeg");

                  return (
                    <Card key={index} className="border-none dark:bg-content1 cursor-pointer" onClick={() => {
                      setActiveSpeakerIndex(index);
                      onCloseAllSpeakersModal();
                    }}>
                      <CardBody className="pt-6 px-6 pb-0 flex flex-col items-center text-center">
                        <Image
                          src={jpegImage}
                          alt={speaker.name}
                          className="w-full h-auto rounded-lg mb-4"
                        />
                        <h3 className="text-lg font-bold text-foreground">{speaker.name}</h3>
                        <p className="text-primary font-medium text-sm mb-2">{speaker.role}</p>
                        <p className="text-gray-600 mb-4 dark:text-default-600 text-center">{speaker.bio}</p>
                      </CardBody>
                    </Card>
                  );
                })}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onCloseAllSpeakersModal}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </section>
  );
};
