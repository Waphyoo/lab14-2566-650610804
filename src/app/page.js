"use client";
import {
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";
import { useState } from "react";

export default function FoodReviewPage() {
  const [value, setValue] = useState(0);
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title mt="sm" order={4}>
        Your rating
      </Title>
      <Rating mb="xs" size="lg" value={value} onChange={setValue}></Rating>

      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        minRows={3}
      ></Textarea>

      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider my="sm"></Divider>
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly />
      </Group>
      <Text ta="center" c="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm"></Divider>
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly />
      </Group>
      <Text ta="center" c="dimmed">
        My favourite part is pepperoni
      </Text>

      <Pagination
        position="center"
        mt={"md"}
        color="orange"
        total={20}
        siblings={1}
        defaultValue={1}
      ></Pagination>

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Watunyoo Phanapaisarnsakul 650610804
      </Text>
    </Container>
  );
}
