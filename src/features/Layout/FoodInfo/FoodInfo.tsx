import {
  Badge,
  Center,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { useState } from "react";
import { FiCheck, FiPlay, FiX } from "react-icons/fi";

export default function FoodInfo({ data }) {
  //   console.log(data);
  return (
    <Stack>
      <Text ta={"center"} fw={700} size="xl">
        It's a {data.name}
      </Text>
      <Text c={"orange"} ta={"center"}>
        It contains {data.calories}
      </Text>
      <Stack>
        <Text size={"lg"} fw={700} td={"underline"}>
          Nutrients
        </Text>
        <Group>
          {data.nutrients.map((nutrient, index) => (
            <Badge color="grape" key={index}>
              {nutrient}
            </Badge>
          ))}
        </Group>
      </Stack>
      <Stack>
        <Text size={"lg"} fw={700} td={"underline"}>
          Benefits
        </Text>
        <List
          icon={
            <ThemeIcon variant="default" radius={24} c="teal">
              <FiCheck />
            </ThemeIcon>
          }
        >
          {data.benefits.map((benefit, index) => (
            <List.Item key={index}>{benefit}</List.Item>
          ))}
        </List>
      </Stack>
      <Stack>
        <Text size={"lg"} fw={700} td={"underline"}>
          Allergies
        </Text>
        <List
          icon={
            <ThemeIcon variant="default" radius={24} c="red">
              <FiX />
            </ThemeIcon>
          }
        >
          {data.allergies.map((allergy, index) => (
            <List.Item key={index}>{allergy}</List.Item>
          ))}
        </List>
      </Stack>
    </Stack>
  );
}
