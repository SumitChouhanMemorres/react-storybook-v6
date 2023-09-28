import React from "react";
import Input from "./Input";
import Center from "../Center/Center";

export default {
  title: "Input",
  component: Input,
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Small = () => <Input size="small" placeholder="small size" />;
export const Medium = () => <Input size="medium" placeholder="medium size" />;
export const Large = () => <Input size="large" placeholder="large size" />;

Small.storyName = "Small Input"; //For giving out specific names to the stories
