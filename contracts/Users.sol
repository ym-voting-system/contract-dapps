//Admin.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "./Common.sol";

contract Users is Common {
    modifier onlyRegisteredInWhitelist() {
        // Modifier
        require(
            whitelist[msg.sender].isRegistered == true,
            "Users is not in white list"
        );
        _;
    }

    /// @notice Ajout d'une proposition au contrat
    /// @param description proposition de l'utilisateur.
    /// @dev La fonction doit vérifier que l'utilisateurs est valide et que le statut soit bien en enregistrement de propositions
    function userAddProposal(string memory description)
        public
        onlyRegisteredInWhitelist
        requireWorkflowStatus(
            WorkflowStatus.ProposalsRegistrationStarted,
            "The proposal crunching session hasn't started yet, please don't be in a hurry !"
        )
    {
        proposals.push(Proposal(description, 0));
        uint256 proposalId = proposals.length - 1;
        emit ProposalRegistered(proposalId);
    }

    /// @notice Les électeurs inscrits votent pour leurs propositions préférées
    /// @param proposalId un uint qui fait référence à l'id de la proposition.
    /// @dev La fonction doit vérifier que l'utilisateurs est valide et que le statut soit bien en enregistrement de propositions
    function voteForFavoriteProposal(uint256 proposalId)
        public
        onlyRegisteredInWhitelist
        requireWorkflowStatus(
            WorkflowStatus.VotingSessionStarted,
            "There is no vote in progress"
        )
    {
        require(
            whitelist[msg.sender].hasVoted == false,
            "The users have already voted"
        );
        whitelist[msg.sender].votedProposalId = proposalId; //On ajoute l'id de la proposition à l'utilisateur qui vote.
        whitelist[msg.sender].hasVoted = true; //On passe la valeurs hasVoted à true pour identifier que l'utilisateur à voté.
        proposals[proposalId].voteCount++; //On ajoute un vote à la proposition.
        emit Voted(msg.sender, proposalId);
    }
}
