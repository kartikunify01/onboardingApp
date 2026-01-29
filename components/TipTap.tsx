'use client'
import { TextStyleKit } from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBarTipTap from './ToolBarTipTap'
import { BubbleMenu } from '@tiptap/react/menus'
import BubbleMenuToolbar from './BubbleMenuToolbar'

const extensions = [TextStyleKit, StarterKit]

export default ({value,onChange} : {value :string,onChange:(val:string)=>void}) => {
  const editor = useEditor({
    extensions,
    content: value,
    immediatelyRender:false,
    onUpdate({editor}){
      onChange(editor.getHTML());
    }
  })
  if(!editor) return <></>;
  return (
    <div className='p-4'>
      <ToolBarTipTap editor={editor} />
      <EditorContent editor={editor}
        className="min-h-[150px] mt-2 prose max-w-none outline-green-500"
      />
      {/* <BubbleMenu editor={editor} options={{ placement: 'bottom', offset: 8, flip: true,size:{
        boundary:"clippingAncestors",
      } }}>
        <BubbleMenuToolbar editor={editor}/>
      </BubbleMenu> */}
    </div>
  )
}