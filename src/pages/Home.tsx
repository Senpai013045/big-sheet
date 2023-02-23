import {useState} from "react";
import {truncate} from "../utils/string";
import Editor from "@monaco-editor/react";
import {Button} from "../components/UI/Button";
import {TableLister} from "../components/Composite/TableLister";
import {RowData, Table} from "../components/UI/Table";

const FAKEDATA: RowData[] = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "jhon@doe.com",
    age: 20,
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Doe",
    email: "jane@doe.com",
    age: 20,
  },
  {
    id: 3,
    first_name: "Rick",
    last_name: "Sanchez",
    email: "rick@sanchez.com",
    age: 70,
  },
  {
    id: 4,
    first_name: "Morty",
    last_name: "Smith",
    email: "morty@smith.com",
    age: 14,
  },
  {
    id: 5,
    first_name: "Summer",
    last_name: "Smith",
    email: "summer@smith.com",
    age: 17,
  },
];

export const Home = () => {
  const [file, setFile] = useState<File>();
  const [code, setCode] = useState("");
  const [data, setData] = useState<RowData[]>([]);

  return (
    <div className="max-w-[95%] mx-auto mt-4">
      <main className="flex justify-between items-start mt-4 gap-x-4">
        <div className="w-[250px]">
          <div>
            {/* make a upload file with button */}
            <label htmlFor="file-upload">
              <span className="inline-block bg-ui-dark text-ui-lightest px-4 py-2 rounded-md cursor-pointer">
                Upload
              </span>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={e => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFile(file);
                  }
                }}
              />
            </label>
          </div>
          {file && (
            <div className="mt-4">
              <p className="text-ui-dark">{truncate(file.name, 10)}</p>
            </div>
          )}
          {file && (
            <div className="mt-4">
              <TableLister />
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="shadow-ui-dark shadow-sm">
            <nav className="flex justify-between items-center mb-2 px-2">
              <div className="font-bold p-4 text-ui-dark">Input</div>
              <Button
                className="px-6"
                onClick={() => {
                  if (!file) return;
                  setData(FAKEDATA);
                }}
              >
                Run
              </Button>
            </nav>
            <Editor
              height="300px"
              language="sql"
              value={code}
              onChange={val => {
                if (val) {
                  setCode(val);
                }
              }}
              options={{
                minimap: {
                  enabled: false,
                },
              }}
            />
          </div>
          <div className="mt-4">
            <Table data={data} />
          </div>
        </div>
      </main>
    </div>
  );
};
