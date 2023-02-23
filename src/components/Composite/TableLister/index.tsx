import {MdTableView, MdAdd, MdRemove} from "react-icons/md";
import {useState} from "react";

interface FieldData {
  name: string;
  type: string;
}

interface TableData {
  name: string;
  fields: FieldData[];
}

const HARDCODED_TABLE_DATA: TableData[] = [
  {
    name: "USERS",
    fields: [
      {
        name: "id",
        type: "int",
      },
      {
        name: "first_name",
        type: "varchar",
      },
      {
        name: "last_name",
        type: "varchar",
      },
      {
        name: "email",
        type: "varchar",
      },
      {
        name: "age",
        type: "int",
      },
    ],
  },
  {
    name: "POSTS",
    fields: [
      {
        name: "id",
        type: "int",
      },
      {
        name: "title",
        type: "varchar",
      },
      {
        name: "body",
        type: "varchar",
      },
      {
        name: "user_id",
        type: "int",
      },
      {
        name: "created_at",
        type: "timestamp",
      },
      {
        name: "updated_at",
        type: "timestamp",
      },
    ],
  },
  {
    name: "COMMENTS",
    fields: [
      {
        name: "id",
        type: "int",
      },
      {
        name: "body",
        type: "varchar",
      },
      {
        name: "user_id",
        type: "int",
      },
      {
        name: "post_id",
        type: "int",
      },
      {
        name: "created_at",
        type: "timestamp",
      },
      {
        name: "updated_at",
        type: "timestamp",
      },
    ],
  },
];

export const TableLister = () => {
  const [activeTables, setActiveTables] = useState<Set<string>>(new Set());

  const toggleTable = (name: string) => {
    setActiveTables(prev => {
      if (prev.has(name)) {
        prev.delete(name);
      } else {
        prev.add(name);
      }
      return new Set(prev);
    });
  };

  return (
    <ul className="flex flex-col gap-4">
      {HARDCODED_TABLE_DATA.map(table => {
        return (
          <li key={table.name} className="flex flex-col gap-2">
            <button
              className="flex items-center gap-x-2"
              role="button"
              onClick={() => toggleTable(table.name)}
            >
              <MdTableView />
              <span className="text-base font-bold cursor-pointer">{table.name}</span>
              {activeTables.has(table.name) ? <MdRemove /> : <MdAdd />}
            </button>

            {activeTables.has(table.name) && (
              <ul className="flex flex-col gap-2 pl-6 mt-2">
                {table.fields.map(field => {
                  return (
                    <li key={field.name} className="flex items-center gap-2 text-sm">
                      <span className=" text-ui-dark font-bold">{field.name}</span>
                      <span className="text-ui-darkest ">[{field.type}]</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};
