import React from "react";
import { Button } from "@chakra-ui/core";
import { action } from "@storybook/addon-actions";

export default {
  title: "Chakra/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variantColor: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger",
  onclick: action("Click handler"),
};

// export const Success = () => <Button variantColor="green">Success</Button>;
// export const Danger = () => <Button variantColor="red">Danger</Button>;
