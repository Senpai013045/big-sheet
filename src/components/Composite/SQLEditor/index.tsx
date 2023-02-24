import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/ext-language_tools";

interface Props {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const SQLEditor = ({onChange, value, disabled = false}: Props) => {
  return (
    <AceEditor
      mode="sql"
      onChange={val => {
        onChange(val);
      }}
      name="editor"
      value={disabled ? "Please upload a file to run the query" : value}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        readOnly: disabled,
        fontSize: 14,
        showPrintMargin: false,
      }}
      width="100%"
    />
  );
};
