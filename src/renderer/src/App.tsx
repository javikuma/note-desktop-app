import {
  ActionButtonsRow,
  Content,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'

const App = () => {
  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" />
      </Sidebar>
      <Content className="border-l bg-zinc-900/90 border-l-white/20">
        <FloatingNoteTitle className="pt-2" />
        <MarkdownEditor />
      </Content>
    </RootLayout>
  )
}

export default App