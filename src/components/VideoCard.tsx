import { Play } from 'react-feather'

export const VideoCard = ({
  id,
  name,
  type,
  onSelect = () => {}
}: {
  id: string;
  name: string;
  type: string;
  onSelect: (id: string) => void
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className="cursor-pointer flex items-center py-4 border-b border-gray-300 dark:border-gray-800"
    >
      <div>
        <Play className="mr-4 flex-1" />
      </div>
      <div className="overflow-hidden text-left items-start justify-center">
        <h2 className="flex-1 truncate font-semibold">
          {name}
        </h2>
        <p className="text-sm dark:text-gray-400 text-gray-600">
          {type}
        </p>
      </div>
    </div>
  )
}
