import { Input, TextInput } from "@mantine/core";
import { BrandGithub, BrandNotion } from "tabler-icons-react";

function InputExample() {
  return (
    <div>
      <TextInput
        icon={<BrandGithub />}
        rightSection={<BrandNotion />}
        label="This is the best input field"
        description="This is the best description"
        error="YOU'VE BLOODY ERROR"
        required
      />
      <Input component="select">
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </div>
  );
}

export default InputExample;
