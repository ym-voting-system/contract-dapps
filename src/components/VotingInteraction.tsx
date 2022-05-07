/*
 * Mantine UI Library
 */
import { Button, Group, Text, TextInput, Title } from "@mantine/core";

import {
  Send,
  CurrencyEthereum,
  Database,
  Checklist,
} from "tabler-icons-react";

type SVoter = { register: string; whitelisted: string };
type SetVoter = { setVoterValue: Function; setIsWhitelisted: Function };
type SetWeb3 = {
  setVoter: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isWhitelisted: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

interface IVoting<S, A, W> {
  state: S;
  setState: A;
  web3Interaction: W;
  load: Boolean;
}

function VotingInteraction({
  state,
  setState,
  web3Interaction,
  load,
}: IVoting<SVoter, SetVoter, SetWeb3>) {
  const { register, whitelisted } = state;
  const { setVoterValue, setIsWhitelisted } = setState;
  const { setVoter, isWhitelisted } = web3Interaction;

  return (
    <>
      <form>
        <Text
          size="lg"
          weight={700}
          underline
          transform="capitalize"
          variant="gradient"
          gradient={{ from: "cyan", to: "blue", deg: 138 }}
        >
          {register}
        </Text>
        <TextInput
          style={{
            marginBottom: "20px",
            width: "100%",
          }}
          icon={<Send />}
          rightSection={<CurrencyEthereum />}
          label="Add voter to white list"
          placeholder="Voter adress"
          {...(!register && { error: "The field is empty" })}
          required
          value={register}
          onChange={(event) => setVoterValue(event.currentTarget.value)}
        />
        <Group position="right" mt="md">
          <Button
            onClick={setVoter}
            leftIcon={<Database size={14} />}
            {...(load && { loading: true })}
            {...(!register && { disabled: true })}
          >
            Add Voters
          </Button>
        </Group>
      </form>
      <form style={{ marginTop: "20px" }}>
        <TextInput
          style={{
            marginBottom: "20px",
            width: "100%",
          }}
          icon={<Send />}
          rightSection={<CurrencyEthereum />}
          label="Check if adress is whitelisted"
          placeholder="Voter adress"
          {...(!whitelisted && { error: "The field is empty" })}
          required
          value={whitelisted}
          onChange={(event) => setIsWhitelisted(event.currentTarget.value)}
        />
        <Group position="right" mt="md">
          <Button
            onClick={isWhitelisted}
            leftIcon={<Checklist size={14} />}
            {...(!whitelisted && { disabled: true })}
          >
            Check
          </Button>
        </Group>
      </form>
    </>
  );
}

export default VotingInteraction;
