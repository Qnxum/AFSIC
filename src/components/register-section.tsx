import React from "react";
import { Card, CardBody, CardHeader, Input, Button, Checkbox } from "@heroui/react";

export const RegisterSection: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [role, setRole] = React.useState("");
  const [agreeTerms, setAgreeTerms] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, organization, role, agreeTerms });
    // Registration logic would go here
  };

  return (
    <section id="register" className="py-16 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white dark:text-foreground mb-4">Register for AFSIC 2025</h2>
          <div className="w-16 h-1 bg-white dark:bg-foreground mx-auto mb-6"></div>
          <p className="text-lg text-white dark:text-default-600">
            Secure your place at Africa's premier sports investment conference. Early bird registration ends April 30, 2025.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="border-none dark:bg-content1">
            <CardHeader className="flex flex-col gap-1">
              <h3 className="text-xl font-bold text-foreground">Registration Form</h3>
              <p className="text-default-500 dark:text-default-600">Fill in your details to register</p>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                    value={firstName}
                    onValueChange={setFirstName}
                    isRequired
                    className="dark:text-foreground"
                    classNames={{
                      inputWrapper: "dark:bg-default-50 dark:border-default-200",
                      label: "dark:text-default-600",
                      input: "dark:text-foreground"
                    }}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={lastName}
                    onValueChange={setLastName}
                    isRequired
                    className="dark:text-foreground"
                    classNames={{
                      inputWrapper: "dark:bg-default-50 dark:border-default-200",
                      label: "dark:text-default-600",
                      input: "dark:text-foreground"
                    }}
                  />
                </div>
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onValueChange={setEmail}
                  isRequired
                  className="dark:text-foreground"
                  classNames={{
                    inputWrapper: "dark:bg-default-50 dark:border-default-200",
                    label: "dark:text-default-600",
                    input: "dark:text-foreground"
                  }}
                />
                <Input
                  label="Organization"
                  placeholder="Enter your organization"
                  value={organization}
                  onValueChange={setOrganization}
                  isRequired
                  className="dark:text-foreground"
                  classNames={{
                    inputWrapper: "dark:bg-default-50 dark:border-default-200",
                    label: "dark:text-default-600",
                    input: "dark:text-foreground"
                  }}
                />
                <Input
                  label="Role/Position"
                  placeholder="Enter your role or position"
                  value={role}
                  onValueChange={setRole}
                  isRequired
                  className="dark:text-foreground"
                  classNames={{
                    inputWrapper: "dark:bg-default-50 dark:border-default-200",
                    label: "dark:text-default-600",
                    input: "dark:text-foreground"
                  }}
                />
                <Checkbox
                  isSelected={agreeTerms}
                  onValueChange={setAgreeTerms}
                  classNames={{
                    label: "dark:text-default-600"
                  }}
                >
                  I agree to the terms and conditions and privacy policy
                </Checkbox>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    className="font-medium"
                    isDisabled={!agreeTerms}
                  >
                    Register Now
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
