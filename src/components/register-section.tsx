import React from "react";
import { Card, CardBody, CardHeader, Input, Button, Checkbox } from "@heroui/react";
import { useForm, ValidationError } from '@formspree/react';

export const RegisterSection: React.FC = () => {
  const [state, handleSubmit] = useForm("mjkrlelp");
  const [agreeTerms, setAgreeTerms] = React.useState(false);

  if (state.succeeded) {
    return (
      <section id="register" className="py-16 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white dark:text-foreground mb-4">Thank you for registering!</h2>
            <p className="text-lg text-white dark:text-default-600">We've received your information and will be in touch soon.</p>
          </div>
        </div>
      </section>
    );
  }

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
                    id="first-name"
                    name="first-name"
                    label="First Name"
                    placeholder="Enter your first name"
                    isRequired
                    className="dark:text-foreground"
                    classNames={{
                      inputWrapper: "dark:bg-default-50 dark:border-default-200",
                      label: "dark:text-default-600",
                      input: "dark:text-foreground"
                    }}
                  />
                  <Input
                    id="last-name"
                    name="last-name"
                    label="Last Name"
                    placeholder="Enter your last name"
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
                  id="email"
                  name="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  type="email"
                  isRequired
                  className="dark:text-foreground"
                  classNames={{
                    inputWrapper: "dark:bg-default-50 dark:border-default-200",
                    label: "dark:text-default-600",
                    input: "dark:text-foreground"
                  }}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  id="cell-number"
                  name="cell-number"
                  label="Cell Number"
                  placeholder="Enter your cell number"
                  type="tel"
                  isRequired
                  className="dark:text-foreground"
                  classNames={{
                    inputWrapper: "dark:bg-default-50 dark:border-default-200",
                    label: "dark:text-default-600",
                    input: "dark:text-foreground"
                  }}
                />
                <Input
                  id="country"
                  name="country"
                  label="Country"
                  placeholder="Enter your country"
                  className="dark:text-foreground"
                  classNames={{
                    inputWrapper: "dark:bg-default-50 dark:border-default-200",
                    label: "dark:text-default-600",
                    input: "dark:text-foreground"
                  }}
                />
                <Input
                  id="company-website"
                  name="company-website"
                  label="Company Website"
                  placeholder="Enter your company website"
                  type="url"
                  className="dark:text-foreground"
                  classNames={{
                    inputWrapper: "dark:bg-default-50 dark:border-default-200",
                    label: "dark:text-default-600",
                    input: "dark:text-foreground"
                  }}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    id="city"
                    name="city"
                    label="City"
                    placeholder="Enter your city"
                    className="dark:text-foreground"
                    classNames={{
                      inputWrapper: "dark:bg-default-50 dark:border-default-200",
                      label: "dark:text-default-600",
                      input: "dark:text-foreground"
                    }}
                  />
                  <Input
                    id="state-province"
                    name="state-province"
                    label="State/Province"
                    placeholder="Enter your state or province"
                    className="dark:text-foreground"
                    classNames={{
                      inputWrapper: "dark:bg-default-50 dark:border-default-200",
                      label: "dark:text-default-600",
                      input: "dark:text-foreground"
                    }}
                  />
                </div>
                <Input
                  id="organization"
                  name="organization"
                  label="Organization"
                  placeholder="Enter your organization"
                  isRequired
                  className="dark:text-foreground"
                  classNames={{
                    inputWrapper: "dark:bg-default-50 dark:border-default-200",
                    label: "dark:text-default-600",
                    input: "dark:text-foreground"
                  }}
                />
                <Input
                  id="role"
                  name="role"
                  label="Role/Position"
                  placeholder="Enter your role or position"
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
                    isDisabled={state.submitting || !agreeTerms}
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
