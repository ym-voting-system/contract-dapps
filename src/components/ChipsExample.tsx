import { Chips, Chip, Text } from "@mantine/core";
import { useState } from "react";

function ChipsExample() {
  const [value, setValue] = useState(["react"]);

  return (
    <div>
      <Chips
        color="red"
        variant="filled"
        spacing="lg"
        size="xl"
        radius="xs"
        value={value}
        onChange={setValue}
        multiple
      >
        <Chip value="react">React</Chip>
        <Chip value="ng">Angular</Chip>
        <Chip value="svelte">Svelte</Chip>
        <Chip value="vue">Vue</Chip>
      </Chips>
      {value.map((language, index) => (
        /* eslint-disable react/no-array-index-key */
        <Text key={index}>Select language: {language}</Text>
      ))}
    </div>
  );
}

export default ChipsExample;
