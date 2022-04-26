//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Common is Ownable {
    //STRUCTURE
    //On créer un struct(objet) pour définir un proposition d'un utlisateur
    struct Proposal {
        string description;
        uint256 voteCount;
    }

    //On créer un struct(objet) pour définir un élécteur
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint256 votedProposalId;
    }

    //Status du workflows;
    enum WorkflowStatus {
        RegisteringVoters,
        ProposalsRegistrationStarted,
        ProposalsRegistrationEnded,
        VotingSessionStarted,
        VotingSessionEnded,
        VotesTallied
    }

    //VARIABLE GLOBAL
    mapping(address => Voter) whitelist;
    //On stocke les différentes propositions dans un tableau
    Proposal[] public proposals;
    //id de la proposition gagnante
    uint256 winningProposalId;
    //On initialise une variable defaultWorkflowStatus pour utliser l'enum
    WorkflowStatus public defaultWorkflowStatus =
        WorkflowStatus.RegisteringVoters;

    //EVENT TYPE
    //évenement à renvoyer lorsqu'un utlisateur a voter
    event VoterRegistered(address voterAddress);
    event WorkflowStatusChange(
        WorkflowStatus previousStatus,
        WorkflowStatus newStatus
    );
    event ProposalRegistered(uint256 proposalId);
    event Voted(address voter, uint256 proposalId);

    //MODIFIERS
    modifier requireWorkflowStatus(
        WorkflowStatus _statut,
        string memory _message
    ) {
        require(defaultWorkflowStatus == _statut, _message);
        _;
    }

    modifier onlyVotingSessionIsStarted() {
        require(
            defaultWorkflowStatus == WorkflowStatus.VotingSessionStarted,
            "There is no vote in progress"
        );
        _;
    }
}
