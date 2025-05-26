import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import { Modal } from '@/components/ui/modal/Modal'
import { IQuestion, IQuestionForm } from '@/types/question.types'
import { useForm } from 'react-hook-form'

interface EditQuestionModalProps {
  isOpen: boolean
  onClose: () => void
  defaultValues?: IQuestion
  onSave: (values: IQuestionForm) => void
}

export const EditQuestionModal = ({
  isOpen,
  onClose,
  defaultValues,
  onSave,
}: EditQuestionModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IQuestionForm>({
    defaultValues: {
      name: defaultValues?.name || '',
      imagePath: defaultValues?.imagePath || '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    onSave(data)
    onClose()
  })

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Preview image */}
      <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4">
        {defaultValues?.imagePath ? (
          <img
            src={defaultValues.imagePath}
            alt="Question image"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-black/50 text-sm">
            Нет изображения
          </div>
        )}
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <Field
          id="name"
          label="Название"
          placeholder="Введите название вопроса"
          state={errors.name ? 'error' : undefined}
          {...register('name', { required: 'Введите название' })}
        />

        <Field
          id="imagePath"
          label="Ссылка на изображение"
          placeholder="https://..."
          state={errors.imagePath ? 'error' : undefined}
          {...register('imagePath')}
        />

        <div className="flex justify-end gap-2 pt-2">
          <Button type="submit">
            Сохранить
          </Button>
        </div>
      </form>
    </Modal>
  )
}
