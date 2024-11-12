import { BiRadioCircle, BiSignal2, BiSignal3, BiSignal4 } from "react-icons/bi";
import { LuMoreHorizontal } from "react-icons/lu";
import { TbProgress } from "react-icons/tb";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { AiFillCloseCircle, AiFillWarning } from "react-icons/ai";

const ICON_SIZE_SMALL = 14;
const ICON_SIZE_MEDIUM = 16;
const ICON_SIZE_LARGE = 24;

const priorityIconColors = {
  noPriority: "#797d84",
  low: "#6b6f76",
  medium: "#6b6f76",
  high: "#6b6f76",
  urgent: "#fc7840",
};

const statusIconColors = {
  todo: "#e2e2e2",
  inProgress: "#f1ca4b",
  done: "#5e6ad2",
  canceled: "#94a2b3",
};

// Priority Icons
export const getPriorityIcon = (priority) => {
  const icons = {
    "No priority": (
      <LuMoreHorizontal
        color={priorityIconColors.noPriority}
        size={ICON_SIZE_SMALL}
      />
    ),
    Low: <BiSignal2 color={priorityIconColors.low} size={ICON_SIZE_SMALL} />,
    Medium: (
      <BiSignal3 color={priorityIconColors.medium} size={ICON_SIZE_SMALL} />
    ),
    High: <BiSignal4 color={priorityIconColors.high} size={ICON_SIZE_SMALL} />,
    Urgent: (
      <AiFillWarning color={priorityIconColors.urgent} size={ICON_SIZE_SMALL} />
    ),
  };

  return icons[priority] || icons["No priority"];
};

// Status Icons
export const getStatusIcon = (status) => {
  const icons = {
    Todo: (
      <BiRadioCircle color={statusIconColors.todo} size={ICON_SIZE_LARGE} />
    ),
    "In progress": (
      <TbProgress color={statusIconColors.inProgress} size={ICON_SIZE_MEDIUM} />
    ),
    Done: (
      <IoCheckmarkDoneCircle
        color={statusIconColors.done}
        size={ICON_SIZE_MEDIUM}
      />
    ),
    Canceled: (
      <AiFillCloseCircle
        color={statusIconColors.canceled}
        size={ICON_SIZE_MEDIUM}
      />
    ),
  };

  return icons[status] || icons.Todo;
};
