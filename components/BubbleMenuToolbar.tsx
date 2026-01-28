import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Editor, useEditorState } from "@tiptap/react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

export default function BubbleMenuToolbar({ editor }: { editor: Editor }) {
  // Read the current editor's state, and re-render the component when it changes
  const editorState = useEditorState({
    editor,
    selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
        isUnderline: ctx.editor.isActive("underline") ?? false,
        canUnderline: ctx.editor.can().chain().toggleUnderline().run() ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
        isCode: ctx.editor.isActive("code") ?? false,
        canCode: ctx.editor.can().chain().toggleCode().run() ?? false,
        canClearMarks: ctx.editor.can().chain().unsetAllMarks().run() ?? false,
        isParagraph: ctx.editor.isActive("paragraph") ?? false,
        isHeading1: ctx.editor.isActive("heading", { level: 1 }) ?? false,
        isHeading2: ctx.editor.isActive("heading", { level: 2 }) ?? false,
        isHeading3: ctx.editor.isActive("heading", { level: 3 }) ?? false,
        isHeading4: ctx.editor.isActive("heading", { level: 4 }) ?? false,
        isHeading5: ctx.editor.isActive("heading", { level: 5 }) ?? false,
        isHeading6: ctx.editor.isActive("heading", { level: 6 }) ?? false,
        isBulletList: ctx.editor.isActive("bulletList") ?? false,
        isOrderedList: ctx.editor.isActive("orderedList") ?? false,
        isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
        canUndo: ctx.editor.can().chain().undo().run() ?? false,
        canRedo: ctx.editor.can().chain().redo().run() ?? false,
      };
    },
  });

  return (
    <ToggleButtonGroup
      value={[
        editorState.isBold && "bold",
        editorState.isItalic && "italic",
        editorState.isUnderline && "underline",
        editorState.isStrike && "strike",
      ].filter(Boolean)}
      sx={{
        ".MuiToggleButtonGroup-grouped":{
            height:"2rem",
            width:"2rem",
            backgroundColor:"rgba(96, 8, 219, 0.07)"
        },
        "& .Mui-selected":{
            backgroundColor:"rgba(31, 71, 230, 0.2)"
        }
      }}
    >
      <ToggleButton
        value={"bold"}
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        disabled={!editorState.canBold}
        className={editorState.isBold ? "is-active" : ""}
      >
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton
        value={"italic"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editorState.canItalic}
        className={editorState.isItalic ? "is-active" : ""}
      >
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton
        value={"underline"}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editorState.canUnderline}
        className={editorState.isUnderline ? "is-active" : ""}
      >
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton
        value={"strike"}
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editorState.canStrike}
        className={editorState.isStrike ? "is-active" : ""}
      >
        <FormatStrikethroughIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
