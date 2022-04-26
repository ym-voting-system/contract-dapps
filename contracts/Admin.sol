//Admin.sol
//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "./Common.sol";

/// @title Un contract pour gérer les fonctions de l'administrateur de vote
/// @author Younès Manjal 😎
/// @notice Le contrat fait appelle au mapping whitelist et à l'enum WorkflowStatus du contrat Common.sol
contract Admin is Common {
    /// @notice Ajout d'une adresse Ethereum à la liste blanche
    /// @param _address address Ethereum d'un utilisateur ayant le droit de faire une proposition et de voter.
    /// @dev On récupére le mapping whitelist qui est définit dans le contrat common.sol
    function addAddressWhitelist(address _address)
        public
        onlyOwner
        requireWorkflowStatus(
            WorkflowStatus.RegisteringVoters,
            "The recording session is no longer in progress"
        )
    {
        require(
            whitelist[_address].isRegistered != true,
            "This address is already whitelisted"
        );
        whitelist[_address].isRegistered = true;
        emit VoterRegistered(_address);
    }

    /// @notice Récupére un électeur de la liste blanche
    /// @param _address address Ethereum d'un utilisateur de la liste blanche.
    function isWhitelisted(address _address)
        public
        view
        onlyOwner
        returns (Voter memory)
    {
        return whitelist[_address];
    }

    /// @notice Démarrage de l'enregistrement de propositions
    /// @dev On modifie la valeur de l'enum WorkflowStatus via la variable defaultWorkflowStatus qui est définit dans le contract common.sol
    function startsRecordingProposals()
        public
        onlyOwner
        requireWorkflowStatus(
            WorkflowStatus.RegisteringVoters,
            "There are no proposal registration sessions in progress"
        )
    {
        defaultWorkflowStatus = WorkflowStatus.ProposalsRegistrationStarted;
        emit WorkflowStatusChange(
            WorkflowStatus.RegisteringVoters,
            WorkflowStatus.ProposalsRegistrationStarted
        );
    }

    /// @notice On arrête la session de l'enregistrement de propositions
    /// @dev On modifie la valeurs de l'enum WorkflowStatus via la variable defaultWorkflowStatus qui est définit dans le contract common.sol
    function stopRecordingProposals()
        public
        onlyOwner
        requireWorkflowStatus(
            WorkflowStatus.ProposalsRegistrationStarted,
            "There are no proposal registration sessions in progress"
        )
    {
        defaultWorkflowStatus = WorkflowStatus.ProposalsRegistrationEnded;
        emit WorkflowStatusChange(
            WorkflowStatus.ProposalsRegistrationStarted,
            WorkflowStatus.ProposalsRegistrationEnded
        );
    }

    /// @notice Démmarage de la session de vote
    /// @dev On modifie la valeurs de l'enum WorkflowStatus via la variable defaultWorkflowStatus qui est définit dans le contract common.sol
    function startsVotingSession()
        public
        onlyOwner
        requireWorkflowStatus(
            WorkflowStatus.ProposalsRegistrationEnded,
            "The voting registration session is still in progress"
        )
    {
        defaultWorkflowStatus = WorkflowStatus.VotingSessionStarted;
        emit WorkflowStatusChange(
            WorkflowStatus.ProposalsRegistrationEnded,
            WorkflowStatus.VotingSessionStarted
        );
    }

    /// @notice On arrête la session de vote
    /// @dev Le modifier requireWorkflowStatus est définit dans le contrat common.sol
    function stopVotingSession()
        public
        onlyOwner
        requireWorkflowStatus(
            WorkflowStatus.VotingSessionStarted,
            "There is no vote in progress"
        )
    {
        defaultWorkflowStatus = WorkflowStatus.VotingSessionEnded;
        emit WorkflowStatusChange(
            WorkflowStatus.VotingSessionStarted,
            WorkflowStatus.VotingSessionEnded
        );
    }

    /// @notice On comptabilise les votes
    /// @dev Le modifier requireWorkflowStatus est définit dans le contrat common.sol
    function voteTallying()
        public
        onlyOwner
        requireWorkflowStatus(
            WorkflowStatus.VotingSessionEnded,
            "The voting session is still in progress"
        )
    {
        uint256 proposalsVoteCount = 0;

        //DOS WARNING
        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > proposalsVoteCount) {
                proposalsVoteCount = proposals[i].voteCount;
                winningProposalId = i;
            }
        }
        defaultWorkflowStatus = WorkflowStatus.VotesTallied;
        emit WorkflowStatusChange(
            WorkflowStatus.VotingSessionEnded,
            WorkflowStatus.VotesTallied
        );
    }
}
