import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { IGroup } from "@/src/shared/interfaces/group.interface";

const GroupCard: FC<IGroup> = ({ admin, name, _id, image_url }) => {
  return (
    <div style={{ width: 100, marginTop: 30 }}>
      <Link
        href={`/manage_groups/${_id}`}
        className={"mt-2"}
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <Image
          src={image_url}
          alt={name}
          width={100}
          height={100}
          style={{ margin: 0 }}
        />
        <div>
          <div style={{ width: 150 }}>
            <p>{name}</p>
          </div>
          {admin && (
            <div style={{ width: 150 }}>
              <h4>Admin: {admin.first_name}</h4>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default GroupCard;
