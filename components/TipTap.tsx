'use client'
import { TextStyleKit } from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBarTipTap from './ToolBarTipTap'
import { BubbleMenu } from '@tiptap/react/menus'
import BubbleMenuToolbar from './BubbleMenuToolbar'

const extensions = [TextStyleKit, StarterKit]

export default () => {
  const editor = useEditor({
    extensions,
    content: `
            <h2>
              Hi there,
            </h2>
            <p>
              this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
            </p>
            <ul>
              <li>
                That’s a bullet list with one …
              </li>
              <li>
                … or two list items.
              </li>
            </ul>
            <p>
              Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
            </p>
            <pre><code class="language-css">body {
              display: none;
            }</code></pre>
            <p>
              I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
            </p>
            <blockquote>
              Wow, that’s amazing. Good work, boy! 👏
              <br />
              — Mom
            </blockquote>`,
    immediatelyRender:false
  })
  if(!editor) return <></>;
  return (
    <div className='p-4'>
      <ToolBarTipTap editor={editor} />
      <EditorContent editor={editor}/>
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      <BubbleMenu editor={editor} options={{ placement: 'bottom', offset: 8, flip: true,size:{
        boundary:"clippingAncestors",
      } }}>
        <BubbleMenuToolbar editor={editor}/>
      </BubbleMenu>
    </div>
  )
}