import { Button, Paper, TextInput } from "@mantine/core";
import useVoting from "@hooks/useVoting";
import { useState } from "react";
import { Checklist, CurrencyEthereum, Send } from "tabler-icons-react";

function ProposalsPage() {
  const [load, setLoad] = useState(false);
  /**Mantine */

  /*Web3*/
  const [proposals, setProposals] = useState("");
  //const [allProposals, setAllProposals] = useState<object>({});
  const [contract, write] = useVoting();

  function addProposal() {
    setLoad(true);
    return write(
      contract?.userAddProposal(proposals),
      "User add proposals",
      "The proposal has been added to the smart contract",
      "The proposal has  not been added to the smart contract: "
    );
  }
  /*function fetchProposal() {
    provider.on("ProposalRegistered", (ProposalRegistered: any) => {
      console.log({ ProposalRegistered });
      setAllProposals({ ProposalRegistered });
    });
    console.log(allProposals);
  }*/

  return (
    <div>
      <Paper shadow="xs" p="md" radius={0} style={{ marginTop: "16px" }}>
        <TextInput
          style={{
            marginBottom: "20px",
            width: "100%",
          }}
          icon={<Send />}
          rightSection={<CurrencyEthereum />}
          label="Add proposals to contract"
          placeholder="Proposals"
          {...(!proposals && { error: "The field is empty" })}
          required
          value={proposals}
          onChange={(event) => setProposals(event.currentTarget.value)}
        />
        <Button
          onClick={addProposal}
          leftIcon={<Checklist size={14} />}
          {...(!proposals && { disabled: true })}
        >
          Check
        </Button>

        {proposals}
      </Paper>
    </div>
  );
}

export default ProposalsPage;
