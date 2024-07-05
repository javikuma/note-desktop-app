import { NotePreview } from '@/components'
import { noteMocks } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (noteMocks.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span className="text-gray-400">No hay ninguna nota...</span>
      </ul>
    )
  }

  return (
    <ul className={className} {...props}>
      {noteMocks.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
