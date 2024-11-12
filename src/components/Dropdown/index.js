import React, { useCallback, useEffect, useRef, useState } from "react";
import "./dropdown.css";
import { LuSettings2 } from "react-icons/lu";
import { BiChevronDown } from "react-icons/bi";

function Dropdown({ grouping, setGrouping, ordering, setOrdering }) {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef(null);

  const onGroupingChange = useCallback(
    (e) => setGrouping(e.target.value),
    [setGrouping]
  );
  const onOrderingChange = useCallback(
    (e) => setOrdering(e.target.value),
    [setOrdering]
  );

  const showDropdown = useCallback(() => {
    setVisible(true);
  }, []);

  const closeDropdownOnOutsideClick = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  });

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-label-container" onClick={showDropdown}>
        <LuSettings2 color="#6b6f76" />
        <div className="dropdown-label">Display</div>
        <BiChevronDown color="#6b6f76" />
      </div>
      <div className={`dropdown-content-container ${visible && "visible"}`}>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Grouping</div>
          <select
            name="grouping"
            id="grouping"
            value={grouping}
            onChange={onGroupingChange}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Ordering</div>
          <select
            name="ordering"
            id="ordering"
            value={ordering}
            onChange={onOrderingChange}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
