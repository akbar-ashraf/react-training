import { EditIcon } from "../icons/editIcon";
import { DeleteIcon } from "../icons/deleteIcon";

export const ExperienceList = ({
  item,
  isEditMode,
  handlerDeleteExperience,
  handlerEditExperience,
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
            onClick={() => handlerEditExperience(item._id)}
          >
            <EditIcon />
          </span>
          <span
            className="removeBtn"
            onClick={() => handlerDeleteExperience(item._id)}
          >
            <DeleteIcon />
          </span>
        </div>
      )}
    </li>
  );
};
