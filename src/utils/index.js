export const groupTicketsByUserId = (tickets) => {
  const groupedTickets = tickets.reduce((userGroups, ticket) => {
    const { userId } = ticket;
    if (!userGroups[userId]) {
      userGroups[userId] = [];
    }
    userGroups[userId].push(ticket);
    return userGroups;
  }, {});

  return groupedTickets;
};

export const mapUsersByUserId = (users) => {
  let group = users.reduce((accumulator, user) => {
    accumulator[user.id] = user;
    return accumulator;
  }, {});

  return group;
};

export const groupTicketsByStatus = (tickets) => {
  const initialStatusGroups = {
    Backlog: [],
    Todo: [],
    "In progress": [],
    Done: [],
    Canceled: [],
  };

  const groupedByStatus = tickets.reduce((statusGroups, ticket) => {
    const { status } = ticket;
    if (!statusGroups[status]) {
      statusGroups[status] = [];
    }
    statusGroups[status].push(ticket);
    return statusGroups;
  }, initialStatusGroups);

  return groupedByStatus;
};

export const groupTicketsByPriority = (tickets) => {
  const initialPriorityGroups = {
    "No priority": [],
    Low: [],
    Medium: [],
    High: [],
    Urgent: [],
  };

  const groupedByPriority = tickets.reduce((priorityGroups, ticket) => {
    const priorityLabel = getPriorityLabel(ticket.priority);

    if (!priorityGroups[priorityLabel]) {
      priorityGroups[priorityLabel] = [];
    }

    priorityGroups[priorityLabel].push(ticket);
    return priorityGroups;
  }, initialPriorityGroups);

  return groupedByPriority;
};

const getPriorityLabel = (priority) => {
  switch (priority) {
    case 0:
      return "No priority";
    case 1:
      return "Low";
    case 2:
      return "Medium";
    case 3:
      return "High";
    case 4:
      return "Urgent";
    default:
      return "NA";
  }
};

const orderByPriority = (tickets) =>
  tickets.sort((ticketA, ticketB) =>
    ticketA.priority > ticketB.priority ? -1 : 1
  );

const orderByTitle = (tickets) =>
  tickets.sort((ticketA, ticketB) => (ticketA.title < ticketB.title ? -1 : 1));

export const loadGrid = (tickets, grouping, ordering) => {
  const orderedTickets =
    ordering === "priority" ? orderByPriority(tickets) : orderByTitle(tickets);

  switch (grouping) {
    case "status":
      return groupTicketsByStatus(orderedTickets);
    case "priority":
      return groupTicketsByPriority(orderedTickets);
    case "user":
    default:
      return groupTicketsByUserId(orderedTickets);
  }
};
