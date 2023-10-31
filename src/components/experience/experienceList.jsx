import { EditIcon } from "../icons/editIcon";
import { DeleteIcon } from "../icons/deleteIcon";

export const ExperienceList = ({
  item,
  isEditMode,
  handleDeleteExperience,
  handleEditExperience,
}) => {
  return (
    <li key={item._id}>
      {item.companyName && (
        <p>
          <strong>{item.companyName}</strong>
        </p>
      )}
      {item.startDate && <>Start Date: {item.startDate}</>}
      {item.endDate && <> - End Date: {item.endDate}</>}
      {item.description && <p>{item.description}</p>}

      {isEditMode && (
        <div className="cardActions">
          <span
            className="editBtn"
            onClick={() => handleEditExperience(item._id)}
          >
            <EditIcon />
          </span>
          <span
            className="removeBtn"
            onClick={() => handleDeleteExperience(item._id)}
          >
            <DeleteIcon />
          </span>
        </div>
      )}
    </li>
  );
};
